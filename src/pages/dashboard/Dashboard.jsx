/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {} from "react-router-dom";
import LayoutPage from "../../layout/PageLayout";
import { BsBagCheck } from "react-icons/bs";
// import { BiLineChart } from "react-icons/bi";
import {
  PiChartLineUpLight,
  // PiChartPieSlice,
  PiChartBarLight,
} from "react-icons/pi";
import {
  LiaFileInvoiceDollarSolid,
  LiaMoneyBillWaveSolid,
} from "react-icons/lia";
import { useEffect, useState } from "react";
import {
  getOrderDetail,
  getProduks,
  getSalesReport,
  getTransaksiLogs,
} from "../../utils/api";
import DateNow from "../../components/Date";
import axios from "axios";

const Dashboard = (delay, active) => {
  const [transaksiLog, setTransaksiLog] = useState([]);
  const [produks, setProduks] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);
  const [penjualanPerHari, setPenjualanPerHari] = useState([]);
  const [keuntunganPerHari, setKeuntunganPerHari] = useState([]);
  const [minimumStok, setMinimumStok] = useState([]);
  const [barang_Terlaris, setBarang_Terlaris] = useState([]);
  const [barang_KurangLaris, setBarang_KurangLaris] = useState([]);
  const [salesReport, setSalesReport] = useState([]);
  const [kas, setKas] = useState(0);
  const { hari, month, year } = DateNow();
  const tanggalSekarang = hari + "-" + month + "-" + year;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataTransaksiLog = await getTransaksiLogs();
        const dataProduk = await getProduks();
        const dataOrder = await getOrderDetail();
        const dataSales = await getSalesReport();
        setTransaksiLog(dataTransaksiLog);
        setProduks(dataProduk);
        setOrderDetail(dataOrder);
        setSalesReport(dataSales);
      } catch (error) {
        // Handle error jika diperlukan
        console.error("Error in component:", error);
      }
    };
    fetchData();
  }, []);

  const transaksiHariIni = () => {
    if (transaksiLog.length > 0) {
      // Pastikan transaksiLog tidak kosong
      const filteredData = transaksiLog.filter((log) => {
        const logDate = log.waktuTransaksi;
        return logDate === tanggalSekarang;
      });
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

  const addSalesReport = async () => {
    if (salesReport.length > 0) {
      const filteredData = transaksiLog.filter((log) => {
        const logDate = log.waktuTransaksi;
        return logDate === tanggalSekarang;
      });
      const totalTransaksi = filteredData.length;

      const filter = salesReport.filter((report) => {
        const reportData = report.tanggal;
        return reportData === tanggalSekarang;
      });
      if (filter.length > 0) {
        try {
          await axios.put(
            `http://localhost:3000/laporanPenjualan/${tanggalSekarang}`,
            {
              tanggal: tanggalSekarang,
              totalTransaksi,
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
            totalTransaksi,
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
  }, [penjualanPerHari, keuntunganPerHari]);

  const barangTerlaris = () => {
    if (produks.length > 0) {
      const filteredData = orderDetail.filter((detail) =>
        produks.some((produk) => produk.barcode === detail.barcodeProduk)
      );
      const hasilJumlah = filteredData.reduce((acc, obj) => {
        const { jumlah, namaProduk } = obj;

        if (!acc[namaProduk]) {
          acc[namaProduk] = jumlah;
        } else {
          acc[namaProduk] += jumlah;
        }
        return acc;
      }, []);

      const hasilArray = Object.keys(hasilJumlah).map((namaProduk) => ({
        namaProduk,
        jumlah: hasilJumlah[namaProduk],
      }));

      setBarang_Terlaris(hasilArray);
    }
  };

  const barangKurangTerlaris = () => {
    if (produks.length > 0) {
      const arrayProduk = produks.map((obj) => obj.nama_produk);
      const arrayOrder = orderDetail.map((obj) => obj.namaProduk);
      const filteredData = arrayProduk.filter(
        (produk) => !arrayOrder.includes(produk)
      );

      setBarang_KurangLaris(filteredData);
    }
  };

  const stokMinimum = () => {
    if (produks.length > 0) {
      const filteredData = produks.filter((produk) => {
        const stok = produk.stok;
        return stok <= 10;
      });
      setMinimumStok(filteredData);
    }
  };

  const kasToko = () => {
    const totalUangMasuk = transaksiLog.reduce((accumulator, transaksi) => {
      return accumulator + transaksi.totalTransaksi;
    }, 0);
    const totalLaba = transaksiLog.reduce((accumulator, transaksi) => {
      return accumulator + transaksi.totalKeuntunganPerTransaksi;
    }, 0);
    setKas(totalUangMasuk - totalLaba);
  };

  useEffect(() => {
    transaksiHariIni();
    kasToko();
    stokMinimum();
    barangTerlaris();
    barangKurangTerlaris();
  }, [transaksiLog, tanggalSekarang, produks]);

  return (
    <LayoutPage>
      <div className="">
        <div
          className={`p-6 space-y-6 font-pt_Sans text-base font-medium text-gray-950 opacity-100 `}
        >
          <div className="h-44 flex space-x-6 ">
            <div
              className={` shadow-md shadow-black/20  transition-all ease-in dark:shadow-black bg-gradient-to-br  from-teal-600 to-fuchsia-600 p-3 w-full rounded-md`}
            >
              <div className="flex justify-between">
                <div className="w-2/3 ">Total Penjualan/ Hari</div>
                {/* gunakan transaksiLog, lalu filter table sesuai dengan hari atau tanggal yang berlangsung (karena /hari), lalu ambil properti total pada semua data filteran tersebut dan jumlahkan semuanya */}
                <div className={`   rounded me-3`}>
                  <BsBagCheck
                    className="text-[36px] rounded p-[6px] relative text-gray-900 dark:text-colorTwo transition-all ease-in"
                    transition-all
                    ease-in
                  />
                </div>
              </div>
              <div className="text-[40px] text-end me-4 mt-10 font-semibold   text-gray-900 dark:text-colorTwo transition-all ease-in">
                {" "}
                <span className="me-3">Rp.</span>
                {penjualanPerHari.length === 0
                  ? 0
                  : penjualanPerHari.toLocaleString("id-ID")}
              </div>
            </div>

            <div
              className={` shadow-md shadow-black/20 transition-all ease-in dark:shadow-black bg-gradient-to-br from-fuchsia-600 to-amber-600  p-3 w-full rounded-md `}
            >
              <div className="flex justify-between">
                {/* gunakan transaksiLog, lalu filter table berdasarkan transaksilog.keuntungan  sesuai dengan hari atau tanggal yang berlangsung (karena /hari), lalu ambil properti total pada semua data filteran tersebut dan jumlahkan semuanya */}

                <div className="w-2/3  ">Keuntungan/ Hari</div>
                <div className={`   rounded me-3`}>
                  <LiaFileInvoiceDollarSolid className="text-[36px] rounded p-[6px] relative text-gray-900 dark:text-colorTwo transition-all ease-in" />
                </div>
              </div>
              <div className="text-[40px] text-end me-4 mt-10 font-semibold text-gray-900 dark:text-colorTwo transition-all ease-in ">
                {" "}
                <span className="me-3">Rp.</span>
                {keuntunganPerHari.length === 0
                  ? 0
                  : keuntunganPerHari.toLocaleString("id-ID")}
              </div>
            </div>
            <div
              className={` shadow-md shadow-black/20 dark:shadow-black transition-all ease-in bg-gradient-to-br from-teal-600 to-lime-500 p-3 w-full rounded-md `}
            >
              <div className="flex justify-between">
                {/* gunakan table produk, lalu ambil harga beli kalikan dengan stok lalu jumlahkan semua barang yang ada*/}
                <div className="w-2/3 ">Kas Toko</div>
                <div className={`rounded me-3`}>
                  <LiaMoneyBillWaveSolid className="text-[39px] rounded p-[6px] relative text-gray-900 dark:text-colorTwo transition-all ease-in" />
                </div>
              </div>
              <div className="text-[40px] text-end me-4 mt-10 font-semibold   text-gray-900 dark:text-colorTwo transition-all ease-in ">
                {" "}
                <span className="me-3">Rp.</span>
                {kas.toLocaleString("id-ID")}
              </div>
            </div>
          </div>
          <div className="h-72 flex space-x-6 ">
            <div
              className={` shadow-md shadow-black/20  transition-all ease-in dark:shadow-black border-[1px] border-gray-300 bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3  w-full rounded-md `}
            >
              <div className="flex justify-between">
                {/* gunakan orderdetail, lalu cari nama produk atau barcode yang paling banyak yang ada pada table orderdetail, gunakan filter/hari /minggu /bulan */}

                <div className="w-2/3 mb-2 px-3">Barang Paling Laku</div>
              </div>
              <div
                className={`${
                  barang_Terlaris.length >= 8 ? "h-56 overflow-y-scroll" : ""
                } px-3 `}
              >
                <table className="w-full border-[1px] border-gray-900  dark:border-gray-400">
                  <thead className="bg-gradient-to-br  from-orange-600/80 to-orange-600/80">
                    <tr className="text-center border-[1px] border-gray-900  dark:border-gray-400 w-2/12">
                      <td className=" py-1 border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12 ">
                        Nama Barang
                      </td>
                      <td className="py-1">Total</td>
                    </tr>
                  </thead>

                  <tbody className="text-center text-base">
                    {barang_Terlaris.length == 0 ? (
                      <tr>
                        <td className=" text-center py-1 " colSpan={2}>
                          Tidak ada Data.
                        </td>
                      </tr>
                    ) : (
                      barang_Terlaris
                        .sort((a, b) => b.jumlah - a.jumlah)
                        .map((item, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2
                                ? ""
                                : "bg-gray-200 dark:bg-colorDarkOne/50"
                            }`}
                          >
                            <td className="border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12">
                              {item.namaProduk}
                            </td>
                            <td className="">{item.jumlah}</td>
                          </tr>
                        ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className={`shadow-md shadow-black/20  transition-all ease-in dark:shadow-black border-[1px] border-gray-300 bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 w-full rounded-md `}
            >
              <div className="flex justify-between">
                {/* gunakan orderdetail dan daftarproduk, lalu cari nama produk yang ada di daftarproduk tetapi tidak ada didalam order detail*/}
                <div className="w-2/3 mb-2 px-3">Barang Kurang Laku</div>
              </div>
              <div
                className={`${
                  barang_KurangLaris.length >= 8 ? "h-56 overflow-y-scroll" : ""
                } px-3 `}
              >
                <table className="w-full border-[1px] border-gray-900  dark:border-gray-400">
                  <thead className="bg-gradient-to-br   from-teal-600/80 to-teal-600/80">
                    <tr className="text-center border-[1px] border-gray-900  dark:border-gray-400 w-2/12">
                      <td className=" py-1 border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12 ">
                        Nama Barang
                      </td>
                    </tr>
                  </thead>

                  <tbody className="text-center text-base">
                    {barang_KurangLaris.length == 0 ? (
                      <tr>
                        <td className=" text-center py-1 ">Tidak ada Data.</td>
                      </tr>
                    ) : (
                      barang_KurangLaris.map((item, index) => (
                        <tr
                          key={index}
                          className={`${
                            index % 2
                              ? ""
                              : "bg-gray-200 dark:bg-colorDarkOne/50"
                          }`}
                        >
                          <td className="border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12">
                            {item}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className={`shadow-md shadow-black/20  transition-all ease-in dark:shadow-black border-[1px] border-gray-300 bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 w-full rounded-md `}
            >
              <div className="flex justify-between ">
                {/* gunakan table daftarproduk lalu cari barang dengan stok kurang dari 10, dan tampilkan  */}
                <div className="w-2/3 mb-2 px-3 ">Stok Minimum</div>
              </div>
              <div
                className={`${
                  minimumStok.length >= 8 ? "h-56 overflow-y-scroll" : ""
                } px-3 `}
              >
                <table className="w-full border-[1px] border-gray-900  dark:border-gray-400">
                  <thead className="bg-gradient-to-br   from-fuchsia-600/80 to-fuchsia-600/80">
                    <tr className="text-center border-[1px] border-gray-900  dark:border-gray-400 w-2/12">
                      <td className=" py-1 border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12 ">
                        Nama Barang
                      </td>
                      <td className="py-1">Stok</td>
                    </tr>
                  </thead>

                  <tbody className="text-center text-base">
                    {minimumStok.length == 0 ? (
                      <tr>
                        <td className=" text-center py-1 " colSpan={2}>
                          Tidak ada Data.
                        </td>
                      </tr>
                    ) : (
                      minimumStok
                        .sort((a, b) => b.stok - a.stok)
                        .map((item, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2
                                ? ""
                                : "bg-gray-200 dark:bg-colorDarkOne/50"
                            }`}
                          >
                            <td className="border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12">
                              {item.nama_produk}
                            </td>
                            <td className="">{item.stok}</td>
                          </tr>
                        ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="h-44 flex space-x-6">
            <div
              className={`shadow-md shadow-black/20  transition-all ease-in dark:shadow-black bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 w-full rounded-md border-[1px] border-gray-300`}
            >
              <div className="flex justify-between ">
                <span>Grafik Penjualan/Hari</span>
                <span
                  className={`bg-colorTwo transition-all ease-in  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo rounded me-3 mt-1 shadow-sm2 shadow-black/20 dark:shadow-black/40`}
                >
                  {" "}
                  <PiChartLineUpLight className="text-[39px] rounded  p-[6px] relative text-purple-600  " />
                </span>
              </div>
            </div>
            <div
              className={` shadow-md shadow-black/20 transition-all ease-in dark:shadow-black bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 w-full rounded-md border-[1px] border-gray-300`}
            >
              <div className="flex justify-between">
                <span>Grafik Laba/Hari</span>
                <span
                  className={`bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo rounded me-3 mt-1 shadow-sm2 shadow-black/20 dark:shadow-black/40 transition-all ease-in`}
                >
                  {" "}
                  <PiChartLineUpLight className="text-[39px] rounded  p-[6px] relative text-purple-600 " />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Dashboard;
