/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import ButtonEditProduk from "./ButtonEditProduk";
import ButtonDeleteProduk from "./ButtonDeleteProduk";
import SearchGroup from "../../components/ui/SearchGroup";

const TableProduk = ({ produks, setProduks, AlertMessage }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(7);
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
      <div className="bg-colorTwo transition-all ease-in  dark:bg-colorDarkTwo p-6 dark:text-colorTwo  space-y-3 rounded-b">
        <div className="flex justify-between h-full">
          <div className="space-x-1.5 flex">
            <label htmlFor="" className="my-auto">
              Show
            </label>
            <div className="flex border-[1px] border-purple-600 rounded">
              <div className="">
                <input
                  type="text"
                  className="w-8 text-center transition-all ease-in text-gray-900 dark:text-colorTwo dark:bg-colorDarkTwo  bg-colorTwo rounded-s font-semibold focus:outline-none h-full cursor-default"
                  value={perPage}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const sanitizedValue = inputValue.replace(/[^0-9]/g, "");

                    if (sanitizedValue === "0" || sanitizedValue < "7") {
                      // Angka 0 berada di awal inputan, jadi kita menghapusnya
                      setPerPage(sanitizedValue.slice(1));
                    } else {
                      setPerPage(sanitizedValue);
                    }
                  }}
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
                    setPerPage(perPage > 7 ? perPage - 1 : perPage)
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
            <table className="w-full my-5">
              <thead className="border-[1px] border-gray-300 ">
                <tr className="text-gray-900 dark:text-colorTwo text-center font-semibold text-lg transition-all ease-in bg-colorTwo dark:bg-colorDarkTwo">
                  <td className="w-16 py-2 border-s-[1px] border-gray-300 ">
                    No
                  </td>
                  <td className="w-36 py-2 border-s-[1px] border-gray-300">
                    Barcode
                  </td>
                  <td className="w-96 py-2 border-s-[1px] border-gray-300">
                    Nama
                  </td>
                  <td className="w-32 py-2 border-s-[1px] border-gray-300">
                    Satuan
                  </td>
                  <td className="w-60 py-2 border-s-[1px] border-gray-300">
                    Kategori
                  </td>
                  <td className="w-40 py-2 border-s-[1px] border-gray-300">
                    Harga Beli
                  </td>
                  <td className="w-40 py-2 border-s-[1px] border-gray-300">
                    Harga Jual
                  </td>
                  <td className="w-32 py-2 border-s-[1px] border-gray-300">
                    Keuntungan
                  </td>
                  <td className="w-16 py-2 border-s-[1px] border-gray-300">
                    Stok
                  </td>
                  <td className="w-36 py-2 border-x-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody className="border-b-[1px] border-gray-300">
                {searchResults.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-2 border-gray-300"
                      colSpan={10}
                    >
                      Tidak ada hasil pencarian.
                    </td>
                  </tr>
                ) : (
                  searchResults.map((item, index) => (
                    <tr
                      className={`text-center text-gray-900 dark:text-colorTwo transition-all ease-in ${
                        index % 2
                          ? "  "
                          : `bg-gray-100 dark:bg-colorDarkOne/50 transition-all ease-in`
                      }`}
                      key={item.id}
                    >
                      <td className="w-16 py-0.5 border-s-[1px] border-gray-300 ">
                        {index + 1}
                      </td>
                      <td className="w-36 py-0.5 border-s-[1px] border-gray-300">
                        {item.barcode}
                      </td>
                      <td className="w-96 py-0.5 border-s-[1px] border-gray-300">
                        {item.nama_produk}
                      </td>
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-300">
                        {item.satuan}
                      </td>
                      <td className="w-60 py-0.5 border-s-[1px] border-gray-300">
                        {item.kategori}
                      </td>
                      <td className="w-40 py-0.5 border-s-[1px] border-gray-300 text-end pe-6">
                        {item.harga_beli.toLocaleString("id-ID")}
                      </td>
                      <td className="w-40 py-0.5 border-s-[1px] border-gray-300 text-end pe-6">
                        {item.harga_jual.toLocaleString("id-ID")}
                      </td>
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-300 text-end pe-6">
                        {item.keuntungan.toLocaleString("id-ID")}
                      </td>
                      <td className="w-16 py-0.5 border-s-[1px] border-gray-300">
                        {item.stok}
                      </td>
                      <td className="w-36 py-0.5 border-x-[1px] border-gray-300">
                        <div className="flex justify-center space-x-3">
                          <ButtonEditProduk
                            editNama={item.nama_produk}
                            editSatuan={item.satuan}
                            editKategori={item.kategori}
                            editHargaBeli={item.harga_beli}
                            editHargaJual={item.harga_jual}
                            isSearching={isSearching}
                            searchResults={searchResults}
                            setProduks={setProduks}
                            id={item.id}
                            produks={produks}
                            AlertMessage={AlertMessage}
                            stok={item.stok}
                          />
                          <ButtonDeleteProduk
                            setProduks={setProduks}
                            id={item.id}
                            itemToDelete={item.nama_produk}
                            isSearching={isSearching}
                            setSearchResults={setSearchResults}
                            searchResults={searchResults}
                            AlertMessage={AlertMessage}
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
              <div className="space-x-1 text-sm flex font-semibold">
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
          <div>
            <table className="w-full my-5">
              <thead className="border-[1px] border-gray-300 ">
                <tr className="text-gray-900 dark:text-colorTwo text-center font-semibold text-lg transition-all ease-in bg-colorTwo dark:bg-colorDarkTwo">
                  <td className="w-16 py-2 border-s-[1px] border-gray-300 ">
                    No
                  </td>
                  <td className="w-36 py-2 border-s-[1px] border-gray-300">
                    Barcode
                  </td>
                  <td className="w-96 py-2 border-s-[1px] border-gray-300">
                    Nama
                  </td>
                  <td className="w-32 py-2 border-s-[1px] border-gray-300">
                    Satuan
                  </td>
                  <td className="w-60 py-2 border-s-[1px] border-gray-300">
                    Kategori
                  </td>
                  <td className="w-40 py-2 border-s-[1px] border-gray-300">
                    Harga Beli
                  </td>
                  <td className="w-40 py-2 border-s-[1px] border-gray-300">
                    Harga Jual
                  </td>
                  <td className="w-32 py-2 border-s-[1px] border-gray-300">
                    Keuntungan
                  </td>
                  <td className="w-16 py-2 border-s-[1px] border-gray-300">
                    Stok
                  </td>
                  <td className="w-36 py-2 border-x-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody className="border-b-[1px] border-gray-300">
                {currentItems.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-2  border-gray-300 "
                      colSpan={10}
                    >
                      Tidak ada Data Tersedia
                    </td>
                  </tr>
                ) : (
                  currentItems.map((item, index) => (
                    <tr
                      className={`text-center dark:text-colorTwo  transition-all ease-in ${
                        index % 2
                          ? "  "
                          : `bg-gray-100 dark:bg-colorDarkOne/50 transition-all ease-in`
                      }  font-normal text-base text-gray-900`}
                      key={item.id}
                    >
                      <td className="w-16 py-0.5 border-s-[1px] border-gray-300 ">
                        {index + 1}
                      </td>
                      <td className="w-36 py-0.5 border-s-[1px] border-gray-300">
                        {item.barcode}
                      </td>
                      <td className="w-96 py-0.5 border-s-[1px] border-gray-300">
                        {item.nama_produk}
                      </td>
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-300">
                        {item.satuan}
                      </td>
                      <td className="w-60 py-0.5 border-s-[1px] border-gray-300">
                        {item.kategori}
                      </td>
                      <td className="w-40 py-0.5 border-s-[1px] border-gray-300 text-end pe-6 break-words">
                        {item.harga_beli.toLocaleString("id-ID")}
                      </td>
                      <td className="w-40 py-0.5 border-s-[1px] border-gray-300 text-end pe-6">
                        {item.harga_jual.toLocaleString("id-ID")}
                      </td>
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-300 text-end pe-6">
                        {item.keuntungan.toLocaleString("id-ID")}
                      </td>
                      <td className="w-16 py-0.5 border-s-[1px] border-gray-300">
                        {item.stok}
                      </td>
                      <td className="w-36 py-0.5 border-x-[1px] border-gray-300">
                        <div className="flex justify-center space-x-3">
                          <ButtonEditProduk
                            editNama={item.nama_produk}
                            editSatuan={item.satuan}
                            editKategori={item.kategori}
                            editHargaBeli={item.harga_beli}
                            editHargaJual={item.harga_jual}
                            isSearching={isSearching}
                            setSearchResults={setSearchResults}
                            searchResults={searchResults}
                            setProduks={setProduks}
                            id={item.id}
                            produks={produks}
                            AlertMessage={AlertMessage}
                            stok={item.stok}
                          />
                          <ButtonDeleteProduk
                            setProduks={setProduks}
                            id={item.id}
                            itemToDelete={item.nama_produk}
                            isSearching={isSearching}
                            setSearchResults={setSearchResults}
                            searchResults={searchResults}
                            AlertMessage={AlertMessage}
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
                  disabled={indexOfLastItem >= produks.length}
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

export default TableProduk;
