/* eslint-disable react/prop-types */

import { useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BiPrinter } from "react-icons/bi";
import ModalDetailTransaksiLog from "./ModalDetailTransaksiLog";

const ButtonDetail = ({ invoice, tanggal, daftarBarang, totalTransaksi }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <ModalDetailTransaksiLog
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        className={`bg-colorTwo dark:bg-colorDarkTwo dark:hover:bg-purple-600 dark:shadow-black/70 text-purple-600 shadow-sm2 shadow-gray-200 border-[1px]  border-purple-600 py-1 px-2 transition-all ease-in hover:scale-95 hover:bg-purple-700 hover:text-colorTwo rounded  group font-semibold text-md`}
        buttonLabel={
          <div className="flex items-center ">
            <AiOutlineFileSearch className="text-lg " />
            <div className="text-sm ms-1 font-semibold">Detail</div>
          </div>
        }
      >
        <div className="border-b-[1px] border-purple-300 bg-">
          <div className="px-6 py-4 text-2xl font-pt_Sans font-semibold text-purple-600">
            Detail Transaksi
          </div>
        </div>
        <div className="px-6 ">
          <div className="text-start relative font-medium px-5 mt-3 pb-5">
            <button className="absolute end-0 px-3 space-x-2 text-base flex items-center bg-colorTwo dark:border-[1px]  dark:bg-colorDarkTwo dark:shadow-black  dark:text-colorTwo  dark:hover:text-purple-600 dark:hover:shadow-cus2 dark:hover:shadow-black hover:dark:shadow-purple-600 dark:shadow-cus2 cursor-pointer shadow-sm2 text-purple-600  dark:border-purple-600 hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-black/60 hover: hover:text-white  hover:bg-purple-700 rounded group font-semibold py-1">
              <div>
                <BiPrinter />
              </div>
              <div>Print</div>
            </button>
            <div className="flex ">
              <span className="w-32">Invoice</span>
              <span className="">: {invoice}</span>
            </div>
            <div className="flex ">
              <span className="w-32">Tanggal</span>
              <span className="">: {tanggal}</span>
            </div>
            <div className="flex ">
              <span className="w-32">Total Transaksi</span>
              <span className="">: Rp {totalTransaksi.toLocaleString("id-ID")}</span>
            </div>
          </div>
          <div
            className={` pb-5 ${
              daftarBarang.length > 10 ? "h-[400px] overflow-y-scroll" : ""
            }`}
          >
            <table className={`w-full`}>
              <thead className="border-[1px] border-gray-300 bg-purple-600 text-colorTwo  transition-colors ease-in">
                <tr className="text-center font-bold text-lg  ">
                  <td className="w-10 py-2 border-s-[1px] border-gray-300 ">
                    No
                  </td>
                  <td className="w-32 py-2 border-s-[1px] border-gray-300">
                    Barcode
                  </td>
                  <td className="w-72 py-2 border-s-[1px] border-gray-300">
                    Nama Produk
                  </td>
                  <td className="w-28 py-2 border-s-[1px] border-gray-300">
                    Harga
                  </td>
                  <td className="w-14  py-2 border-s-[1px] border-gray-300">
                    Qty
                  </td>
                  <td className="w-32 py-2 border-s-[1px] border-gray-300">
                    Total
                  </td>
                </tr>
              </thead>
              {daftarBarang.map((item, index) => {
                return (
                  <tbody
                    key={index}
                    className="border-b-[1px] border-gray-300 bg-colorTwo text-colorDarkOne dark:text-colorTwo dark:bg-colorDarkTwo transition-colors ease-in"
                  >
                    <tr
                      className={`text-center ${
                        index % 2
                          ? `bg-colorTwo dark:bg-colorDarkTwo text-colorDarkOne dark:text-colorTwo transition-all ease-in`
                          : `bg-gray-100 dark:bg-colorDarkOne/50 text-colorDarkOne dark:text-colorTwo transition-all ease-in`
                      }  font-normal text-base text-gray-900`}
                      key={index}
                    >
                      <td className="w-10 py-0.5 border-s-[1px] border-gray-300 ">
                        {index + 1}
                      </td>
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-300">
                        {item.barcodeProduk}
                      </td>
                      <td className="w-72 py-0.5 border-s-[1px] border-gray-300">
                        {item.namaProduk}
                      </td>
                      <td className="w-28 py-0.5 border-s-[1px] border-gray-300">
                        {item.hargaSatuan.toLocaleString("id-ID")}
                      </td>
                      <td className="w-14  py-0.5 border-s-[1px] border-gray-300">
                        {item.jumlah}
                      </td>
                      <td className="w-32 py-0.5 border-x-[1px] border-gray-300">
                        {item.total.toLocaleString("id-ID")}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </ModalDetailTransaksiLog>
    </div>
  );
};

export default ButtonDetail;
