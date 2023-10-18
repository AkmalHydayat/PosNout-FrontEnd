/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { getProduks } from "../../utils/api";
import FormInputProduk from "./FormInputProduk";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
const FormAddProduk = ({ produks, setProduks, onClose }) => {
  const [newNamaProduk, setNewNamaProduk] = useState("");
  const [newSatuanProduk, setNewSatuanProduk] = useState("");
  const [newKategoriProduk, setNewKategoriProduk] = useState("");
  const [newHargaBeliProduk, setNewHargaBeliProduk] = useState("");
  const [newHargaJualProduk, setNewHargaJualProduk] = useState("");
  const [isNamaProdukEmpty, setIsNamaProdukEmpty] = useState(false);
  const [isSatuanProdukEmpty, setIsSatuanProdukEmpty] = useState(false);
  const [isKategoriProdukEmpty, setIsKategoriProdukEmpty] = useState(false);
  const [isHargaBeliProdukEmpty, setIsHargaBeliProdukEmpty] = useState(false);
  const [isHargaJualProdukEmpty, setIsHargaJualProdukEmpty] = useState(false);
  const [errorInput, setErrorInput] = useState("");
  const emptyNamaProdukStyle = isNamaProdukEmpty
    ? "border-[1px] border-red-500"
    : "";
  const emptySatuanProdukStyle = isSatuanProdukEmpty
    ? "border-[1px] border-red-500"
    : "";
  const emptyKategoriProdukStyle = isKategoriProdukEmpty
    ? "border-[1px] border-red-500"
    : "";
  const emptyHargaBeliProdukStyle = isHargaBeliProdukEmpty
    ? "border-[1px] border-red-500"
    : "";
  const emptyHargaJualProdukStyle = isHargaJualProdukEmpty
    ? "border-[1px] border-red-500"
    : "";
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  let productIdCounter =
    parseInt(localStorage.getItem("productIdCounter")) || 1;

  const generateBarcode = () => {
    const prefix = "BRG";
    const formattedId = productIdCounter.toString().padStart(5, "0");
    const barcode = `${prefix}${formattedId}`;
    productIdCounter++;
    localStorage.setItem("productIdCounter", productIdCounter.toString());
    return barcode;
  };

  const newProduks = async () => {
    try {
      const barcode = generateBarcode(); // Memanggil fungsi untuk mendapatkan barcode baru

      await axios.post("http://localhost:3000/produk", {
        barcode,
        nama_produk: newNamaProduk,
        satuan: newSatuanProduk,
        kategori: newKategoriProduk,
        harga_beli: newHargaBeliProduk,
        harga_jual: newHargaJualProduk,
        stok: 0,
      });

      const updatedProduks = await getProduks(); // Mengambil produk terbaru
      setProduks(updatedProduks); // Memperbarui state produk di luar komponen

      // Perbarui lastId setelah pembaruan data selesai

      navigate("/DaftarProduk");
    } catch (error) {
      console.error("Error while creating new product:", error);

      if (error.response) {
        setMsg(error.response.data.msg);
      } else {
        // Handle other types of errors
        setMsg("Terjadi kesalahan saat membuat produk.");
      }
    }
  };

  const setSubmit = (e) => {
    e.preventDefault();
    if (newNamaProduk.trim() === "") {
      setIsNamaProdukEmpty(true);
      setErrorInput("Input tidak boleh kosong.");
    } else if (newSatuanProduk.trim() === "") {
      setIsSatuanProdukEmpty(true);
      setErrorInput("Input tidak boleh kosong.");
    } else if (newKategoriProduk.trim() === "") {
      setIsKategoriProdukEmpty(true);
      setErrorInput("Input tidak boleh kosong.");
    } else if (newHargaBeliProduk.trim() === "") {
      setIsHargaBeliProdukEmpty(true);
      setErrorInput("Input tidak boleh kosong.");
    } else if (newHargaJualProduk.trim() === "") {
      setIsHargaJualProdukEmpty(true);
      setErrorInput("Input tidak boleh kosong.");
    } else if (
      produks.some(
        (produk) =>
          produk.nama_produk &&
          produk.nama_produk.toLowerCase() === newNamaProduk.toLowerCase()
      ) &&
      produks.some(
        (produk) =>
          produk.satuan &&
          produk.satuan.toLowerCase() === newSatuanProduk.toLowerCase()
      )
    ) {
      setErrorInput("Produk sudah ada dalam daftar.");
    } else {
      newProduks();
      setNewNamaProduk("");
      setNewSatuanProduk("");
      setNewKategoriProduk("");
      setNewHargaBeliProduk("");
      setNewHargaJualProduk("");
      setErrorInput("");
      onClose();
    }
  };
  return (
    <div className="">
      <div className="border-b-[1px] border-gray-300">
        <div className="px-6 py-3 text-2xl text-gray-900">Add Data</div>
      </div>
      <form action="" onSubmit={setSubmit}>
        <FormInputProduk
          emptyNamaProdukStyle={emptyNamaProdukStyle}
          setIsNamaProdukEmpty={setIsNamaProdukEmpty}
          emptySatuanProdukStyle={emptySatuanProdukStyle}
          setIsSatuanProdukEmpty={setIsSatuanProdukEmpty}
          emptyKategoriProdukStyle={emptyKategoriProdukStyle}
          setIsKategoriProdukEmpty={setIsKategoriProdukEmpty}
          emptyHargaBeliProdukStyle={emptyHargaBeliProdukStyle}
          setIsHargaBeliProdukEmpty={setIsHargaBeliProdukEmpty}
          emptyHargaJualProdukStyle={emptyHargaJualProdukStyle}
          setIsHargaJualProdukEmpty={setIsHargaJualProdukEmpty}
          newNamaProduk={newNamaProduk}
          setNewNamaProduk={setNewNamaProduk}
          newSatuanProduk={newSatuanProduk}
          setNewSatuanProduk={setNewSatuanProduk}
          newKategoriProduk={newKategoriProduk}
          setNewKategoriProduk={setNewKategoriProduk}
          newHargaBeliProduk={newHargaBeliProduk}
          setNewHargaBeliProduk={setNewHargaBeliProduk}
          newHargaJualProduk={newHargaJualProduk}
          setNewHargaJualProduk={setNewHargaJualProduk}
          errorInput={errorInput}
        />
        <p className="text-center text-fnd text-sm">{msg}</p>
        <div className="px-6 py-4 space-x-2 text-base flex border-t-[1px] border-gray-300 justify-end ">
          <button className="bg-purple-600 text-white font-semibold px-2 py-1 rounded  hover:bg-purple-700 hover:shadow-sm2">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddProduk;
