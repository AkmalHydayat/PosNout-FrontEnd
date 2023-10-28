/* eslint-disable react/prop-types */

import { useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import ModalDetailTransaksiLog from "./ModalDetailTransaksiLog";

const ButtonDetail = ({ invoice, tanggal, daftarBarang, totalTransaksi }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <ModalDetailTransaksiLog
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        className={`bg-colorTwo text-purple-600 shadow-sm2 shadow-gray-200 border-[1px]  border-purple-600 py-1 px-2 transition-colors ease-in hover:scale-95 hover:bg-purple-700 hover:text-colorTwo rounded  group font-semibold text-md`}
        buttonLabel={
          <div className="flex items-center ">
            <AiOutlineFileSearch className="text-lg" />
            <div className="text-sm ms-1 font-semibold">Detail</div>
          </div>
        }
      >
        <div className="border-b-[1px] border-purple-300">
          <div className="px-6 py-4 text-2xl font-pt_Sans font-semibold text-purple-600">
            Detail Transaksi
          </div>
        </div>
        <div className="px-6">
          <div className="text-start font-medium px-5 mt-3 pb-5">
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
              <span className="">: {totalTransaksi}</span>
            </div>
          </div>
          <div
            className={` pb-5 ${
              daftarBarang.length > 10 ? "h-[400px] overflow-y-scroll" : ""
            }`}
          >
            <table className={`w-full text-gray-900  `}>
              <thead className="border-[1px] border-gray-300 bg-colorTwo">
                <tr className="text-center font-bold text-lg text-gray-900 ">
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
                    className="border-[1px] border-gray-300  bg-colorTwo"
                  >
                    <tr
                      className={`text-center ${
                        index % 2 ? "  " : "bg-gray-100"
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
                        {item.hargaSatuan}
                      </td>
                      <td className="w-14  py-0.5 border-s-[1px] border-gray-300">
                        {item.jumlah}
                      </td>
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-300">
                        {item.total}
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
