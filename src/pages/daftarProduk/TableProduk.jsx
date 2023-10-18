/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import ButtonEditProduk from "./ButtonEditProduk";
import ButtonDeleteProduk from "./ButtonDeleteProduk";
import SearchGroup from "../../components/ui/SearchGroup";

const TableProduk = ({ produks, setProduks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8);
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

  const currentItems = isSearching
    ? searchResults
    : produks.slice(indexOfFirstItem, indexOfLastItem);

  const searchProduk = (term) => {
    if (term.trim() === "") {
      stopSearch();
    } else {
      const results = produks.filter((produk) =>
        produk.nama_produk.toLowerCase().includes(term.toLowerCase())
      );
      setIsSearching(true);
      setSearchResults(results);
    }
  };
  const stopSearch = () => {
    setIsSearching(false);
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div>
      <div className="bg-colorTwo p-6 space-y-3  rounded-b ">
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
            onSubmit={() => searchProduk(searchTerm)}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={"Produk"}
          />
        </div>
        {isSearching ? (
          <div>
            <table className="w-full">
              <thead className="border-[1px] border-gray-300 ">
                <tr className="text-center  font-bold text-lg text-gray-900">
                  <td className="w-16 py-2 border-[1px] border-gray-300 ">
                    No
                  </td>
                  <td className="w-36 py-2 border-[1px] border-gray-300">
                    Barcode
                  </td>
                  <td className="w-96 py-2 border-[1px] border-gray-300">
                    Nama
                  </td>
                  <td className="w-32 py-2 border-[1px] border-gray-300">
                    Satuan
                  </td>
                  <td className="w-40 py-2 border-[1px] border-gray-300">
                    Kategori
                  </td>
                  <td className="w-40 py-2 border-[1px] border-gray-300">
                    Harga Beli
                  </td>
                  <td className="w-40 py-2 border-[1px] border-gray-300">
                    Harga Jual
                  </td>
                  <td className="w-16 py-2 border-[1px] border-gray-300">
                    Stok
                  </td>
                  <td className="w-48 py-2 border-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody>
                {searchResults.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-1 border-gray-300"
                      colSpan={9}
                    >
                      Tidak ada hasil pencarian.
                    </td>
                  </tr>
                ) : (
                  searchResults.map((item, index) => (
                    <tr
                      className={`text-center ${
                        index % 2 ? "  " : "bg-gray-200"
                      }`}
                      key={item.id}
                    >
                      <td className="w-16 py-2 border-[1px] border-gray-300 ">
                        {index + 1}
                      </td>
                      <td className="w-36 py-2 border-[1px] border-gray-300">
                        {item.barcode}
                      </td>
                      <td className="w-96 py-2 border-[1px] border-gray-300">
                        {item.nama_produk}
                      </td>
                      <td className="w-32 py-2 border-[1px] border-gray-300">
                        {item.satuan}
                      </td>
                      <td className="w-40 py-2 border-[1px] border-gray-300">
                        {item.kategori}
                      </td>
                      <td className="w-40 py-2 border-[1px] border-gray-300">
                        {item.harga_beli}
                      </td>
                      <td className="w-40 py-2 border-[1px] border-gray-300">
                        {item.harga_jual}
                      </td>
                      <td className="w-16 py-2 border-[1px] border-gray-300">
                        {item.stok}
                      </td>
                      <td className="w-48 py-2 border-[1px] border-gray-300">
                        <div className="flex justify-center space-x-3">
                          <ButtonEditProduk
                            editNama={item.nama_produk}
                            editSatuan={item.satuan}
                            editKategori={item.kategori}
                            editHargaBeli={item.hargaBeli}
                            editHargaJual={item.hargaJual}
                            isSearching={isSearching}
                            setSearchResults={setSearchResults}
                            searchResults={searchResults}
                            setProduks={setProduks}
                            id={item.id}
                            produks={produks}
                          />
                          <ButtonDeleteProduk
                            setProduks={setProduks}
                            id={item.id}
                            itemToDelete={item.nama_produk}
                            isSearching={isSearching}
                            setSearchResults={setSearchResults}
                            searchResults={searchResults}
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
              <div className="space-x-1">
                <span
                  className="border-[1px] bg-purple-600 hover:bg-purple-700 border-gray-200 text-white hover:border-purple-600 rounded px-2 py-[2px] hover:shadow-gray-400 hover:shadow-sm text-sm cursor-pointer"
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
                <tr className="text-center  font-bold text-lg text-gray-900">
                  <td className="w-16 py-2 border-[1px] border-gray-300 ">
                    No
                  </td>
                  <td className="w-36 py-2 border-[1px] border-gray-300">
                    Barcode
                  </td>
                  <td className="w-96 py-2 border-[1px] border-gray-300">
                    Nama
                  </td>
                  <td className="w-32 py-2 border-[1px] border-gray-300">
                    Satuan
                  </td>
                  <td className="w-40 py-2 border-[1px] border-gray-300">
                    Kategori
                  </td>
                  <td className="w-40 py-2 border-[1px] border-gray-300">
                    Harga Beli
                  </td>
                  <td className="w-40 py-2 border-[1px] border-gray-300">
                    Harga Jual
                  </td>
                  <td className="w-16 py-2 border-[1px] border-gray-300">
                    Stok
                  </td>
                  <td className="w-48 py-2 border-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-1  border-gray-300 "
                      colSpan={9}
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
                      key={item.id}
                    >
                      <td className="w-16 py-2 border-[1px] border-gray-300 ">
                        {index + 1}
                      </td>
                      <td className="w-36 py-2 border-[1px] border-gray-300">
                        {item.barcode}
                      </td>
                      <td className="w-96 py-2 border-[1px] border-gray-300">
                        {item.nama_produk}
                      </td>
                      <td className="w-32 py-2 border-[1px] border-gray-300">
                        {item.satuan}
                      </td>
                      <td className="w-40 py-2 border-[1px] border-gray-300">
                        {item.kategori}
                      </td>
                      <td className="w-40 py-2 border-[1px] border-gray-300 break-words">
                        {item.harga_beli}
                      </td>
                      <td className="w-40 py-2 border-[1px] border-gray-300">
                        {item.harga_jual}
                      </td>
                      <td className="w-16 py-2 border-[1px] border-gray-300">
                        {item.stok}
                      </td>
                      <td className="w-48 py-2 border-[1px] border-gray-300">
                        <div className="flex justify-center space-x-3">
                          <ButtonEditProduk
                            editNama={item.nama_produk}
                            editSatuan={item.satuan}
                            editKategori={item.kategori}
                            editHargaBeli={item.hargaBeli}
                            editHargaJual={item.hargaJual}
                            isSearching={isSearching}
                            setSearchResults={setSearchResults}
                            searchResults={searchResults}
                            setProduks={setProduks}
                            id={item.id}
                            produks={produks}
                          />
                          <ButtonDeleteProduk
                            setProduks={setProduks}
                            id={item.id}
                            itemToDelete={item.nama_produk}
                            isSearching={isSearching}
                            setSearchResults={setSearchResults}
                            searchResults={searchResults}
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
                {Math.min(indexOfLastItem, produks.length)} of {produks.length}{" "}
                entries
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
                  disabled={indexOfLastItem >= produks.length}
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

export default TableProduk;
