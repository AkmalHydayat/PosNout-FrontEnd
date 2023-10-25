/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import SearchGroup from "../../components/ui/SearchGroup";

const TableStok = ({ stoks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8); // Sesuaikan dengan jumlah baris yang ingin ditampilkan per halaman
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  // Fungsi untuk mencari stok berdasarkan nama
  const searchStok = () => {
    const results = stoks.filter((item) =>
      item.nama_produk.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setIsSearching(true);
  };

  // Fungsi untuk menutup table pecarian
  const stopSearch = () => {
    setIsSearching(false);
    setSearchTerm(""); // Mengosongkan input pencarian saat pencarian dihentikan
    setSearchResults([]);
  };

  const currentItems = stoks.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div>
      <div className="bg-colorTwo p-6 space-y-3  rounded-b ">
        <div className="flex justify-between h-full">
          <div className="space-x-1.5 flex">
            <label htmlFor="" className="my-auto">
              Show
            </label>
            <div className="flex border-[1px] border-purple-600 rounded">
              <div className="">
                <input
                  type="text"
                  className="w-8 text-center  bg-colorTwo rounded font-semibold focus:outline-none h-full cursor-default"
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
                    setPerPage(perPage > 5 ? perPage - 1 : perPage)
                  }
                />
              </div>
            </div>
            <div className="my-auto">entries</div>
          </div>
          <SearchGroup
            onSubmit={searchStok}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={"Nama Item"}
          />
        </div>
        {isSearching ? (
          <div>
            <table className="w-full text-gray-900">
              <thead className="border-[1px] border-gray-300 bg-colorTwo">
                <tr className="text-center font-bold text-lg ">
                  <td className="w-10 py-2 border-s-[1px] border-gray-300 ">
                    No
                  </td>
                  <td className="w-44 py-2 border-s-[1px] border-gray-300">
                    Tanggal
                  </td>
                  <td className="w-36 py-2 border-s-[1px] border-gray-300">
                    Barcode
                  </td>
                  <td className="w-96 py-2 border-s-[1px] border-gray-300">
                    Nama Produk
                  </td>
                  <td className="w-36 py-2 border-x-[1px] border-gray-300">
                    Jumlah
                  </td>
                </tr>
              </thead>
              <tbody className="border-b-[1px] border-gray-300">
                {searchResults.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-s-[1px] py-0.5 border-gray-300"
                      colSpan={5}
                    >
                      Tidak ada hasil pencarian.
                    </td>
                  </tr>
                ) : (
                  searchResults.map((item, index) => (
                    <tr
                      className={`text-center ${
                        index % 2 ? "  " : "bg-gray-100"
                      }`}
                      key={index}
                    >
                      <td className="w-10 border-s-[1px] py-0.5 border-gray-300">
                        {index + 1}
                      </td>
                      <td className="w-44 border-s-[1px] py-0.5 border-gray-300">
                        {item.tanggal}
                      </td>
                      <td className="w-36 border-s-[1px] py-0.5 border-gray-300">
                        {item.barcodeProduk}
                      </td>
                      <td className="w-96 border-s-[1px] py-0.5 border-gray-300">
                        {item.nama_produk}
                      </td>
                      <td className="w-36 border-x-[1px] py-1 border-gray-300">
                        {item.jumlah}
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
                  className={`bg-colorTwo cursor-pointer shadow-sm2 text-purple-600  border-[1px] border-colorTwo hover:border-[1px] hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50  hover:text-white  hover:bg-purple-700 rounded  group px-2 py-1  `}
                  onClick={stopSearch}
                >
                  Stop Search
                </span>
              </div>
            </div>
          </div>
        ) : null}

        {!isSearching ? (
          <div>
            <table className="w-full">
              <thead className="border-[1px] border-gray-300 ">
                <tr className="text-center font-bold text-lg text-gray-900">
                  <td className="w-10 py-2 border-s-[1px] border-gray-300 ">
                    No
                  </td>
                  <td className="w-44 py-2 border-s-[1px] border-gray-300">
                    Tanggal
                  </td>
                  <td className="w-36 py-2 border-s-[1px] border-gray-300">
                    Barcode
                  </td>
                  <td className="w-96 py-2 border-s-[1px] border-gray-300">
                    Nama Produk
                  </td>
                  <td className="w-36 py-2 border-x-[1px] border-gray-300">
                    Jumlah
                  </td>
                </tr>
              </thead>
              <tbody className="border-b-[1px] border-gray-300">
                {currentItems.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-s-[1px] py-1  border-gray-300 "
                      colSpan={5}
                    >
                      Tidak ada Data Tersedia
                    </td>
                  </tr>
                ) : (
                  currentItems.map((item, index) => (
                    <tr
                      className={`text-center ${
                        index % 2 ? "  " : "bg-gray-100"
                      }  font-normal text-base text-gray-900`}
                      key={index}
                    >
                      <td className="w-10 border-s-[1px] py-1 border-gray-300">
                        {index + 1}
                      </td>
                      <td className="w-44 border-s-[1px] py-1 border-gray-300">
                        {item.tanggal}
                      </td>
                      <td className="w-36 border-s-[1px] py-1 border-gray-300">
                        {item.barcodeProduk}
                      </td>
                      <td className="w-96 border-s-[1px] py-1 border-gray-300">
                        {item.nama_produk}
                      </td>
                      <td className="w-36 border-x-[1px] py-1 border-gray-300">
                        {item.jumlah}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="flex justify-between mt-3">
              <div className="text-sm">
                Showing {indexOfFirstItem + 1} to{" "}
                {Math.min(indexOfLastItem, stoks.length)} of {stoks.length}{" "}
                entries
              </div>
              <div className="space-x-1 flex text-sm font-semibold">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`bg-colorTwo cursor-pointer   text-purple-600 shadow-sm2 shadow-gray-300 transition-all ease-in hover:shadow-gray-50  hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1  `}
                >
                  Previous
                </button>
                <div className="bg-colorTwo  px-3 py-1  border-[1px] shadow-sm2 shadow-gray-300 border-purple-600 text-purple-600 rounded cursor-default">
                  {currentPage}
                </div>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={indexOfLastItem >= stoks.length}
                  className={`bg-colorTwo cursor-pointer   text-purple-600 shadow-sm2  shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover:shadow-sm2 hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 `}
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

export default TableStok;
