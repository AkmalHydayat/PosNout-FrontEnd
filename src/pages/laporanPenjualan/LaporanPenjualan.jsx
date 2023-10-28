/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import LayoutPage from "../../layout/PageLayout";
import TableLaporan from "./TableLaporan";
import { useEffect, useState } from "react";
import transaksiListData from "../transaksi/TransaksiListData";

const LaporanPenjualan = ({ widthLogFilter }) => {
  const { transaksiList } = transaksiListData();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchInvoice, setSearchInvoice] = useState("");

  // const addTransaksi = () => {
  //   const existingTransaksi = transaksiList.find(
  //     (transaksi) => transaksi.barcode === produkBarcodeSelect
  //   );

  //   const jumlahToAdd = parseInt(jumlah, 10); // Mengonversi jumlah ke tipe data number

  //   if (existingTransaksi) {
  //     // Jika produk dengan barcode yang sama sudah ada,
  //     // tambahkan jumlahnya
  //     existingTransaksi.jumlah += jumlahToAdd;

  //     // Hitung ulang totalnya
  //     existingTransaksi.total =
  //       existingTransaksi.harga * existingTransaksi.jumlah;

  //     // Update transaksiList
  //     setTransaksiList([...transaksiList]);
  //   } else {
  //     // Jika produk belum ada, tambahkan sebagai transaksi baru
  //     const newTransaksiList = {
  //       barcode: produkBarcodeSelect,
  //       namaProduk: produkSelect,
  //       harga: produkHargaSelect,
  //       jumlah: jumlahToAdd,
  //       total: 0,
  //     };

  //     // Menghitung total berdasarkan harga dan jumlah
  //     newTransaksiList.total = newTransaksiList.harga * newTransaksiList.jumlah;

  //     // Menambahkan transaksi ke dalam transaksiList
  //     setTransaksiList([...transaksiList, newTransaksiList]);
  //   }
  // };

  // const searchTransaksi = () => {
  //   const results = transaksiList.filter((item) =>
  //     item.namaProduk.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  //   setSearchResults(results);
  //   setIsSearching(true);
  // };

  // Fungsi untuk menutup table pecarian
  const stopSearch = () => {
    setIsSearching(false);
    setSearchTerm(""); // Mengosongkan input pencarian saat pencarian dihentikan
    setSearchResults([]);
  };

  const [invoiceNumber, setInvoiceNumber] = useState("");

  const generateInvoice = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().slice(-2);
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");

    const formattedDate = `PP${day}${month}${year}`;

    // periksa apakah invoiceNumber kosong atau tanggalnya sudah berganti
    if (!invoiceNumber || formattedDate !== invoiceNumber.substring(0, 8)) {
      // jika ia reset menjadi 0001
      setInvoiceNumber(`${formattedDate}0001`);
    } else {
      // jika tanggalnya masih sama lakukan penambahan pada invoiceNumber
      const currentCount = parseInt(invoiceNumber.substring(8), 10);
      const newCount = (currentCount + 1).toString().padStart(4, "0");
      setInvoiceNumber(`${formattedDate}${newCount}`);
    }
  };

  useEffect(() => {
    // Panggil generate Invoice hanya saat komponen pertama kali dirender
    generateInvoice();
  }, []);

  return (
    <LayoutPage>
      <div className={` p-6 font-pt_Sans`}>
        <div className=" text-3xl mb-3 text-gray-900 font-medium">
          Laporan Penjualan
        </div>
        <div className="space-y-7">
          <div className="pb-6 rounded shadow-md  border-[1px] border-gray-200 shadow-gray-300 bg-colorTwo">
            <div className="font-semibold text-purple-600 text-xl py-3.5 mb-4 px-6  border-b-[1px] border-purple-300">
              Filter Data
            </div>
            <div className="flex justify-center py-3">
              <form action="">
                <div className="flex w-full space-x-12">
                  <div className=" space-x-3  ">
                    <label className="">Tanggal</label>
                    <input
                      type="date"
                      className={` border-[1px] h-10 border-gray-300 rounded transition-all ${widthLogFilter} px-2`}
                    />
                    <label>s/d</label>
                    <input
                      className={` border-[1px] h-10 border-gray-300 rounded ${widthLogFilter}  px-2`}
                      type="date"
                    />
                  </div>
                  <label className="">
                    Invoice
                    <input
                      className={`border-[1px] focus:outline-none focus:border-[1px] focus:border-purple-600 ms-3 h-10 px-2 ${widthLogFilter} border-gray-300 rounded`}
                      type="text"
                      value={searchInvoice}
                      onChange={(e) => {
                        const value = e.target.value.toLocaleUpperCase();
                        setSearchInvoice(value);
                      }}
                      placeholder="PP0609200001"
                    />
                  </label>
                  <div className="flex justify-center items-center space-x-3 ">
                    <div className=" flex px-4 h-9 w-16 justify-center items-center rounded bg-purple-600 text-colorTwo font-semibold shadow-sm2 shadow-gray-300 hover:bg-purple-700 hover:shadow-cus2 hover:shadow-gray-500 transition-all ease-in cursor-pointer">
                      Cari
                    </div>
                    <div className=" flex px-4 h-9 w-16 justify-center  items-center rounded bg-colorTwo text-purple-600 font-semibold shadow-sm2 shadow-gray-300 hover:bg-purple-600 hover:text-colorTwo transition-all ease-in cursor-pointer">
                      Reset
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className=" shadow-md border-[1px]  border-gray-200 rounded  shadow-gray-300">
            <TableLaporan
              searchTerm={searchTerm}
              stopSearch={stopSearch}
              setSearchTerm={setSearchTerm}
              searchResults={searchResults}
              isSearching={isSearching}
              transaksiList={transaksiList}
            />
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default LaporanPenjualan;
