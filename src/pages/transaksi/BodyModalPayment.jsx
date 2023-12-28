/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import AlertShow from "../../components/ui/Alert";
import { getProduks, getSalesReport, getTransaksiLogs } from "../../utils/api";

const BodyModalGetProduk = ({
  children,
  isVisible,
  onClose,
  totalJumlah,
  setTotalJumlah,
  setTransaksiList,
  invoiceNumber,
  transaksiList,
  tanggalSekarang,
  setInvoiceNumber,
  generateInvoiceNumber,
  setProduks,
  totalKeuntunganPerTransaksi,
  setTotalKeuntunganPerTransaksi,
}) => {
  const [pembayaran, setPembayaran] = useState("");
  const [kembalian, setKembalian] = useState(0);
  const [transaksiLog, setTransaksiLog] = useState([]);
  const [salesReport, setSalesReport] = useState([]);
  const [penjualanPerHari, setPenjualanPerHari] = useState(0);
  const [keuntunganPerHari, setKeuntunganPerHari] = useState(0);
  const [transaksiPerHari, setTransaksiPerHari] = useState(0);

  useEffect(() => {
    transaksiHariIni();
    const fetchData = async () => {
      try {
        const dataSales = await getSalesReport();
        setSalesReport(dataSales);
      } catch (error) {
        // Handle error jika diperlukan
        console.error("Error in component:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    // transaksiHariIni akan dijalankan setelah setTransaksiLog selesai

    transaksiHariIni();
  }, [transaksiLog]);

  // sales report

  const addSalesReport = async () => {
    // jika salesReport tidak kosong jalankan ini
    if (salesReport.length > 0) {
      //cari semua salesreport yang dilakukan hari ini
      const filter = salesReport.filter((report) => {
        const reportData = report.tanggal;
        return reportData === tanggalSekarang;
      });
      // jika ada tanggalnya sama maka tambahkan data pada database, jika tidak ada buat field baru pada database
      if (filter.length > 0) {
        try {
          await axios.put(
            `http://localhost:3000/laporanPenjualan/${tanggalSekarang}`,
            {
              tanggal: tanggalSekarang,
              totalTransaksi: transaksiPerHari,
              totalPenjualan: penjualanPerHari,
              totalKeuntungan: keuntunganPerHari,
            }
          );
        } catch (error) {
          console.error("Gagal menyimpan data transaksi ke database:", error);
        }
      } else {
        try {
          await axios.post("http://localhost:3000/laporanPenjualan", {
            tanggal: tanggalSekarang,
            totalTransaksi: transaksiPerHari,
            totalPenjualan: penjualanPerHari,
            totalKeuntungan: keuntunganPerHari,
          });
        } catch (error) {
          console.error("Gagal menyimpan data transaksi ke database:", error);
        }
      }
    }
  };
  useEffect(() => {
    addSalesReport();
  }, []);
  useEffect(() => {
    addSalesReport();
  }, [transaksiPerHari, keuntunganPerHari, penjualanPerHari]);

  const addLaporanTransaksi = async () => {
    try {
      await axios.post("http://localhost:3000/laporanTransaksi", {
        invoice: invoiceNumber,
        totalTransaksi: totalJumlah,
        waktuTransaksi: tanggalSekarang,
        nominalPembayaran: pembayaran,
        kembalian: kembalian,
        totalKeuntunganPerTransaksi: totalKeuntunganPerTransaksi,
      });
      const updatedTransaksi = await getTransaksiLogs();
      setTransaksiLog(updatedTransaksi);
    } catch (error) {
      console.error("Gagal menyimpan data transaksi ke database:", error);
    }
  };

  const transaksiHariIni = () => {
    if (transaksiLog.length > 0) {
      // Pastikan transaksiLog tidak kosong
      const filteredData = transaksiLog.filter((log) => {
        const logDate = log.waktuTransaksi;
        return logDate === tanggalSekarang;
      });
      setTransaksiPerHari(filteredData.length);
      setPenjualanPerHari(
        filteredData.reduce((accumulator, transaksi) => {
          return accumulator + transaksi.totalTransaksi;
        }, 0) // Inisialisasi accumulator dengan 0
      );
      setKeuntunganPerHari(
        filteredData.reduce((accumulator, transaksi) => {
          return accumulator + transaksi.totalKeuntunganPerTransaksi;
        }, 0) // Inisialisasi accumulator dengan 0
      );
    }
  };

  const AlertMessage = (message, width, icon) => {
    AlertShow(message, width, icon);
  };

  const updateStok = async () => {
    try {
      for (const transaksiItem of transaksiList) {
        const { barcode, jumlah } = transaksiItem;

        // Ambil stok saat ini dari database berdasarkan barcode
        const responseGet = await axios.get(
          `http://localhost:3000/getproduk/${barcode}`
        );

        if (responseGet.status !== 200) {
          console.error(`Gagal mendapatkan produk dengan barcode ${barcode}`);
          continue;
        }
        const currentProdukStok = responseGet.data.stok;

        // Kurangi stok saat ini dengan jumlah yang dimasukkan
        const updatedStokProduk = currentProdukStok - jumlah;

        // Buat permintaan ke endpoint /putproduk untuk mengupdate stok produk
        // const responseUpdate =
        await axios.put(`http://localhost:3000/putproduk/${barcode}`, {
          stok: updatedStokProduk,
        });
        const updatedProduks = await getProduks(); // Panggil fungsi getKategoris untuk memperbarui data
        setProduks(updatedProduks);
      }
    } catch (error) {
      console.error("Terjadi kesalahan: " + error.message);
    }
  };

  const addTransaksiDetail = async () => {
    const transaksiListWithInvoice = transaksiList.map((item) => {
      return {
        ...item,
      };
    });

    try {
      await axios.post("http://localhost:3000/orderDetail", {
        transaksiList: transaksiListWithInvoice,
      });
      // console.log("Data transaksi berhasil disimpan ke database.");
    } catch (error) {
      console.error("Gagal menyimpan data transaksi ke database:", error);
    }
  };

  const calculateKembalian = (pembayaran, totalJumlah) => {
    if (pembayaran !== "") {
      const bayar = parseInt(pembayaran); // Menggunakan parseInt
      const total = parseInt(totalJumlah);

      if (!isNaN(bayar) && !isNaN(total)) {
        const kembalian = bayar - total;
        setKembalian(kembalian); // Menggunakan toFixed(2) untuk 2 desimal
      }
    }
  };
  return (
    <div
      className={`fixed inset-0 ${
        isVisible ? "visible bg-black/30" : "invisible"
      } flex items-center justify-center font-pt_Sans  backdrop-blur-sm transition-colors`}
      id="wrapper"
    >
      <div
        className={`flex items-center transition-all ease-in-out space-x-12 ${
          isVisible
            ? "scale-100 opacity-100 delay-150 duration-300"
            : "scale-75 opacity-0 delay-0"
        }`}
      >
        <div
          className={`w-[650px] relative text-base  font-semibold bg-colorTwo rounded-md`}
        >
          <div className="">{children}</div>
        </div>
        <div className={`w-[400px] relative`}>
          {/* Button Close Modal   */}
          <button
            className={`text-colorTwo ${
              isVisible
                ? "scale-100 opacity-100  duration-300"
                : "scale-75 opacity-0"
            } absolute z-20 -end-[10px] -top-[10px] bg-purple-600 text-colorTwo px-[7px] hover:bg-purple-700 hover:text-colorTwo rounded-lg  shadow-cus2 hover:shadow-sm2 hover:shadow-black/40 shadow-black/20   `}
            onClick={() => {
              onClose();
              setKembalian(0);
              setPembayaran("");
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div
            className={` relative text-xl font-bold bg-colorTwo dark:bg-colorDarkTwo transition-all ease-out text-purple-600 border-b-[1px] border-purple-600  rounded-t-md py-4 text-center `}
          >
            Data Transaksi
          </div>
          <div className="bg-colorTwo dark:bg-colorDarkTwo text-base p-5 font-medium rounded-b space-y-3">
            <div className="flex border-b-[1px] pb-2 pe-2 border-purple-200 dark:border-colorDarkOne/90  ">
              <div className="w-32">Invoice</div>
              <div className="text-end w-10">:</div>
              <div className="text-end w-72 font-semibold">{invoiceNumber}</div>
            </div>
            <div className="flex border-b-[1px] pb-2 pe-2 border-purple-200 dark:border-colorDarkOne/90  ">
              <div className="w-32 ">Total Belanja</div>
              <div className="text-end w-10">:</div>
              <div className="text-end w-72 ">
                {totalJumlah.toLocaleString("id-ID")}
              </div>
            </div>
            <div className="flex border-b-[1px] pb-2  border-purple-200 dark:border-colorDarkOne/90  ">
              <div className="w-32">Bayar</div>
              <div className="text-end w-10">:</div>
              <div className="text-end w-72 ">
                <input
                  type="text"
                  className="bg-transparent py-0.5 px-2 text-end focus:outline-none placeholder:font-medium focus:bg-white  rounded border-[1px] border-white dark:border-colorDarkTwo dark:hover:border-purple-600 dark:bg-colorDarkTwo dark:focus:border-purple-600  hover:border-purple-600 transition-colors ease-in focus:border-[1px] focus:border-purple-600"
                  placeholder="bayar"
                  value={pembayaran}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const sanitizedValue = inputValue.replace(/[^0-9]/g, "");
                    if (sanitizedValue.charAt(0) === "0") {
                      // Angka 0 berada di awal inputan, jadi kita menghapusnya
                      setPembayaran(sanitizedValue.slice(1));
                    } else {
                      setPembayaran(sanitizedValue);
                    }
                    if (sanitizedValue === "") {
                      setKembalian(0);
                    }
                    calculateKembalian(sanitizedValue, totalJumlah);
                  }}
                />
              </div>
            </div>
            <div className="flex border-b-[1px] pb-2 pe-2 border-purple-200 dark:border-colorDarkOne/90  ">
              <div className="w-32">Kembalian</div>
              <div className="text-end w-10">:</div>
              <div className="text-end  w-72 ">
                {kembalian.toLocaleString("id-ID")}
              </div>
            </div>
            <div className="flex justify-center gap-9 py-2">
              <button
                className={`bg-colorTwo dark:border-[1px] w-[75px] dark:bg-colorDarkTwo dark:shadow-black  dark:text-colorTwo  dark:hover:text-purple-600 dark:hover:shadow-sm2 font-semibold dark:hover:shadow-black hover:dark:shadow-purple-600 dark:shadow-cus2 cursor-pointer shadow-sm2 text-purple-600  dark:border-purple-600 hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover: hover:text-white  hover:bg-purple-700 rounded  group py-1 `}
                onClick={() => {
                  if (pembayaran === "") {
                    AlertMessage("Masukkan nominal pembayaran", 400, "warning");
                  } else if (kembalian.toString().charAt(0) == "-") {
                    AlertMessage(
                      "Nominal pembayaran tidak cukup",
                      400,
                      "warning"
                    );
                  } else {
                    // stok barang yang dipilih akan berkurang
                    addTransaksiDetail();
                    addLaporanTransaksi();
                    onClose();
                    updateStok();
                    setTimeout(() => {
                      // addSalesReport();
                      const newInvoice = generateInvoiceNumber();
                      setInvoiceNumber(newInvoice);
                      setTotalJumlah(0);
                      setTotalKeuntunganPerTransaksi(0);
                      setTransaksiList([]);
                      setPembayaran("");
                      setKembalian(0);
                    }, 500);
                  }
                }}
              >
                Proses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyModalGetProduk;
