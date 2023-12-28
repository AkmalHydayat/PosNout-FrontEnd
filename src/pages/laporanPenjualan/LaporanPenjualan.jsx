/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import axios from "axios";
import LayoutPage from "../../layout/PageLayout";
import TableLaporan from "./TableLaporan";
import { useEffect, useState } from "react";
import { getTransaksiLogs } from "../../utils/api";
import AlertShow from "../../components/ui/Alert";

const LaporanPenjualan = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchInvoice, setSearchInvoice] = useState("");
  const [rangeDateFrom, setRangeDateFrom] = useState("");
  const [rangeDateTo, setRangeDateTo] = useState("");
  const [transaksiLog, setTransaksiLog] = useState([]);
  const [daftarBarang, setDaftarBarang] = useState([]);

  const AlertMessage = (message, width, icon) => {
    AlertShow(message, width, icon);
  };

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

  const handleSearch = () => {
    //  jika inputan tidak di isi
    if (!rangeDateFrom && !rangeDateTo && !searchInvoice) {
      AlertMessage("Masukkan Filter Data pada Inputan", 390, "warning");
    }
    // jika hanya inputan searchInvoice yang diisi
    else if (!rangeDateFrom && !rangeDateTo && searchInvoice) {
      const filteredData = transaksiLog.filter((log) => {
        return log.invoice.includes(searchInvoice);
      });
      setSearchResults(filteredData);
      setIsSearching(true);
    }
    // jika hanya inputan rangeDateFrom yang diisi
    else if (rangeDateFrom && !rangeDateTo && !searchInvoice) {
      const filteredData = transaksiLog.filter((log) => {
        const logDate = log.waktuTransaksi;
        const dateParts = logDate.split("-");
        const formattedDateLog = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

        return formattedDateLog >= rangeDateFrom;
      });
      setSearchResults(filteredData);
      setIsSearching(true);
    }
    // jika hanya inputan rangeDateTo yang diisi
    else if (!rangeDateFrom && rangeDateTo && !searchInvoice) {
      const filteredData = transaksiLog.filter((log) => {
        const logDate = log.waktuTransaksi;
        const dateParts = logDate.split("-");
        const formattedDateLog = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

        return formattedDateLog == rangeDateTo;
      });
      setSearchResults(filteredData);
      setIsSearching(true);
    }
    // jika hanya inputan rangeDateFrom dan rangeDateTo yang diisi
    else if (rangeDateFrom && rangeDateTo && !searchInvoice) {
      if (rangeDateFrom > rangeDateTo) {
        AlertMessage("periksa inputan.", 460, "error");
      } else {
        const filteredData = transaksiLog.filter((log) => {
          const logDate = log.waktuTransaksi;
          const dateParts = logDate.split("-");
          const formattedDateLog = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
          const startDate = rangeDateFrom;
          const endDate = rangeDateTo;

          return formattedDateLog >= startDate && formattedDateLog <= endDate;
        });
        setSearchResults(filteredData);
        setIsSearching(true);
      }
    }
    // jika semua inputan yang diisi
    else {
      const filteredData = transaksiLog.filter((log) => {
        const logDate = log.waktuTransaksi;
        const dateParts = logDate.split("-");
        const formattedDateLog = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
        const startDate = rangeDateFrom;
        const endDate = rangeDateTo;

        return (
          formattedDateLog >= startDate &&
          formattedDateLog <= endDate &&
          log.invoice.includes(searchInvoice)
        );
      });
      setSearchResults(filteredData);
      setIsSearching(true);
    }
  };

  const stopSearch = () => {
    setIsSearching(false);
    setSearchResults([]);
    setSearchInvoice("");
    setRangeDateFrom("");
    setRangeDateTo("");
  };

  return (
    <LayoutPage>
      <div className={` p-6 font-pt_Sans`}>
        <div className="font-medium text-3xl  mb-3 text-gray-900 dark:text-colorTwo transition-colors ease-in">
          Laporan Penjualan
        </div>
        <div className="space-y-7">
          <div className="pb-6 rounded shadow-md  border-[1px] border-gray-200 shadow-gray-300 bg-colorTwo dark:border-colorDarkOne dark:shadow-black  dark:bg-colorDarkTwo  transition-all ease-in">
            <div className="font-semibold text-purple-600 text-xl py-3.5 mb-4 px-6  border-b-[1px] border-purple-300 dark:border-colorDarkOne transition-all ease-in">
              Filter Data
            </div>
            <div className="py-3">
              <form
                action=""
                className="flex justify-evenly dark:text-colorTwo text-colorDarkTwo  transition-colors ease-in"
              >
                <div className="flex justify-between">
                  <div className=" space-x-3 flex items-center w-2/4 ">
                    <label className="">Tanggal</label>
                    <input
                      type="date"
                      className={` border-[1px] focus:outline-none hover:border-[1px] hover:border-purple-600 outline-none focus:border-2 dark:bg-colorDarkTwo text-gray-900 dark:text-colorTwo transition-all ease-in   focus:border-purple-600 h-10 border-gray-300 w-80 rounded px-2`}
                      value={rangeDateFrom}
                      onChange={(e) => {
                        const inputDate = new Date(e.target.value);
                        const currentDate = new Date();

                        if (inputDate > currentDate) {
                          AlertMessage(
                            "Tidak dapat memilih tanggal di masa depan.",
                            460,
                            "error"
                          );
                          e.target.value = ""; // Mengosongkan input
                        } else {
                          setRangeDateFrom(e.target.value);
                        }
                      }}
                    />
                    <label>s/d</label>

                    <input
                      className={` border-[1px] h-10 hover:border-[1px] hover:border-purple-600 focus:outline-none outline-none focus:border-2  focus:border-purple-600 dark:bg-colorDarkTwo transition-all ease-in  text-gray-900 dark:text-colorTwo  border-gray-300 rounded w-48  px-2 `}
                      type="date"
                      value={rangeDateTo}
                      onChange={(e) => {
                        const inputDate = new Date(e.target.value);
                        const currentDate = new Date();

                        if (inputDate > currentDate) {
                          AlertMessage(
                            "Tidak dapat memilih tanggal di masa depan.",
                            460,
                            "error"
                          );
                          e.target.value = ""; // Mengosongkan input
                        } else {
                          setRangeDateTo(e.target.value);
                        }
                      }}
                    />
                  </div>
                  <div className="w-2/4 flex space-x-5 justify-end">
                    <label className="">
                      Invoice
                      <input
                        className={`border-[1px] px-3 focus:outline-none hover:border-[1px] hover:border-purple-600 outline-none focus:border-2 dark:bg-colorDarkTwo transition-all ease-in text-gray-900 dark:text-colorTwo w-48 focus:border-purple-600 ms-3 h-10 px- border-gray-300 rounded placeholder:text-gray-500 `}
                        type="text"
                        value={searchInvoice}
                        onChange={(e) => {
                          const value = e.target.value.toLocaleUpperCase();
                          setSearchInvoice(value);
                        }}
                        placeholder="PP0609200001"
                      />
                    </label>
                    <div className="flex justify-center items-center space-x-3">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleSearch();
                        }}
                        className={`bg-purple-600 dark:shadow-black text-colorTwo shadow-cus2 hover:shadow-sm2 hover:shadow-black/30 shadow-gray-400  transition-all ease-in  hover:text-white  hover:bg-purple-700 rounded w-16 h-9 group py-1 font-semibold text-md`}
                      >
                        Cari
                      </button>
                      <button
                        className={`bg-colorTwo dark:border-[1px]  dark:bg-colorDarkTwo dark:shadow-black  dark:text-colorTwo  dark:hover:text-purple-600 dark:hover:shadow-sm2 dark:hover:shadow-black  dark:shadow-cus2 cursor-pointer shadow-sm2 text-purple-600  dark:border-colorDarkTwo hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-black/30 hover: hover:text-purple-600   rounded group w-16 h-9 font-semibold py-1`}
                        onClick={(e) => {
                          e.preventDefault();
                          setSearchInvoice("");
                          setRangeDateFrom("");
                          setRangeDateTo("");
                        }}
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div>
            <TableLaporan
              stopSearch={stopSearch}
              transaksiLog={transaksiLog}
              daftarBarang={daftarBarang}
              getDaftarBarang={getDaftarBarang}
              searchResults={searchResults}
              isSearching={isSearching}
            />
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default LaporanPenjualan;
