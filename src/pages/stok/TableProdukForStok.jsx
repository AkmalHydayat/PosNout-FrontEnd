/* eslint-disable react/prop-types */
import ButtonSelect from "../../components/ui/ButtonSelect";
import { BsCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

const Tableproduks = ({
  getIdName,
  isHide,
  setIsHide,
  produks,
  setSearchTerm,
  setSearchResults,
  setIsSearching,
  setCurrentPage,
  searchTerm,
  searchResults,
  isSearching,
}) => {
  // Fungsi untuk mencari Produk berdasarkan nama
  const searchProduk = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    // Mengatur isSearching menjadi true saat pencarian aktif
    setIsSearching(true);
    const results = produks.filter((item) => {
      return item.nama_produk.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  };

  // Fungsi untuk menutup table pecarian

  return (
    <div>
      <div className="bg-colorOne p-6 space-y-3 font-pt_Sans rounded ">
        <div className="flex px-3 justify-end h-[30px] mb-5">
          <label htmlFor="" className="me-2 font-medium text-gray-900"></label>
          <input
            type="text"
            placeholder="Cari item"
            value={searchTerm}
            onChange={searchProduk}
            className="rounded-l border-[1px]  bg-colorOne  focus:bg-white transition-colors border-purple-600 font-medium w-48 focus:outline-none ps-2 placeholder:text-sm"
            required
          />

          <button className="bg-purple-600 px-2  border-[1px] border-s-0 border-purple-600 rounded-r  cursor-default hover:border-purple-700">
            <BiSearchAlt className="text-colorTwo  text-xl" />
          </button>
        </div>
        {isSearching ? (
          <div
            className={`${
              searchResults.length > 13 ? "h-[445px] overflow-y-scroll" : ""
            }   px-3`}
          >
            <table className="w-full ">
              <thead className="border-[1px] border-gray-900 bg-purple-600 ">
                <tr className="text-center font-semibold text-base text-colorTwo">
                  <td className="w-40 py-2 border-s-[1px] border-gray-900">
                    Barcode
                  </td>
                  <td className="w-96 py-2 border-s-[1px] border-gray-900">
                    Nama
                  </td>
                  <td className="w-36 py-2 border-s-[1px] border-gray-900">
                    Satuan
                  </td>
                  <td className="w-44 py-2 border-s-[1px] border-gray-900">
                    Harga Beli
                  </td>
                  <td className="w-24 py-2 border-s-[1px] border-gray-900">
                    Stok
                  </td>
                  <td className="w-24 py-2 border-x-[1px] border-gray-900">
                    Pilih
                  </td>
                </tr>
              </thead>
              <tbody className="border-b-[1px] border-gray-900">
                {searchResults.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center font-medium text-base border-[1px] py-1 border-gray-900"
                      colSpan={7}
                    >
                      Tidak ada hasil pencarian.
                    </td>
                  </tr>
                ) : (
                  searchResults.map((item, index) => (
                    <tr
                      className={`text-center font-medium text-base text-gray-900 ${
                        index % 2 ? "  " : "bg-gray-200"
                      }`}
                      key={index}
                    >
                      <td className="w-36 py-0.5 border-s-[1px] border-gray-900">
                        {item.barcode}
                      </td>
                      <td className="w-96 py-0.5 border-s-[1px] border-gray-900">
                        {item.nama_produk}
                      </td>
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-900">
                        {item.satuan}
                      </td>

                      <td className="w-44 py-0.5 border-s-[1px] border-gray-900">
                        {item.harga_jual}
                      </td>
                      <td className="w-24 py-0.5 border-s-[1px] border-gray-900">
                        {item.stok}
                      </td>
                      <td className="w-24 py-0.5 border-x-[1px] border-gray-900">
                        <ButtonSelect
                          className={`bg-colorTwo text-purple-600 hover:text-colorTwo  border-[1px] p-1 border-purple-600  transition-colors ease-in hover:border-colorTwo hover:bg-purple-700 hover:scale-110 rounded  group  `}
                          onClick={() => {
                            getIdName(item.barcode, item.nama_produk);
                            setIsHide(!isHide);
                            setTimeout(() => {
                              setCurrentPage(1);
                            }, 1000);
                          }}
                        >
                          <BsCheck className="text-base " />
                        </ButtonSelect>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : null}

        {!isSearching ? (
          <div
            className={`${
              produks.length > 13 ? "h-[445px] overflow-y-scroll" : ""
            } px-3  `}
          >
            <table className="w-full border-b-[1px] border-gray-900">
              <thead className=" ">
                <tr className="text-center font-semibold sticky border-b-[1px] border-gray-900 bg-purple-600 top-0 text-base text-colorTwo">
                  <td className="w-40 py-2 border-s-[1px] border-gray-900">
                    Barcode
                  </td>
                  <td className="w-96 py-2 border-s-[1px] border-gray-900">
                    Nama
                  </td>
                  <td className="w-36 py-2 border-s-[1px] border-gray-900">
                    Satuan
                  </td>

                  <td className="w-44 py-2 border-s-[1px] border-gray-900">
                    Harga Beli
                  </td>

                  <td className="w-24 py-2 border-s-[1px] border-gray-900">
                    Stok
                  </td>
                  <td className="w-24 py-2 border-x-[1px] border-gray-900">
                    Pilih
                  </td>
                </tr>
              </thead>
              <tbody className="border-b-[1px] border-gray-900">
                {produks.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-1  border-gray-900 "
                      colSpan={7}
                    >
                      Tidak ada Data Tersedia
                    </td>
                  </tr>
                ) : (
                  produks.map((item, index) => (
                    <tr
                      className={`text-center ${
                        index % 2 ? "  " : "bg-gray-200"
                      }  font-normal text-base text-gray-900`}
                      key={index}
                    >
                      <td className="w-36 py-0.5 border-s-[1px] border-gray-900">
                        {item.barcode}
                      </td>
                      <td className="w-96 py-0.5 border-s-[1px] border-gray-900">
                        {item.nama_produk}
                      </td>
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-900">
                        {item.satuan}
                      </td>

                      <td className="w-44 py-0.5 border-s-[1px] border-gray-900 break-words">
                        {item.harga_jual}
                      </td>

                      <td className="w-24 py-0.5 border-s-[1px] border-gray-900">
                        {item.stok}
                      </td>
                      <td className="w-24 py-0.5  border-x-[1px] border-gray-900">
                        <ButtonSelect
                          className={`bg-colorTwo  top-0 text-purple-600 p-1 hover:text-colorTwo border-[1px]  border-purple-600  transition-colors ease-in hover:border-colorTwo hover:bg-purple-700 hover:scale-110 rounded  group  `}
                          onClick={() => {
                            getIdName(item.barcode, item.nama_produk);
                            setIsHide(!isHide);
                            setTimeout(() => {
                              setCurrentPage(1);
                            }, 1000);
                          }}
                        >
                          <BsCheck className="text-base " />
                        </ButtonSelect>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Tableproduks;
