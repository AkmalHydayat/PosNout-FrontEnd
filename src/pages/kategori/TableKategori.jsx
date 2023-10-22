/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import ButtonEditKategori from "./ButtonEditKategori";
import ButtonDeleteKategori from "./ButtonDeleteKategori";
import SearchGroup from "../../components/ui/SearchGroup";

const TableKategori = ({ kategoris, setKategoris,AlertMessage }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8);
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

  const currentItems = isSearching
    ? searchResults
    : kategoris.slice(indexOfFirstItem, indexOfLastItem);

  const searchKategori = (term) => {
    if (term.trim() === "") {
      stopSearch();
    } else {
      const results = kategoris.filter((kategori) =>
        kategori.nama_kategori.toLowerCase().includes(term.toLowerCase())
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
      <div className="bg-colorTwo p-6 space-y-3 rounded-b">
        <div className="flex justify-between h-full">
          <div className="space-x-1 flex">
            <label htmlFor="" className="my-auto">
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
                  className="h-3 text-xs px-[3px] rounded-tr-sm cursor-pointer bg-purple-600 text-white"
                  onClick={() => setPerPage(perPage + 1)}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="h-3 text-xs px-[3px] rounded-br-sm bg-purple-600 text-white cursor-pointer"
                  onClick={() =>
                    setPerPage(perPage > 5 ? perPage - 1 : perPage)
                  }
                />
              </div>
            </div>
            <div className="my-auto">entries</div>
          </div>
          <SearchGroup
            onSubmit={() => searchKategori(searchTerm)}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={"Kategori"}
          />
        </div>
        {isSearching ? (
          <div>
            <table className="w-full">
              <thead className="border-[1px] border-gray-300 bg-colorTwo">
                <tr className="text-center font-bold text-lg">
                  <td className="w-1/12 py-2 border-[1px] border-gray-300">
                    No
                  </td>
                  <td className="w-4/6 py-2 border-[1px] border-gray-300">
                    Kategori
                  </td>
                  <td className="w-1/5 py-2 border-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 ? (
                  <tr>
                    <td
                      className="text-center border-[1px] py-2 border-gray-300"
                      colSpan={3}
                    >
                      Tidak ada hasil pencarian.
                    </td>
                  </tr>
                ) : (
                  currentItems.map((item, index) => (
                    <tr
                      className={`text-center ${
                        index % 2 ? "" : "bg-gray-200"
                      }`}
                      key={item.id}
                    >
                      <td className="w-1/12 border-[1px] py-1 border-gray-300">
                        {index + 1}
                      </td>
                      <td className="w-4/6 border-[1px] py-1 border-gray-300">
                        {item.nama_kategori}
                      </td>
                      <td className="w-1/5 border-[1px] py-1 border-gray-300 text-sm">
                        <div className="flex justify-center space-x-3">
                          <ButtonEditKategori
                            id={item.id}
                            namaKategori={item.nama_kategori}
                            isSearching={isSearching}
                            setSearchResults={setSearchResults}
                            searchResults={searchResults}
                            setKategoris={setKategoris}
                         AlertMessage={AlertMessage}
                         />
                          <ButtonDeleteKategori
                            setKategoris={setKategoris}
                            id={item.id}
                            namaKategori={item.nama_kategori}
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
              <thead className="border-[1px] border-gray-300 bg-colorTwo">
                <tr className="text-center font-bold text-lg text-gray-900">
                  <td className="w-1/12 py-2 border-[1px] border-gray-300">
                    No
                  </td>
                  <td className="w-4/6 py-2 border-[1px] border-gray-300">
                    Kategori
                  </td>
                  <td className="w-1/5 py-2 border-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 ? (
                  <tr>
                    <td
                      className="text-center border-[1px] py-2  border-gray-300"
                      colSpan={3}
                    >
                      Tidak ada Data Tersedia
                    </td>
                  </tr>
                ) : (
                  currentItems.map((item, index) => (
                    <tr
                      className={`text-center ${
                        index % 2 ? "" : "bg-gray-200"
                      }`}
                      key={item.id}
                    >
                      <td className="w-1/12 border-[1px] py-1 border-gray-300">
                        {index + 1}
                      </td>
                      <td className="w-4/6 border-[1px] py-1 border-gray-300">
                        {item.nama_kategori}
                      </td>
                      <td className="w-1/5 border-[1px] py-1 border-gray-300 text-sm">
                        <div className="flex justify-center space-x-3">
                          <ButtonEditKategori
                            id={item.id}
                            namaKategori={item.nama_kategori}
                            isSearching={isSearching}
                            setSearchResults={setSearchResults}
                            searchResults={searchResults}
                            setKategoris={setKategoris}
                         AlertMessage={AlertMessage}
                         />
                          <ButtonDeleteKategori
                            setKategoris={setKategoris}
                            id={item.id}
                            namaKategori={item.nama_kategori}
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
                {Math.min(indexOfLastItem, kategoris.length)} of{" "}
                {kategoris.length} entries
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
                  disabled={indexOfLastItem >= kategoris.length}
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

export default TableKategori;
