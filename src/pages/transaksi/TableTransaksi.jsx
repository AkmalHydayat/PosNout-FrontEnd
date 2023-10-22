/* eslint-disable react/prop-types */
import {
  faCaretDown,
  faCaretUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SearchGroup from "../../components/ui/SearchGroup";

export const TableTransaksi = ({ transaksiList, setTransaksiList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8); // Sesuaikan dengan jumlah baris yang ingin ditampilkan per halaman
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = transaksiList.slice(indexOfFirstItem, indexOfLastItem);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const deleteData = (barcode) => {
    const updatedTransaksiList = transaksiList.filter(
      (item) => item.barcode !== barcode
    );
    setTransaksiList(updatedTransaksiList);
    // Perbarui juga searchResults jika id dihapus dari hasil pencarian
    if (isSearching) {
      console.log("hello from is searching");
      const updatedSearchResults = searchResults.filter(
        (item) => item.barcode !== barcode
      );
      setSearchResults(updatedSearchResults);
    }
  };

  const searchTransaksi = () => {
    const results = transaksiList.filter((item) =>
      item.namaProduk.toLowerCase().includes(searchTerm.toLowerCase())
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
  return (
    <div>
      <div className="bg-colorTwo p-6 space-y-3  rounded">
        <div className="flex justify-between h-full">
          <div className="space-x-1 flex ">
            <label htmlFor="" className="my-auto ">
              Show
            </label>
            <div className="flex border border-gray-300 rounded">
              <div className="">
                <input
                  type="text"
                  className="w-8 text-center rounded font-semibold focus:outline-none h-full cursor-default"
                  value={perPage}
                  readOnly
                />
              </div>
              <div className="flex flex-col items-center justify-center space-y-[1px]">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  className="h-3 text-xs px-[3px] rounded-tr-sm cursor-pointer bg-purple-600  text-color text-colorTwo"
                  onClick={() => setPerPage(perPage + 1)}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="h-3 text-xs px-[3px] rounded-br-sm bg-purple-600 text-color text-colorTwo cursor-pointer "
                  onClick={() =>
                    setPerPage(perPage > 5 ? perPage - 1 : perPage)
                  }
                />
              </div>
            </div>
            <div className="my-auto">entries</div>
          </div>
          <SearchGroup
            onSubmit={searchTransaksi}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={"Nama Item"}
          />
        </div>
        {isSearching ? (
          <div>
            <table className="w-full text-gray-900">
              <thead className="border-[1px] border-gray-300 bg-colorTwo">
                <tr className="text-center font-bold text-base text-gray-900">
                  <td className="w-10 py-2 border-[1px] border-gray-300 ">
                    No
                  </td>
                  <td className="w-32 py-2 border-[1px] border-gray-300">
                    Barcode
                  </td>
                  <td className="w-72 py-2 border-[1px] border-gray-300">
                    Nama Produk
                  </td>
                  <td className="w-28 py-2 border-[1px] border-gray-300">
                    Harga
                  </td>
                  <td className="w-14  py-2 border-[1px] border-gray-300">
                    Qty
                  </td>
                  <td className="w-32 py-2 border-[1px] border-gray-300">
                    Total
                  </td>
                  <td className="w-20 py-2 border-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody>
                {searchResults.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-1 border-gray-300"
                      colSpan={7}
                    >
                      Tidak ada hasil pencarian.
                    </td>
                  </tr>
                ) : (
                  searchResults.map((item, index) => (
                    <tr
                      className={`text-center ${
                        index % 2 ? "  " : "bg-gray-200"
                      }  font-normal text-base text-gray-900`}
                      key={index}
                    >
                      <td className="w-10 py-1 border-[1px] border-gray-300 ">
                        {index + 1}
                      </td>
                      <td className="w-32 py-1 border-[1px] border-gray-300">
                        {item.barcode}
                      </td>
                      <td className="w-72 py-1 border-[1px] border-gray-300">
                        {item.namaProduk}
                      </td>
                      <td className="w-28 py-1 border-[1px] border-gray-300">
                        {item.harga}
                      </td>
                      <td className="w-14 py-1 border-[1px] border-gray-300">
                        {item.jumlah}
                      </td>
                      <td className="w-32 py-1 border-[1px] border-gray-300">
                        {item.total}
                      </td>
                      <td className="w-20 py-1 border-[1px] border-gray-300 space-x-2">
                        <button
                          className="bg-red-600 hover:bg-red-700 rounded"
                          onClick={() => deleteData(item.barcode)}
                        >
                          <FontAwesomeIcon
                            className="py-1 px-2 text-sm text-colorTwo"
                            icon={faTrash}
                          />
                        </button>
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
              <div className="space-x-1">
                <span
                  className="border-[1px] bg-purple-600 hover:bg-purple-700 border-gray-200 text-white hover:border-purple-600 rounded px-2 py-1 hover:shadow-gray-400 hover:shadow-sm text-sm cursor-pointer"
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
                <tr className="text-center font-bold text-base text-gray-900">
                  <td className="w-10 py-2 border-[1px] border-gray-300 ">
                    No
                  </td>
                  <td className="w-32 py-2 border-[1px] border-gray-300">
                    Barcode
                  </td>
                  <td className="w-72 py-2 border-[1px] border-gray-300">
                    Nama Produk
                  </td>
                  <td className="w-28 py-2 border-[1px] border-gray-300">
                    Harga
                  </td>
                  <td className="w-14  py-2 border-[1px] border-gray-300">
                    Qty
                  </td>
                  <td className="w-32 py-2 border-[1px] border-gray-300">
                    Total
                  </td>
                  <td className="w-20 py-2 border-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-1  border-gray-300 "
                      colSpan={7}
                    >
                      Tidak ada Data Tersedia
                    </td>
                  </tr>
                ) : (
                  currentItems.map((item, index) => (
                    <tr
                      className={`text-center ${
                        index % 2 ? "  " : "bg-gray-200"
                      }  font-normal text-base text-gray-900`}
                      key={index}
                    >
                      <td className="w-10 py-1 border-[1px] border-gray-300 ">
                        {index + 1}
                      </td>
                      <td className="w-32 py-1 border-[1px] border-gray-300">
                        {item.barcode}
                      </td>
                      <td className="w-72 py-1 border-[1px] border-gray-300">
                        {item.namaProduk}
                      </td>
                      <td className="w-28 py-1 border-[1px] border-gray-300">
                        {item.harga}
                      </td>
                      <td className="w-14 py-1 border-[1px]  border-gray-300">
                        {item.jumlah}
                      </td>
                      <td className="w-32 py-1 border-[1px] border-gray-300">
                        {item.total}
                      </td>
                      <td className="w-20 py-1 border-[1px] border-gray-300 space-x-2">
                        <button
                          className="bg-red-600 hover:bg-red-700 rounded"
                          onClick={() => deleteData(item.barcode)}
                        >
                          <FontAwesomeIcon
                            className="py-1 px-2 text-sm text-colorTwo"
                            icon={faTrash}
                          />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="flex justify-between mt-3">
              <div className="text-sm">
                Showing {indexOfFirstItem + 1} to{" "}
                {Math.min(indexOfLastItem, transaksiList.length)} of{" "}
                {transaksiList.length} entries
              </div>
              <div className="space-x-1 flex">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="border-[1px] bg-purple-600 hover:bg-purple-700 border-gray-200 text-white hover:border-purple-600 rounded px-2 py-[2px] hover:shadow-gray-400 hover:shadow-sm text-sm cursor-pointer"
                >
                  Previous
                </button>
                <div className="bg-colorTwo px-3 py-[2px] border-[1px] font-bold border-gray-300 text-purple-600 rounded cursor-default">
                  {currentPage}
                </div>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={indexOfLastItem >= transaksiList.length}
                  className="border-[1px] bg-purple-600 hover:bg-purple-700 border-gray-200 text-white hover:border-purple-600 rounded px-2 py-[2px] hover:shadow-gray-400 hover:shadow-sm text-sm cursor-pointer"
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
