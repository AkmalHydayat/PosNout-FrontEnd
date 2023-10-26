/* eslint-disable react/prop-types */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";

const BodyModalGetProduk = ({
  children,
  isVisible,
  onClose,
  totalJumlah,
  invoiceNumber,
  transaksiList,
  tanggalSekarang,
  generateInvoice,
}) => {
  const [pembayaran, setPembayaran] = useState("");
  const [kembalian, setKembalian] = useState(0);

  const addLaporanTransaksi = async () => {
    try {
      await axios.post("http://localhost:3000/laporanTransaksi", {
        invoice: invoiceNumber,
        totalTransaksi: totalJumlah,
        waktuTransaksi: tanggalSekarang,
      });
    } catch (error) {
      console.error("Gagal menyimpan data transaksi ke database:", error);
    }
  };

  const addTransaksiDetail = async () => {
    const invoice = invoiceNumber; // Gantilah invoiceNumber dengan nilai sesuai kebutuhan

    const transaksiListWithInvoice = transaksiList.map((item) => {
      return {
        ...item,
        invoice: invoice,
      };
    });

    try {
      await axios.post("http://localhost:3000/orderDetail", {
        transaksiList: transaksiListWithInvoice,
      });
      console.log("Data transaksi berhasil disimpan ke database.");
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
          className={`w-[650px] relative text-base  font-semibold bg-colorOne rounded-md`}
        >
          {/* children berisi formAddStok  */}
          <div className="">{children}</div>
        </div>
        <div className={`w-[400px] relative`}>
          {/* Button Close Modal   */}
          <button
            className={`text-colorTwo ${
              isVisible
                ? "scale-100 opacity-100  duration-300"
                : "scale-75 opacity-0"
            } absolute z-20 -end-[10px] -top-[10px] bg-purple-600 text-colorTwo px-[7px] hover:bg-purple-700 hover:text-colorTwo rounded-lg  shadow-cus2 hover:shadow-sm2 hover:shadow-gray-400 shadow-gray-400  `}
            onClick={() => {
              onClose();
              setKembalian(0);
              setPembayaran("");
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div
            className={` relative text-xl font-bold bg-colorOne transition-all ease-out text-purple-600 border-b-[1px] border-purple-600  rounded-t-md py-4 text-center `}
          >
            Data Transaksi
          </div>
          <div className="bg-colorOne text-base font-semibold p-5 rounded-b space-y-3">
            <div className="flex border-b-[1px] pb-2 pe-2 border-purple-200 ">
              <div className="w-32">Invoice</div>
              <div className="text-end w-10">:</div>
              <div className="text-end w-72">{invoiceNumber}</div>
            </div>
            <div className="flex border-b-[1px] pb-2 pe-2 border-purple-200 ">
              <div className="w-32 ">Total Belanja</div>
              <div className="text-end w-10">:</div>
              <div className="text-end w-72">{totalJumlah}</div>
            </div>
            <div className="flex border-b-[1px] pb-2  border-purple-200 ">
              <div className="w-32">Bayar</div>
              <div className="text-end w-10">:</div>
              <div className="text-end w-72">
                <input
                  type="text"
                  className="bg-transparent py-0.5 px-2 text-end focus:outline-none placeholder:font-medium focus:bg-white focus:shadow-sm2 rounded focus:shadow-gray-400"
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
            <div className="flex border-b-[1px] pb-2 pe-2 border-purple-200 ">
              <div className="w-32">Kembalian</div>
              <div className="text-end w-10">:</div>
              <div className="text-end  w-72">{kembalian}</div>
            </div>
            <div className="flex justify-center gap-9 py-2">
              <button
                className={`bg-colorOne text-purple-600 w-20 shadow-cus2 hover:shadow-cus2 hover:shadow-gray-500 shadow-gray-400  transition-all ease-in  hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md`}
                onClick={() => {
                  if (pembayaran === "") {
                    // buat alert disini
                    return;
                  } else {
                    addTransaksiDetail();
                    addLaporanTransaksi();
                    generateInvoice();
                  }
                }}
              >
                Proses
              </button>
              <button
                className={`bg-colorOne text-purple-600 w-20 shadow-cus2 hover:shadow-cus2 hover:shadow-gray-500 shadow-gray-400  transition-all ease-in  hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md`}
              >
                Selesai
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyModalGetProduk;
