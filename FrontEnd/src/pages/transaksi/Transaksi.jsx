/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LayoutPage from "../../layout/PageLayout";
import ButtonBgSec from "../../components/ui/ButtonBgSec";
import DateNow from "../../components/Date";
import { TableTransaksi } from "./TableTransaksi";
import transaksiListData from "./TransaksiListData";
import { useEffect, useState } from "react";
import ButtonGetProduk from "./ButtonGetProduk";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

/* eslint-disable react/prop-types */
const Transaksi = () => {
  const { hari, month, year } = DateNow();
  const { transaksiList, setTransaksiList } = transaksiListData();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [produkSelect, setProdukSelect] = useState("");
  const [produkBarcodeSelect, setProdukBarcodeSelect] = useState("");
  const [produkHargaSelect, setProdukHargaSelect] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [isBarcodeEmpty, setIsBarcodeEmpty] = useState(false);
  const [isJumlahEmpty, setIsJumlahEmpty] = useState(false);
  const emptyBarcodeStyle = isBarcodeEmpty
    ? "border-[1px] border-red-500"
    : "border-[1px] border-gray-400";
  const emptyJumlahStyle = isJumlahEmpty
    ? "border-[1px] border-red-500"
    : "border-[1px] border-gray-400";

  const totalJumlah = transaksiList.reduce((accumulator, transaksi) => {
    return accumulator + transaksi.total;
  }, 0);
  const formattedTotal = totalJumlah.toLocaleString("id-ID");

  const addTransaksi = () => {
    const existingTransaksi = transaksiList.find(
      (transaksi) => transaksi.barcode === produkBarcodeSelect
    );

    const jumlahToAdd = parseInt(jumlah, 10); // Mengonversi jumlah ke tipe data number

    if (existingTransaksi) {
      // Jika produk dengan barcode yang sama sudah ada,
      // tambahkan jumlahnya
      existingTransaksi.jumlah += jumlahToAdd;

      // Pastikan bahwa existingTransaksi.jumlah adalah angka
      if (isNaN(existingTransaksi.jumlah) || existingTransaksi.jumlah <= 0) {
        // Tampilkan pesan kesalahan atau lakukan tindakan yang sesuai
        console.error("Jumlah harus berupa angka positif.");
        return;
      }

      // Hitung ulang totalnya
      existingTransaksi.total =
        existingTransaksi.harga * existingTransaksi.jumlah;

      // Pastikan bahwa existingTransaksi.total adalah angka
      if (isNaN(existingTransaksi.total) || existingTransaksi.total <= 0) {
        // Tampilkan pesan kesalahan atau lakukan tindakan yang sesuai
        console.error("Total harus berupa angka positif.");
        return;
      }

      // Update transaksiList
      const updatedTransaksiList = [...transaksiList];
      setTransaksiList(updatedTransaksiList);
    } else {
      // Jika produk belum ada, tambahkan sebagai transaksi baru
      const newTransaksiList = {
        barcode: produkBarcodeSelect,
        namaProduk: produkSelect,
        harga: produkHargaSelect,
        jumlah: jumlahToAdd,
        total: 0,
      };

      // Menghitung total berdasarkan harga dan jumlah
      newTransaksiList.total = newTransaksiList.harga * newTransaksiList.jumlah;

      // Menambahkan transaksi ke dalam transaksiList
      setTransaksiList([...transaksiList, newTransaksiList]);
    }
  };

  const searchTransaksi = () => {
    const results = transaksiList.filter((item) =>
      item.namaProduk.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
    setIsSearching(true);
  };

  // Fungsi untuk menutup table pecarian
  const stopSearch = () => {
    setIsSearching(false);
    setSearchTerm(""); // Mengosongkan input pencarian saat pencarian dihentikan
    setSearchResults([]);
  };

  const getSelected = (barcode, nama, harga) => {
    setProdukSelect(nama);
    setProdukBarcodeSelect(barcode);
    setProdukHargaSelect(harga);
  };

  const [invoiceNumber, setInvoiceNumber] = useState("");

  const generateInvoice = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().slice(-2);
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");

    const formattedDate = `PP${day}${month}${year}`;
    let newInvoiceNumber = "";
    // periksa apakah invoiceNumber kosong atau tanggalnya sudah berganti
    if (!invoiceNumber || formattedDate !== invoiceNumber.substring(0, 8)) {
      // jika ia reset menjadi 0001
      newInvoiceNumber = `${formattedDate}0001`;
    } else {
      // jika tanggalnya masih sama lakukan penambahan pada invoiceNumber
      const currentCount = parseInt(invoiceNumber.substring(8), 10);
      const newCount = (currentCount + 1).toString().padStart(4, "0");
      newInvoiceNumber = `${formattedDate}${newCount}`;
    }
    setInvoiceNumber(newInvoiceNumber);
  };

  useEffect(() => {
    // Panggil generate Invoice hanya saat komponen pertama kali dirender
    generateInvoice();
  }, []);

  const editJumlah = (newJumlah, barcode) => {
    const updatedTransaksiList = transaksiList.map((list) => {
      if (list.barcode === barcode) {
        list.jumlah = newJumlah;
        // Update total based on the new jumlah
        list.total = list.harga * newJumlah;
      }

      return list;
    });

    setJumlah(updatedTransaksiList);
    // Perbarui juga searchResults jika id ada dalam hasil pencarian
    if (isSearching) {
      const updatedSearchResults = searchResults.map((list) => {
        if (list.barcode === barcode) {
          list.jumlah = newJumlah;
          // Update total based on the new jumlah
          list.total = list.harga * newJumlah;
        }
        return list;
      });
      setSearchResults(updatedSearchResults);
    }
  };

  return (
    <LayoutPage>
      <div className={` p-6 font-titilium`}>
        <div className=" text-3xl mb-3 text-gray-900 font-semibold">
          Transaksi
        </div>
        <div className="space-y-7">
          <div className="flex justify-between gap-6 ">
            <div className=" py-6 px-6 w-1/4 rounded shadow-lg shadow-gray-400 bg-colorTwo">
              <form action="" className="space-y-8">
                <div className="gap-2 flex h-8">
                  <label htmlFor="" className="w-1/4 ">
                    Date
                  </label>
                  <input
                    type="text"
                    value={`${hari}/${month}/${year}`}
                    readOnly
                    className="cursor-default px-2  bg-gray-300 font-bold focus:outline-none border-[1px] border-gray-400 w-3/4 rounded"
                  />
                </div>
                <div className="gap-2 flex h-8">
                  <label htmlFor="" className="w-1/4 ">
                    Kasir
                  </label>
                  <input
                    type="text"
                    value={"Akmal Hydayat"}
                    readOnly
                    className="cursor-default px-2  bg-gray-300  font-acme focus:outline-none border-[1px] border-gray-400 w-3/4  rounded"
                  />
                </div>
              </form>
            </div>
            <div className="px-6 py-6 rounded bg-colorTwo shadow-lg shadow-gray-400">
              <div className="space-y-8">
                <div className=" flex h-8">
                  <label htmlFor="" className="w-1/4 me-1">
                    Barcode
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={produkBarcodeSelect ? produkBarcodeSelect : "-"}
                    className={`${
                      produkBarcodeSelect
                        ? "font-acme"
                        : "font-titilium font-bold"
                    } cursor-default px-2 bg-gray-300 focus:outline-none ${emptyBarcodeStyle}  w-3/4 rounded-s `}
                  />
                  <ButtonGetProduk getSelected={getSelected} />
                </div>
                <form
                  action=""
                  className=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (produkBarcodeSelect === "") {
                      setIsBarcodeEmpty(true);
                    } else if (produkBarcodeSelect !== "") {
                      setIsBarcodeEmpty(false);
                    }

                    if (jumlah === "") {
                      setIsJumlahEmpty(true);
                    } else if (jumlah !== "") {
                      setIsJumlahEmpty(false);
                    }

                    // Check all conditions and execute the final block if none of the conditions are met
                    if (produkBarcodeSelect !== "" && jumlah !== "") {
                      // Your existing logic for addTransaksi
                      addTransaksi();
                      setProdukSelect("");
                      setProdukBarcodeSelect("");
                      setProdukHargaSelect("");
                      setJumlah("");
                      setIsBarcodeEmpty(false);
                      setIsJumlahEmpty(false);
                    }
                  }}
                >
                  <div className=" flex h-8">
                    <label htmlFor="" className="w-1/4 ">
                      Qty
                    </label>
                    <input
                      type="text"
                      value={jumlah}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const sanitizedValue = inputValue.replace(
                          /[^0-9]/g,
                          ""
                        );
                        setJumlah(sanitizedValue);
                      }}
                      placeholder="Jumlah Pesanan"
                      className={`bg-white ${emptyJumlahStyle} focus:outline-none  font-acme placeholder:font-titilium placeholder:text-sm placeholder:text-gray-500 w-2/4 px-2 me-6 rounded`}
                    />
                    <button
                      type="submit"
                      className="bg-purple-600 hover:bg-purple-700 w-1/4 px-2  rounded text-sm flex justify-center items-center"
                    >
                      <FontAwesomeIcon
                        icon={faCartArrowDown}
                        className=" text-white me-2 font-bold"
                      />
                      <span className="text-white font-bold ">Add</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="px-6 py-4 w-2/5 rounded bg-colorTwo shadow-lg shadow-gray-400 ">
              <div className="flex justify-between">
                <div className="">
                  <span className="font-titilium me-1 text-base font-medium">
                    Invoice
                  </span>
                  <span className="font-acme text-lg">{invoiceNumber}</span>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 px-3 py-1.5 text-white font-bold rounded text-sm flex justify-center items-center">
                  Bayar
                </button>
              </div>
              <div className="text-5xl mt-6 font-acme text-end">
                <span className="me-2">Rp.</span>

                <span> {formattedTotal}</span>
              </div>
            </div>
          </div>
          <div className=" shadow-lg rounded  shadow-gray-400">
            <TableTransaksi
              searchTerm={searchTerm}
              stopSearch={stopSearch}
              setSearchTerm={setSearchTerm}
              searchResults={searchResults}
              setJumlah={setJumlah}
              editJumlah={editJumlah}
              isSearching={isSearching}
              addTransaksi={addTransaksi}
              transaksiList={transaksiList}
              searchTransaksi={searchTransaksi}
              produkSelect={produkSelect}
              produkHargaSelect={produkHargaSelect}
            />
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Transaksi;
