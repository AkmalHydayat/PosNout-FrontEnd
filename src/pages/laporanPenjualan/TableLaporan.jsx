/* eslint-disable react/prop-types */
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getTransaksiLogs } from "../../utils/api";
import ButtonDetail from "../transaksi/ButtonDetail";
import axios from "axios";

const TableLaporan = ({ stopSearch, searchResults, isSearching }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(15); // Sesuaikan dengan jumlah baris yang ingin ditampilkan per halaman
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const [transaksiLog, setTransaksiLog] = useState([]);

  const [daftarBarang, setDaftarBarang] = useState([]);

  const getDaftarBarang = async (invoice) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/getOrderDetail/${invoice}`
      );
      setDaftarBarang(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // atau Anda dapat menangani error di tempat lain
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTransaksiLogs();
        setTransaksiLog(data);
      } catch (error) {
        // Handle error jika diperlukan
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, []);
  // Fungsi untuk mencari stok berdasarkan nama
  const currentItems = transaksiLog.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="bg-colorTwo p-6 space-y-3  rounded">
        <div className="flex justify-between h-full">
          <div className="space-x-1 flex ">
            <label htmlFor="" className="my-auto ">
              Show
            </label>
            <div className="flex border-[1px] border-purple-600 rounded">
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
        </div>
        {isSearching ? (
          <div>
            <table className="w-full">
              <thead className="border-[1px] border-gray-300 ">
                <tr className="text-center font-bold text-lg text-gray-900">
                  <td className="w-10 py-2 border-[1px] border-gray-300 ">
                    No
                  </td>
                  <td className="w-44 py-2 border-[1px] border-gray-300">
                    Invoice
                  </td>
                  <td className="w-40 py-2 border-[1px] border-gray-300">
                    Tanggal
                  </td>
                  <td className="w-36 py-2 border-[1px] border-gray-300">
                    Total Transaksi
                  </td>
                  <td className="w-32 py-2 border-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-2  border-gray-300 "
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
                      <td className="w-10 py-0.5 border-[1px] border-gray-300 ">
                        {index + 1}
                      </td>
                      <td className="w-44 py-0.5 border-[1px] border-gray-300">
                        {item.invoice}
                      </td>
                      <td className="w-40 py-0.5 border-[1px] border-gray-300">
                        {item.waktuTransaksi}
                      </td>
                      <td className="w-36 py-0.5 border-[1px] border-gray-300">
                        {item.totalTransaksi}
                      </td>
                      <td className="w-32 py-0.5 border-[1px] border-gray-300">
                        <div onClick={() => getDaftarBarang(item.invoice)}>
                          <ButtonDetail
                            invoice={item.invoice}
                            tanggal={item.waktuTransaksi}
                            totalTransaksi={item.totalTransaksi}
                            daftarBarang={daftarBarang}
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
                <tr className="text-center font-bold text-lg text-gray-900">
                  <td className="w-10 py-2 border-[1px] border-gray-300 ">
                    No
                  </td>
                  <td className="w-44 py-2 border-[1px] border-gray-300">
                    Invoice
                  </td>
                  <td className="w-40 py-2 border-[1px] border-gray-300">
                    Tanggal
                  </td>
                  <td className="w-36 py-2 border-[1px] border-gray-300">
                    Total Transaksi
                  </td>
                  <td className="w-32 py-2 border-[1px] border-gray-300">
                    Aksi
                  </td>
                </tr>
              </thead>
              <tbody>
                {currentItems.length === 0 ? (
                  <tr>
                    <td
                      className=" text-center border-[1px] py-2  border-gray-300 "
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
                      <td className="w-10 py-0.5 border-[1px] border-gray-300 ">
                        {index + 1}
                      </td>
                      <td className="w-44 py-0.5 border-[1px] border-gray-300">
                        {item.invoice}
                      </td>
                      <td className="w-40 py-0.5 border-[1px] border-gray-300">
                        {item.waktuTransaksi}
                      </td>
                      <td className="w-36 py-0.5 border-[1px] border-gray-300">
                        {item.totalTransaksi}
                      </td>
                      <td className="w-32 py-0.5 border-[1px] border-gray-300">
                        <div onClick={() => getDaftarBarang(item.invoice)}>
                          <ButtonDetail
                            invoice={item.invoice}
                            tanggal={item.waktuTransaksi}
                            totalTransaksi={item.totalTransaksi}
                            daftarBarang={daftarBarang}
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
                {Math.min(indexOfLastItem, transaksiLog.length)} of{" "}
                {transaksiLog.length} entries
              </div>
              <div className="space-x-1 flex text-sm font-semibold">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`bg-colorTwo cursor-pointer   text-purple-600   shadow-sm2 shadow-gray-300 transition-all ease-in hover:shadow-gray-50  hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1  `}
                >
                  Previous
                </button>
                <div className="bg-colorTwo  px-3 py-1  border-[1px] shadow-sm2 shadow-gray-300 border-purple-600 text-purple-600 rounded cursor-default">
                  {currentPage}
                </div>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={indexOfLastItem >= transaksiLog.length}
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

export default TableLaporan;
