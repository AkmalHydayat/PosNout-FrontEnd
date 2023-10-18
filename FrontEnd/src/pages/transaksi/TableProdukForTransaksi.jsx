/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import SearchGroup from "../../components/ui/SearchGroup";
import ButtonSelect from "../../components/ui/ButtonSelect";
import { getProduks } from "../../utils/api";

const Tableproduks = ({ getSelected, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const [produks, setProduks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduks();
        setProduks(data);
      } catch (error) {
        // Handle error jika diperlukan
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, []);

  // Fungsi untuk mencari Produk berdasarkan nama
  const searchProduk = () => {
    const results = produks.filter((item) => {
      return item.nama.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
    setIsSearching(true);
  };

  // Fungsi untuk menutup table pecarian
  const stopSearch = () => {
    setIsSearching(false);
    setSearchTerm(""); // Mengosongkan input pencarian saat pencarian dihentikan
    setSearchResults([]);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8); // Sesuaikan dengan jumlah baris yang ingin ditampilkan per halaman
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;

  const currentItems = produks.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div>
      <div className="bg-colorTwo p-6 space-y-3  rounded ">
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
                  className="h-3 text-xs px-[3px] rounded-tr-sm cursor-pointer bg-purple-600  text-white"
                  onClick={() => setPerPage(perPage + 1)}
                />
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="h-3 text-xs px-[3px] rounded-br-sm bg-purple-600 text-white cursor-pointer "
                  onClick={() =>
                    setPerPage(perPage > 5 ? perPage - 1 : perPage)
                  }
                />
              </div>
            </div>
            <div className="my-auto">entries</div>
          </div>
          <SearchGroup
            onSubmit={searchProduk}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={"item"}
          />
        </div>
        {isSearching ? (
          <div>
            <table className="w-full">
              <thead className="border-[1px] border-gray-300 ">
                <tr className="text-center font-semibold text-base text-gray-900">
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
                    Harga Jual
                  </td>
                  <td className="w-16 py-2 border-[1px] border-gray-300">
                    Stok
                  </td>
                  <td className="w-28 py-2 border-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody>
                {searchResults.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-2 border-gray-300"
                      colSpan={7}
                    >
                      Tidak ada hasil pencarian.
                    </td>
                  </tr>
                ) : (
                  searchResults.map((item, index) => (
                    <tr
                      className={`text-center text-gray-900 ${
                        index % 2 ? "  " : "bg-gray-200"
                      }`}
                      key={index}
                    >
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
                        {item.harga_jual}
                      </td>
                      <td className="w-16 py-2 border-[1px] border-gray-300">
                        {item.stok}
                      </td>
                      <td className="w-28 py-2  border-[1px] border-gray-300">
                        <ButtonSelect
                          className={`bg-gray-100 px-2 hover:bg-gray-200 py-[1px] rounded text-purple-600 border-[1px] border-purple-600 font-semibold text-sm`}
                          onClick={() => {
                            getSelected(
                              item.barcode,
                              item.nama_produk,
                              item.harga_jual
                            );
                            onClose();
                          }}
                        >
                          Select
                        </ButtonSelect>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className={`flex justify-between   mt-3`}>
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
                <tr className="text-center font-semibold text-base text-gray-900">
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
                    Harga Jual
                  </td>

                  <td className="w-16 py-2 border-[1px] border-gray-300">
                    Stok
                  </td>
                  <td className="w-28 py-2 border-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-2  border-gray-300 "
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
                      <td className="w-36 py-2 border-[1px] border-gray-300">
                        {item.barcode}
                      </td>
                      <td className="w-96 py-2 border-[1px] border-gray-300">
                        {item.nama_produk}
                      </td>
                      <td className="w-32 py-2 border-[1px] border-gray-300">
                        {item.satuan}
                      </td>

                      <td className="w-40 py-2 border-[1px] border-gray-300 break-words">
                        {item.harga_jual}
                      </td>

                      <td className="w-16 py-2 border-[1px] border-gray-300">
                        {item.stok}
                      </td>
                      <td className="w-28 py-2 border-[1px] border-gray-300">
                        <ButtonSelect
                          className={`bg-gray-100 px-2 hover:bg-gray-200 py-[1px] rounded text-purple-600 border-[1px] border-purple-600 font-semibold text-sm`}
                          onClick={() => {
                            getSelected(
                              item.barcode,
                              item.nama_produk,
                              item.harga_jual
                            );
                            onClose();
                          }}
                        >
                          Select
                        </ButtonSelect>
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

export default Tableproduks;
