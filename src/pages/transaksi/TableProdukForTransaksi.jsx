/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ButtonSelect from "../../components/ui/ButtonSelect";
import { getProduks } from "../../utils/api";
import { BiSearchAlt } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

const TableprodukForTransaksi = ({
  getSelected,
  onClose,
  setIsSearching,
  setSearchResults,
  setSearchTerm,
  searchTerm,
  searchResults,
  isSearching,
}) => {
  const [produks, setProduks] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    // Mengatur isSearching menjadi true saat pencarian aktif
    setIsSearching(true);

    // Melakukan pencarian dan menyimpan hasil dalam searchResults
    const filteredProduks = produks.filter((produk) =>
      produk.nama_produk.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredProduks);
  };

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

  return (
    <div className="bg-colorTwo rounded">
      <div className=" p-6 space-y-3 font-pt_Sans  font-normal">
        <div className="flex px-3 justify-end h-[30px] mb-5">
          <label htmlFor="" className="me-2 font-medium text-gray-900"></label>
          <input
            type="text"
            placeholder="Cari item"
            value={searchTerm}
            onChange={handleSearch}
            className="rounded-l border-[1px]  bg-colorTwo  focus:bg-white transition-colors border-purple-600 font-medium w-48 focus:outline-none ps-2 placeholder:text-sm"
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
            } px-3  `}
          >
            <table className="w-full ">
              <thead className="">
                <tr className="text-center shadow-sm shadow-gray-900   font-semibold sticky -top-[0] transition-all ease-in  bg-purple-600 text-base text-colorTwo">
                  <td className="w-40 py-2">Barcode</td>
                  <td className="w-96 py-2">Nama</td>
                  <td className="w-36 py-2">Satuan</td>

                  <td className="w-44 py-2">Harga Beli</td>

                  <td className="w-24 py-2">Stok</td>
                  <td className="w-24 py-2">Pilih</td>
                </tr>
              </thead>
              <tbody className="">
                {produks.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-2 font-medium  border-gray-900 "
                      colSpan={7}
                    >
                      Tidak ada Data Tersedia
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
                      <td className="w-36 py-0.5  ">{item.barcode}</td>
                      <td className="w-96 py-0.5 border-s-[1px] border-gray-900 ">
                        {item.nama_produk}
                      </td>
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-900 ">
                        {item.satuan}
                      </td>

                      <td className="w-44 py-0.5 border-s-[1px] border-gray-900  break-words">
                        {item.harga_jual}
                      </td>

                      <td className="w-24 py-0.5 border-s-[1px] border-gray-900 ">
                        {item.stok}
                      </td>
                      <td className="w-24 py-0.5 border-s-[1px] border-gray-900  ">
                        <ButtonSelect
                          className={`bg-colorTwo text-purple-600  border-[1px] p-1 border-purple-600  transition-colors ease-in hover:scale-110 hover:bg-purple-700 hover:text-colorTwo rounded  group  `}
                          onClick={() => {
                            getSelected(
                              item.barcode,
                              item.nama_produk,
                              item.harga_jual,
                              item.stok
                            );
                            onClose();
                            setTimeout(() => {
                              setIsSearching("");
                              setSearchTerm([]);
                              setSearchResults(false);
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
            <table className="w-full ">
              <thead className="">
                <tr className="text-center shadow-sm shadow-gray-900   font-semibold sticky -top-[0] transition-all ease-in  bg-purple-600 text-base text-colorTwo">
                  <td className="w-40 py-2">Barcode</td>
                  <td className="w-96 py-2">Nama</td>
                  <td className="w-36 py-2">Satuan</td>

                  <td className="w-44 py-2">Harga Beli</td>

                  <td className="w-24 py-2">Stok</td>
                  <td className="w-24 py-2">Pilih</td>
                </tr>
              </thead>
              <tbody className="">
                {produks.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-2 font-medium  border-gray-900 "
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
                      <td className="w-36 py-0.5  ">{item.barcode}</td>
                      <td className="w-96 py-0.5 border-s-[1px] border-gray-900 ">
                        {item.nama_produk}
                      </td>
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-900 ">
                        {item.satuan}
                      </td>

                      <td className="w-44 py-0.5 border-s-[1px] border-gray-900  break-words">
                        {item.harga_jual}
                      </td>

                      <td className="w-24 py-0.5 border-s-[1px] border-gray-900 ">
                        {item.stok}
                      </td>
                      <td className="w-24 py-0.5 border-s-[1px] border-gray-900  ">
                        <ButtonSelect
                          className={`bg-colorTwo text-purple-600  border-[1px] p-1 border-purple-600  transition-colors ease-in hover:scale-110 hover:bg-purple-700 hover:text-colorTwo rounded  group  `}
                          onClick={() => {
                            getSelected(
                              item.barcode,
                              item.nama_produk,
                              item.harga_jual,
                              item.stok
                            );
                            onClose();
                            setTimeout(() => {
                              setIsSearching("");
                              setSearchTerm([]);
                              setSearchResults(false);
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

export default TableprodukForTransaksi;
