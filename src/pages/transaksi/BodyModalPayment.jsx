/* eslint-disable react/prop-types */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const BodyModalGetProduk = ({
  children,
  isVisible,
  onClose,
  totalJumlah,
  invoiceNumber,
}) => {
  const [pembayaran, setPembayaran] = useState("");
  const [kembalian, setKembalian] = useState(0);

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
      } flex items-center justify-center font-titilium  backdrop-blur-sm transition-colors`}
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
          {/* Button Close Modal */}

          {/* children berisi formAddStok  */}
          <div className="">{children}</div>
        </div>
        <div className={`w-[400px] relative`}>
          <button
            className="text-colorTwo absolute z-20 -end-2 -top-2 bg-purple-600 px-2 rounded-lg  hover:bg-purple-700 hover:shadow-sm"
            onClick={() => {
              onClose();
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div
            className={` relative text-xl font-bold transition-all ease-out text-purple-600 border-b-2 border-purple-600 bg-colorTwo rounded-t-md py-4 text-center `}
          >
            Data Transaksi
          </div>
          <div className="bg-colorTwo text-base font-semibold p-5 rounded-b space-y-3">
            <div className="flex border-b-[1px] pb-2 border-purple-200 ">
              <div className="w-32">Invoice</div>
              <div className="text-end w-10">:</div>
              <div className="text-end w-72">{invoiceNumber}</div>
            </div>
            <div className="flex border-b-[1px] pb-2 border-purple-200 ">
              <div className="w-32">Total Belanja</div>
              <div className="text-end w-10">:</div>
              <div className="text-end w-72">{totalJumlah}</div>
            </div>
            <div className="flex border-b-[1px] pb-2 border-purple-200 ">
              <div className="w-32">Bayar</div>
              <div className="text-end w-10">:</div>
              <div className="text-end w-72">
                <input
                  type="text"
                  className="bg-transparent text-end accent-black focus:outline-purple-600"
                  placeholder="bayar"
                  value={pembayaran}
                  onChange={(e) => {
                    setPembayaran(e.target.value);
                    calculateKembalian(e.target.value, totalJumlah);
                  }}
                />
              </div>
            </div>
            <div className="flex border-b-[1px] pb-2 border-purple-200 ">
              <div className="w-32">Kembalian</div>
              <div className="text-end w-10">:</div>
              <div className="text-end  w-72">{kembalian}</div>
            </div>
            <div className="flex justify-evenly py-2">
              <button className="px-3 py-1 w-32 bg-purple-600 rounded text-white">
                Bayar & Print
              </button>
              <button className="px-3 py-1 w-32 bg-purple-600 rounded text-white">
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
