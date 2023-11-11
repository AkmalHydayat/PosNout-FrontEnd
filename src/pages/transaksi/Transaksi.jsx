/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import LayoutPage from "../../layout/PageLayout";
import DateNow from "../../components/Date";
import { TableTransaksi } from "./TableTransaksi";
import transaksiListData from "./TransaksiListData";
import { useEffect, useState } from "react";
import ButtonGetProduk from "./ButtonGetProduk";
import ButtonPayment from "./ButtonPayment";
import AlertShow from "../../components/ui/Alert";
import { TbShoppingCartPlus } from "react-icons/tb";
import axios from "axios";

const Transaksi = () => {
  const { hari, month, year } = DateNow();
  const { transaksiList, setTransaksiList } = transaksiListData();
  const [produkSelect, setProdukSelect] = useState("");
  const [produkStokSelect, setProdukStokSelect] = useState(0);
  const [produkBarcodeSelect, setProdukBarcodeSelect] = useState("");
  const [produkHargaSelect, setProdukHargaSelect] = useState("");
  const [keuntunganProdukSelect, setKeuntunganProdukSelect] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [isBarcodeEmpty, setIsBarcodeEmpty] = useState(false);
  const [isJumlahEmpty, setIsJumlahEmpty] = useState(false);
  const [totalJumlah, setTotalJumlah] = useState(0);
  const [totalKeuntunganPerTransaksi, setTotalKeuntunganPerTransaksi] =
    useState(0);
  const [produks, setProduks] = useState([]);
  const [invoiceNumber, setInvoiceNumber] = useState(
    localStorage.getItem("invoiceNumber") || generateInvoiceNumber()
  );
  const emptyBarcodeStyle = isBarcodeEmpty
    ? "border-[1px] border-red-500 dark:border-red-500 dark:bg-colorDarkTwo"
    : "border-[1px] border-gray-400  dark:bg-colorDarkOne";
  const emptyJumlahStyle = isJumlahEmpty
    ? "border-[1px] border-red-500 dark:border-red-500 dark:bg-colorDarkTwo"
    : "border-[1px] border-gray-400 dark:bg-colorDarkOne";
  const tanggalSekarang = `${hari}-${month}-${year}`;

  const AlertMessage = (message, width, icon) => {
    AlertShow(message, width, icon);
  };

  const calculateTotalJumlah = () => {
    // Hitung ulang total jumlah dari transaksi
    const newTotalJumlah = transaksiList.reduce((accumulator, transaksi) => {
      return accumulator + transaksi.total;
    }, 0);

    // Perbarui totalJumlah
    setTotalJumlah(newTotalJumlah);
  };

  const calculateTotalKeuntunganPerTransaksi = () => {
    // Hitung ulang total jumlah dari transaksi
    const newTotalKeuntungan = transaksiList.reduce(
      (accumulator, transaksi) => {
        return accumulator + transaksi.totalKeuntunganPerItem;
      },
      0
    );

    // Perbarui totalJumlah
    setTotalKeuntunganPerTransaksi(newTotalKeuntungan);
  };

  useEffect(() => {
    // Ketika ada perubahan pada transaksiList, hitung ulang totalJumlah
    calculateTotalJumlah();
    calculateTotalKeuntunganPerTransaksi();
  }, [transaksiList]);

  const addTransaksi = () => {
    const existingTransaksi = transaksiList.find(
      (transaksi) => transaksi.barcode === produkBarcodeSelect
    );

    const jumlahToAdd = parseInt(jumlah, 10); // Mengonversi jumlah ke tipe data number

    if (existingTransaksi) {
      // Jika produk dengan barcode yang sama sudah ada,
      // tambahkan jumlahnya
      if (existingTransaksi.jumlah >= produkStokSelect) {
        AlertMessage("Stok barang tidak mencukupi", 350, "warning");
        return;
      } else if (existingTransaksi.jumlah + jumlahToAdd > produkStokSelect) {
        AlertMessage("Stok barang tidak mencukupi", 350, "warning");
        return;
      } else {
        existingTransaksi.jumlah += jumlahToAdd;
      }
      // Pastikan bahwa existingTransaksi.jumlah adalah angka
      if (isNaN(existingTransaksi.jumlah) || existingTransaksi.jumlah <= 0) {
        // Tampilkan pesan kesalahan atau lakukan tindakan yang sesuai
        console.error("Jumlah harus berupa angka positif.");
        return;
      }

      // Hitung ulang totalnya
      existingTransaksi.total =
        existingTransaksi.harga * existingTransaksi.jumlah;

      const updatedTransaksiList = [...transaksiList];
      setTransaksiList(updatedTransaksiList);
    } else {
      // Jika produk belum ada, tambahkan sebagai transaksi baru
      const newTransaksiList = {
        invoice: invoiceNumber,
        barcode: produkBarcodeSelect,
        namaProduk: produkSelect,
        harga: produkHargaSelect,
        jumlah: jumlahToAdd,
        total: 0,
        keuntungan: keuntunganProdukSelect,
        totalKeuntunganPerItem: 0,
        waktuTransaksi: tanggalSekarang,
      };

      // Menghitung total berdasarkan harga dan jumlah
      newTransaksiList.total = newTransaksiList.harga * newTransaksiList.jumlah;

      // Menghitung keuntungan berdasarkan keuntungan per item dan jumlah
      newTransaksiList.totalKeuntunganPerItem =
        newTransaksiList.keuntungan * newTransaksiList.jumlah;

      // Menambahkan transaksi ke dalam transaksiList
      setTransaksiList([...transaksiList, newTransaksiList]);
    }
  };

  const getSelected = (barcode, nama, harga, stok, keuntungan) => {
    setProdukSelect(nama);
    setProdukBarcodeSelect(barcode);
    setProdukHargaSelect(harga);
    setProdukStokSelect(stok);
    setKeuntunganProdukSelect(keuntungan);
  };

  // Buat fungsi untuk menghasilkan nomor invoice

  const generateInvoiceNumber = () => {
    const uniqueCode = "PP";
    const currentDate = new Date();
    const formattedDate = currentDate
      .toLocaleDateString("id-ID", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
      .join(""); // Format tanggal YYMMDD

    const lastResetDate = localStorage.getItem("lastResetDate");
    let invoiceNumberCounter =
      parseInt(localStorage.getItem("invoiceNumberCounter")) || 1;

    if (lastResetDate !== formattedDate) {
      // Jika tanggal terakhir reset bukan sama dengan tanggal saat ini, atur ulang counter ke 1
      invoiceNumberCounter = 1;
      localStorage.setItem("lastResetDate", formattedDate);
    }

    const newInvoiceNumber = `${uniqueCode}${formattedDate}${String(
      invoiceNumberCounter
    ).padStart(4, "0")}`;
    invoiceNumberCounter++;
    localStorage.setItem(
      "invoiceNumberCounter",
      invoiceNumberCounter.toString()
    );

    // Simpan nilai invoice ke penyimpanan lokal
    localStorage.setItem("invoiceNumber", newInvoiceNumber);

    return newInvoiceNumber;
  };

  const useAutoUpdateInvoiceNumber = () => {
    useEffect(() => {
      const currentDate = new Date();
      const formattedDate = currentDate
        .toLocaleDateString("id-ID", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
        })
        .split("/")
        .join(""); // Format tanggal YYMMDD

      const lastResetDate = localStorage.getItem("lastResetDate");

      if (lastResetDate !== formattedDate) {
        // Jika tanggal berubah, perbarui nomor faktur
        const newInvoiceNumber = generateInvoiceNumber();
        setInvoiceNumber(newInvoiceNumber);
      }
    }, []); // Pastikan useEffect hanya dijalankan sekali pada awal render
  };

  useAutoUpdateInvoiceNumber();

  const setSubmit = (e) => {
    e.preventDefault();
    // Inisialisasi variabel kesalahan
    let hasErrors = false;

    // Validasi produkBarcodeSelect
    if (produkBarcodeSelect === "") {
      AlertMessage("input tidak boleh kosong", 350, "warning");
      setIsBarcodeEmpty(true);
      hasErrors = true;
    } else {
      setIsBarcodeEmpty(false);
    }
    // Validasi jumlah
    if (jumlah === "") {
      AlertMessage("input tidak boleh kosong", 350, "warning");
      setIsJumlahEmpty(true);
      hasErrors = true;
    } else {
      setIsJumlahEmpty(false);
    }

    if (jumlah > produkStokSelect) {
      AlertMessage("Stok barang tidak mencukupi", 350, "warning");
      hasErrors = true;
    }

    // Jika tidak ada kesalahan, tambahkan transaksi
    if (!hasErrors) {
      addTransaksi();
      setProdukSelect("");
      setProdukStokSelect(0);
      setProdukBarcodeSelect("");
      setProdukHargaSelect("");
      setJumlah("");
    }
  };

  return (
    <LayoutPage>
      <div className={`p-6 font-pt_Sans`}>
        <div className="font-medium text-3xl  mb-3 text-gray-900 dark:text-colorTwo transition-colors ease-in">
          Transaksi
        </div>
        <div className="space-y-7">
          <div className="flex justify-between gap-6 ">
            <div className=" py-6 px-6 w-1/4 rounded  shadow-md border-[1px] border-gray-200 shadow-black/20 transition-all ease-in dark:shadow-black dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkOne bg-colorTwo ">
              <form action="" className="space-y-8">
                <div className="gap-2 flex h-8">
                  <label htmlFor="" className="w-1/4 ">
                    Date
                  </label>
                  <input
                    type="text"
                    value={`${hari}/${month}/${year}`}
                    readOnly
                    className="cursor-default px-2  bg-gray-300 dark:bg-colorDarkOne dark:border-colorTwo text-colorDarkOne dark:text-colorTwo transition-colors ease-in font-bold focus:outline-none border-[1px] border-gray-400 w-3/4 rounded"
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
                    className="cursor-default px-2  bg-gray-300 dark:bg-colorDarkOne dark:border-colorTwo text-colorDarkOne dark:text-colorTwo transition-colors ease-in  font-acme focus:outline-none border-[1px] border-gray-400 w-3/4  rounded"
                  />
                </div>
              </form>
            </div>
            <div className="px-6 py-6 rounded bg-colorTwo shadow-md border-[1px] border-gray-200 shadow-black/20 transition-all ease-in dark:shadow-black dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkOne">
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
                    } cursor-default px-2 dark:border-colorTwo text-colorDarkOne dark:text-colorTwo transition-colors ease-in focus:outline-none ${emptyBarcodeStyle}  w-3/4 rounded-s `}
                  />
                  <ButtonGetProduk
                    getSelected={getSelected}
                    produks={produks}
                    setProduks={setProduks}
                  />
                </div>
                <form action="" className="" onSubmit={setSubmit}>
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
                        if (sanitizedValue.charAt(0) === "0") {
                          // Angka 0 berada di awal inputan, jadi kita menghapusnya
                          setJumlah(sanitizedValue.slice(1));
                        } else {
                          setJumlah(sanitizedValue);
                        }
                      }}
                      placeholder="Jumlah Pesanan"
                      className={`bg-white ${emptyJumlahStyle} focus:outline-none dark:hover:border-purple-600 hover:border-purple-600 dark:focus:bg-colorTwo dark:focus:border-purple-600 
                      dark:focus:text-colorDarkTwo focus:border-purple-600 font-acme dark:bg-colorDarkTwo dark:border-colorTwo placeholder:font-titilium placeholder:text-sm transition-colors ease-in placeholder:text-gray-500 w-2/4 px-2 me-6 rounded`}
                    />
                    <button
                      type="submit"
                      className={`bg-purple-600 dark:shadow-black text-colorTwo shadow-cus2 hover:shadow-sm2 hover:shadow-gray-400 shadow-gray-400  transition-all ease-in flex items-center hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md`}
                    >
                      <TbShoppingCartPlus className="text-colorTwo text-lg" />
                      <span className="text-white font-bold ms-1">Add</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="px-6 py-4 w-2/5 rounded bg-colorTwo shadow-md border-[1px] border-gray-200 shadow-black/20 transition-all ease-in dark:shadow-black dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkOne ">
              <div className="flex justify-between">
                <div className="">
                  <span className=" me-1 text-base font-medium">Invoice</span>
                  <span className="font-semibold text-lg">{invoiceNumber}</span>
                </div>
                <ButtonPayment
                  transaksiList={transaksiList}
                  setTransaksiList={setTransaksiList}
                  invoiceNumber={invoiceNumber}
                  totalJumlah={totalJumlah}
                  AlertMessage={AlertMessage}
                  tanggalSekarang={tanggalSekarang}
                  generateInvoiceNumber={generateInvoiceNumber}
                  setTotalJumlah={setTotalJumlah}
                  setInvoiceNumber={setInvoiceNumber}
                  setProduks={setProduks}
                  totalKeuntunganPerTransaksi={totalKeuntunganPerTransaksi}
                  setTotalKeuntunganPerTransaksi={
                    setTotalKeuntunganPerTransaksi
                  }
                />
              </div>
              <div className="text-5xl mt-6 font-acme text-end">
                <span className="me-2">Rp.</span>

                <span> {totalJumlah}</span>
              </div>
            </div>
          </div>
          <div className="shadow-md border-[1px] border-gray-200 rounded shadow-black/20 transition-all ease-in dark:shadow-black dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkOne">
            <TableTransaksi
              transaksiList={transaksiList}
              setTransaksiList={setTransaksiList}
            />
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Transaksi;
