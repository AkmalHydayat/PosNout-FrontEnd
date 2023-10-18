/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import LayoutPage from "../../layout/PageLayout";
import TableLaporan from "./TableLaporan";
import { useEffect, useState } from "react";
import transaksiListData from "../transaksi/TransaksiListData";

const LaporanPenjualan = () => {
  const { transaksiList } = transaksiListData();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

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
      <div className={` p-6 font-titilium`}>
        <div className=" text-3xl mb-3 text-gray-900 font-semibold">
          Laporan Penjualan
        </div>
        <div className="space-y-7">
          <div className="pb-6 rounded shadow-lg  shadow-gray-400 bg-colorTwo">
            <div className="font-semibold text-xl py-3.5 mb-4 px-6  border-b-2 border-gray-400">
              Filter Data
            </div>
            <div className="  px-6  ">
              <form action="">
                <div className="flex justify-between">
                  <div className="space-x-5">
                    <label>
                      Tanggal
                      <input
                        type="date"
                        className="ms-10 h-10 border-[1px] border-gray-300 rounded-sm w-36 px-2"
                      />
                    </label>
                    <label>
                      s/d
                      <input
                        className="ms-5 w-36 px-2 h-10 border-[1px] border-gray-300 rounded-sm"
                        type="date"
                      />
                    </label>
                  </div>
                  <label className="space-x-5">
                    invoice
                    <input
                      className="ms-10 w-54 px-2 h-10 border-[1px] border-gray-300 rounded-sm"
                      type="text"
                    />
                  </label>
                  <div className="flex space-x-5">
                    <div className="h-8 my-auto flex px-4  items-center rounded-md bg-purple-600 text-white hover:bg-purple-700 cursor-pointer">
                      reset
                    </div>
                    <div className="h-8 my-auto flex px-4  items-center rounded-md bg-purple-600 text-white hover:bg-purple-700 cursor-pointer">
                      cari
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className=" shadow-lg rounded  shadow-gray-400">
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
