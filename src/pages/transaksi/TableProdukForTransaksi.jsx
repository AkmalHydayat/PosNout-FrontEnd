/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
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
  produks,
  setProduks,
}) => {
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
    <div>
      <div className=" p-6 space-y-3 font-pt_Sans bg-colorTwo rounded dark:bg-colorDarkTwo transition-all ease-in font-normal">
        <div className="flex px-3 justify-end h-[30px] mb-5">
          <label htmlFor="" className="me-2 font-medium text-gray-900"></label>
          <input
            type="text"
            placeholder="Cari item"
            value={searchTerm}
            onChange={handleSearch}
            className="rounded-l border-[1px] dark:bg-colorDarkTwo  ease-in  bg-colorTwo text-colorDarkTwo dark:text-colorTwo focus:bg-white transition-colors border-purple-600 font-medium w-48 focus:outline-none ps-2 placeholder:text-sm"
            required
          />

          <button className="bg-purple-600 px-2  border-[1px] border-s-0 border-purple-600 rounded-r hover:border-purple-700">
            <BiSearchAlt className="text-colorTwo  text-xl" />
          </button>
        </div>
        {isSearching ? (
          <div
            className={`${
              searchResults.length > 13 ? "h-[445px] overflow-y-scroll" : ""
            } px-3  `}
          >
            <table className="w-full border-b-[1px] border-gray-900 dark:border-colorTwo ">
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
                      className=" text-center border-b-[1px] dark:text-colorTwo py-2 font-medium  border-gray-900 dark:border-colorTwo"
                      colSpan={7}
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
                      <td className="w-36 py-0.5  ">{item.barcode}</td>
                      <td className="w-96 py-0.5 border-s-[1px] border-gray-900 dark:border-colorTwo ">
                        {item.nama_produk}
                      </td>
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-900 dark:border-colorTwo ">
                        {item.satuan}
                      </td>

                      <td className="w-44 py-0.5 border-s-[1px] border-gray-900 dark:border-colorTwo ">
                        {item.harga_jual.toLocaleString("id-ID")}
                      </td>

                      <td className="w-24 py-0.5 border-s-[1px] border-gray-900 dark:border-colorTwo ">
                        {item.stok}
                      </td>
                      <td className="w-24 py-0.5 border-s-[1px] border-gray-900 dark:border-colorTwo  ">
                        <ButtonSelect
                          className={`bg-colorTwo dark:bg-colorDarkTwo dark:hover:bg-purple-600  top-0 text-purple-600 p-1 hover:text-colorTwo border-[1px]  border-purple-600  transition-colors ease-in hover:border-colorTwo hover:bg-purple-700 hover:scale-110 rounded  group  `}
                          onClick={() => {
                            getSelected(
                              item.barcode,
                              item.nama_produk,
                              item.harga_jual,
                              item.stok,
                              item.keuntungan
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
            <table className="w-full border-b-[1px] border-gray-900 dark:border-colorTwo">
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
                      className=" text-center border-b-[1px] py-2 font-medium dark:text-colorTwo  border-gray-900 dark:border-colorTwo "
                      colSpan={7}
                    >
                      Tidak ada Data Tersedia
                    </td>
                  </tr>
                ) : (
                  produks.map((item, index) => (
                    <tr
                      className={`text-center ${
                        index % 2
                          ? `bg-colorTwo dark:bg-colorDarkTwo text-colorDarkOne dark:text-colorTwo transition-all ease-in`
                          : `bg-gray-100 dark:bg-colorDarkOne/50 text-colorDarkOne dark:text-colorTwo transition-all ease-in`
                      }  font-normal text-base text-gray-900`}
                      key={index}
                    >
                      <td className="w-36 py-0.5  ">{item.barcode}</td>
                      <td className="w-96 py-0.5 border-s-[1px] border-gray-900 dark:border-colorTwo ">
                        {item.nama_produk}
                      </td>
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-900 dark:border-colorTwo ">
                        {item.satuan}
                      </td>

                      <td className="w-44 py-0.5 border-s-[1px] border-gray-900 dark:border-colorTwo ">
                        {item.harga_jual.toLocaleString("id-ID")}
                      </td>

                      <td className="w-24 py-0.5 border-s-[1px] border-gray-900 dark:border-colorTwo ">
                        {item.stok}
                      </td>
                      <td className="w-24 py-0.5 border-s-[1px] border-gray-900 dark:border-colorTwo  ">
                        <ButtonSelect
                          className={`bg-colorTwo dark:bg-colorDarkTwo dark:hover:bg-purple-600  top-0 text-purple-600 p-1 hover:text-colorTwo border-[1px]  border-purple-600  transition-colors ease-in hover:border-colorTwo hover:bg-purple-700 hover:scale-110 rounded  group  `}
                          onClick={() => {
                            getSelected(
                              item.barcode,
                              item.nama_produk,
                              item.harga_jual,
                              item.stok,
                              item.keuntungan
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
