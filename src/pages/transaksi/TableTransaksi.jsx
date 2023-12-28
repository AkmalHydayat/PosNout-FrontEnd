/* eslint-disable react/prop-types */

import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";

export const TableTransaksi = ({ transaksiList, setTransaksiList }) => {
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
      const updatedSearchResults = searchResults.filter(
        (item) => item.barcode !== barcode
      );
      setSearchResults(updatedSearchResults);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    if (searchTerm == "") {
      setIsSearching(false);
      setSearchTerm(searchTerm);
    } else {
      setSearchTerm(searchTerm);

      // Mengatur isSearching menjadi true saat pencarian aktif
      setIsSearching(true);

      // Melakukan pencarian dan menyimpan hasil dalam searchResults
      const filteredProduks = transaksiList.filter((item) =>
        item.namaProduk.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(filteredProduks);
    }
  };

  return (
    <div>
      <div className="bg-colorTwo transition-all ease-in  dark:bg-colorDarkTwo p-6 dark:text-colorTwo  space-y-3 rounded-b">
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

          <button className="bg-purple-600 px-2  border-[1px] border-s-0 border-purple-600 rounded-r  cursor-default hover:border-purple-700">
            <BiSearchAlt className="text-colorTwo  text-xl" />
          </button>
        </div>
        {isSearching ? (
          <div>
            <table className="w-full my-5 border-b-[1px] border-gray-300 ">
              <thead className="border-[1px]  border-gray-300 bg-colorTwo text-colorDarkOne dark:text-colorTwo dark:bg-colorDarkTwo transition-colors ease-in">
                <tr className="text-center font-bold text-lg ">
                  <td className="w-10 py-2 border-s-[1px] border-gray-300 ">
                    No
                  </td>
                  <td className="w-32 py-2 border-s-[1px] border-gray-300">
                    Barcode
                  </td>
                  <td className="w-72 py-2 border-s-[1px] border-gray-300">
                    Nama Produk
                  </td>
                  <td className="w-28 py-2 border-s-[1px] border-gray-300">
                    Harga
                  </td>
                  <td className="w-14  py-2 border-s-[1px] border-gray-300">
                    Qty
                  </td>
                  <td className="w-32 py-2 border-s-[1px] border-gray-300">
                    Total
                  </td>
                  <td className="w-20 py-2 border-s-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody>
                {searchResults.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-2 border-gray-300 transition-colors ease-in text-colorDarkTwo dark:text-colorTwo"
                      colSpan={7}
                    >
                      Tidak ada hasil pencarian.
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
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-300">
                        {item.barcode}
                      </td>
                      <td className="w-72 py-0.5 border-s-[1px] border-gray-300">
                        {item.namaProduk}
                      </td>
                      <td className="w-28 py-0.5 border-s-[1px] border-gray-300">
                        {item.harga.toLocaleString("id-ID")}
                      </td>
                      <td className="w-14 py-0.5 border-s-[1px] border-gray-300">
                        {item.jumlah}
                      </td>
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-300">
                        {item.total.toLocaleString("id-ID")}
                      </td>
                      <td className="w-20 py-0.5 border-x-[1px] border-gray-300 space-x-2">
                        <button
                          className="bg-red-700 hover:bg-red-800 hover:scale-95 rounded p-1"
                          onClick={() => deleteData(item.barcode)}
                        >
                          <HiOutlineTrash className="text-xl text-colorTwo" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : null}

        {!isSearching ? (
          <div>
            <table className="w-full my-5 border-b-[1px] border-gray-300">
              <thead className="border-[1px] border-gray-300 bg-colorTwo text-colorDarkOne dark:text-colorTwo dark:bg-colorDarkTwo transition-colors ease-in">
                <tr className="text-center font-bold text-lg">
                  <td className="w-10 py-2 border-s-[1px] border-gray-300 ">
                    No
                  </td>
                  <td className="w-32 py-2 border-s-[1px] border-gray-300">
                    Barcode
                  </td>
                  <td className="w-72 py-2 border-s-[1px] border-gray-300">
                    Nama Produk
                  </td>
                  <td className="w-28 py-2 border-s-[1px] border-gray-300">
                    Harga
                  </td>
                  <td className="w-14  py-2 border-s-[1px] border-gray-300">
                    Qty
                  </td>
                  <td className="w-32 py-2 border-s-[1px] border-gray-300">
                    Total
                  </td>
                  <td className="w-20 py-2 border-s-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody>
                {transaksiList.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-2 border-gray-300 transition-colors ease-in text-colorDarkTwo dark:text-colorTwo"
                      colSpan={7}
                    >
                      Tidak ada Data Tersedia
                    </td>
                  </tr>
                ) : (
                  transaksiList.map((item, index) => (
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
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-300">
                        {item.barcode}
                      </td>
                      <td className="w-72 py-0.5 border-s-[1px] border-gray-300">
                        {item.namaProduk}
                      </td>
                      <td className="w-28 py-0.5 border-s-[1px] border-gray-300">
                        {item.harga.toLocaleString("id-ID")}
                      </td>
                      <td className="w-14 py-0.5 border-s-[1px]  border-gray-300">
                        {item.jumlah}
                      </td>
                      <td className="w-32 py-0.5 border-s-[1px] border-gray-300">
                        {item.total.toLocaleString("id-ID")}
                      </td>
                      <td className="w-20 py-0.5 border-x-[1px] border-gray-300 space-x-2">
                        <button
                          className="bg-red-700 hover:bg-red-800 hover:scale-95 rounded p-1"
                          onClick={() => deleteData(item.barcode)}
                        >
                          <HiOutlineTrash className="text-xl text-colorTwo" />
                        </button>
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
