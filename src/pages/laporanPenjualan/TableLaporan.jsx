/* eslint-disable react/prop-types */
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ButtonDetail from "../transaksi/ButtonDetail";
const TableLaporan = ({
  stopSearch,
  searchResults,
  isSearching,
  transaksiLog,
  daftarBarang,
  getDaftarBarang,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(15); // Sesuaikan dengan jumlah baris yang ingin ditampilkan per halaman
  const indexOfLastItem = currentPage * perPage; // 15
  const indexOfFirstItem = indexOfLastItem - perPage; //0
  const currentItems = transaksiLog.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="pb-6 rounded shadow-md  border-[1px] dark:text-colorTwo border-gray-200 shadow-gray-300 bg-colorTwo dark:border-colorDarkOne dark:shadow-black  dark:bg-colorDarkTwo  transition-all ease-in">
      <div className=" p-6 space-y-3 rounded-b">
        <div className="flex justify-between h-full">
          <div className="space-x-1 flex ">
            <label htmlFor="" className="my-auto ">
              Show
            </label>
            <div className="flex border-[1px] border-purple-600 rounded">
              <div className="">
                <input
                  type="text"
                  className="w-8 text-center transition-all ease-in text-gray-900 dark:text-colorTwo dark:bg-colorDarkTwo  bg-colorTwo rounded-s font-semibold focus:outline-none h-full cursor-default"
                  value={perPage}
                  readOnly
                />
              </div>
              <div className="flex flex-col items-center justify-center space-y-[1px]">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  className="h-3 text-xs px-[3px] rounded-tr-sm cursor-pointer bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => setPerPage(perPage + 1)}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="h-3 text-xs px-[3px] rounded-br-sm bg-purple-600 hover:bg-purple-700 text-white cursor-pointer"
                  onClick={() =>
                    setPerPage(perPage > 10 ? perPage - 1 : perPage)
                  }
                />
              </div>
            </div>
            <div className="my-auto">entries</div>
          </div>
        </div>
        {isSearching ? (
          <div>
            <table className="w-full my-5">
              <thead className="border-[1px] border-gray-300 bg-colorTwo text-colorDarkOne dark:text-colorTwo dark:bg-colorDarkTwo transition-colors ease-in">
                <tr className="text-center font-bold text-lg ">
                  <td className="w-10 py-2 border-s-[1px] border-gray-300 ">
                    No
                  </td>
                  <td className="w-44 py-2 border-s-[1px] border-gray-300">
                    Invoice
                  </td>
                  <td className="w-40 py-2 border-s-[1px] border-gray-300">
                    Tanggal
                  </td>
                  <td className="w-36 py-2 border-s-[1px] border-gray-300">
                    Total Transaksi
                  </td>
                  <td className="w-32 py-2 border-x-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody className="border-b-[1px] border-gray-300">
                {searchResults.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-2  border-gray-300 "
                      colSpan={5}
                    >
                      Tidak ada Data Tersedia
                    </td>
                  </tr>
                ) : (
                  searchResults.map((item, index) => (
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
                      <td className="w-44 py-0.5 border-s-[1px] border-gray-300">
                        {item.invoice}
                      </td>
                      <td className="w-40 py-0.5 border-s-[1px] border-gray-300">
                        {item.waktuTransaksi}
                      </td>
                      <td className="w-36 py-0.5 border-s-[1px] border-gray-300 ">
                        {item.totalTransaksi.toLocaleString("id-ID")}
                      </td>
                      <td className="w-32 py-0.5 border-x-[1px] border-gray-300">
                        <div onClick={() => getDaftarBarang(item.invoice)}>
                          <ButtonDetail
                            invoice={item.invoice}
                            tanggal={item.waktuTransaksi}
                            totalTransaksi={item.totalTransaksi}
                            daftarBarang={daftarBarang}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="flex justify-between mt-3">
              <div className="text-sm">
                Showing 1 to {searchResults.length} of {searchResults.length}{" "}
                entries
              </div>
              <div className="space-x-1 flex text-sm font-semibold">
                <span
                  className={`bg-colorTwo dark:bg-colorDarkTwo dark:shadow-black dark:border-colorDarkTwo  dark:text-colorTwo  dark:hover:text-purple-600 dark:hover:shadow-sm2 dark:hover:shadow-black dark:shadow-cus2 cursor-pointer shadow-sm2 text-purple-600  border-[1px] border-colorTwo hover:border-[1px] hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover: hover:text-white  hover:bg-purple-700 rounded  group px-2 py-1  `}
                  onClick={stopSearch}
                >
                  Stop Search
                </span>
              </div>
            </div>
          </div>
        ) : null}

        {!isSearching ? (
          <div className="">
            <table className="w-full my-5">
              <thead className="border-[1px] border-gray-300 bg-colorTwo text-colorDarkOne dark:text-colorTwo dark:bg-colorDarkTwo transition-colors ease-in">
                <tr className="text-center font-bold text-lg ">
                  <td className="w-10 py-2 border-s-[1px] border-gray-300 ">
                    No
                  </td>
                  <td className="w-44 py-2 border-s-[1px] border-gray-300">
                    Invoice
                  </td>
                  <td className="w-40 py-2 border-s-[1px] border-gray-300">
                    Tanggal
                  </td>
                  <td className="w-36 py-2 border-s-[1px] border-gray-300">
                    Total Transaksi
                  </td>
                  <td className="w-32 py-2 border-x-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody className="border-b-[1px] border-gray-300 bg-colorTwo text-colorDarkOne dark:text-colorTwo dark:bg-colorDarkTwo transition-colors ease-in">
                {currentItems.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-2  border-gray-300 "
                      colSpan={5}
                    >
                      Tidak ada Data Tersedia
                    </td>
                  </tr>
                ) : (
                  currentItems.map((item, index) => (
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
                      <td className="w-44 py-0.5 border-s-[1px] border-gray-300">
                        {item.invoice}
                      </td>
                      <td className="w-40 py-0.5 border-s-[1px] border-gray-300">
                        {item.waktuTransaksi}
                      </td>
                      <td className="w-36 py-0.5 border-s-[1px] border-gray-300 ">
                        {item.totalTransaksi.toLocaleString("id-ID")}
                      </td>
                      <td className="w-32 py-0.5 border-x-[1px] border-gray-300">
                        <div onClick={() => getDaftarBarang(item.invoice)}>
                          <ButtonDetail
                            invoice={item.invoice}
                            tanggal={item.waktuTransaksi}
                            totalTransaksi={item.totalTransaksi}
                            daftarBarang={daftarBarang}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="flex justify-between mt-3">
              <div className="text-sm">
                Showing {indexOfFirstItem + 1} to{" "}
                {Math.min(indexOfLastItem, transaksiLog.length)} of{" "}
                {transaksiLog.length} entries
              </div>
              <div className="space-x-1 flex text-sm font-semibold">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`bg-colorTwo dark:bg-colorDarkTwo dark:shadow-black cursor-pointer   dark:text-colorTwo text-purple-600 shadow-sm2 dark:hover:text-purple-600 dark:hover:shadow-sm2 dark:hover:shadow-black dark:shadow-cus2 shadow-gray-300 transition-all ease-in hover:shadow-gray-50  hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1  `}
                >
                  Previous
                </button>
                <div className="bg-colorTwo transition-all ease-in  dark:bg-colorDarkTwo dark:shadow-black  px-3 py-1  border-[1px] shadow-sm2 dark:shadow-cus2 shadow-gray-300 border-purple-600 dark:text-colorTwo text-purple-600 rounded cursor-default">
                  {currentPage}
                </div>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={indexOfLastItem >= transaksiLog.length}
                  className={`bg-colorTwo dark:bg-colorDarkTwo dark:shadow-black cursor-pointer   dark:text-colorTwo text-purple-600 shadow-sm2 dark:hover:text-purple-600 dark:hover:shadow-sm2 dark:hover:shadow-black dark:shadow-cus2  shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover:shadow-sm2 hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 `}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TableLaporan;
