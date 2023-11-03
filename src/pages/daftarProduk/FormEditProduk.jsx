/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import FormInputProduk from "./FormInputProduk";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getProduks } from "../../utils/api";
/* eslint-disable react/prop-types */
const FormEditProduk = ({
  onClose,
  id,
  isSearching,
  setSearchResults,
  searchResults,
  setProduks,
  produks,
  stok,
  AlertMessage,
  newNamaProduk,
  setNewNamaProduk,
  newSatuanProduk,
  setNewSatuanProduk,
  newKategoriProduk,
  setNewKategoriProduk,
  newHargaBeliProduk,
  setNewHargaBeliProduk,
  newHargaJualProduk,
  setNewHargaJualProduk,
  setIsNamaProdukEmpty,
  setIsSatuanProdukEmpty,
  setIsKategoriProdukEmpty,
  setIsHargaBeliProdukEmpty,
  setIsHargaJualProdukEmpty,
  emptyNamaProdukStyle,
  emptySatuanProdukStyle,
  emptyKategoriProdukStyle,
  emptyHargaBeliProdukStyle,
  emptyHargaJualProdukStyle,
  setErrorInput,
  errorInput,
}) => {
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getProdukById = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/produk/${id}`);
        const produkData = response.data;
        setNewNamaProduk(produkData.nama_produk);
        setNewSatuanProduk(produkData.satuan);
        setNewKategoriProduk(produkData.kategori);
        setNewHargaBeliProduk(produkData.harga_beli);
        setNewHargaJualProduk(produkData.harga_jual);
      } catch (error) {
        if (error.response) {
          console.error(error.response); // Tambahkan log untuk melihat kesalahan server
          setMsg(
            error.response.data.msg ||
              "Terjadi kesalahan saat mengambil data produk."
          );
        } else {
          console.error(error); // Log kesalahan jika bukan dari server response
          setMsg("Terjadi kesalahan saat menghubungi server.");
        }
      }
    };
    getProdukById();
  }, [id]);

  const updateProduk = async () => {
    try {
      await axios.put(`http://localhost:3000/produk/${id}`, {
        nama_produk: newNamaProduk,
        satuan: newSatuanProduk,
        kategori: newKategoriProduk,
        harga_beli: newHargaBeliProduk,
        harga_jual: newHargaJualProduk,
        keuntungan: newHargaJualProduk - newHargaBeliProduk,
        stok: stok,
      });
      navigate("/DaftarProduk");
      const updatedProduks = await getProduks(); // Panggil fungsi getKategoris untuk memperbarui data
      setProduks(updatedProduks);
      // Perbarui juga searchResults jika id ada dalam hasil pencarian
      if (isSearching) {
        const updatedSearchResults = searchResults.map((produk) => {
          if (produk.id === id) {
            return {
              ...produk,
              nama_produk: newNamaProduk,
              satuan: newSatuanProduk,
              kategori: newKategoriProduk,
              harga_beli: newHargaBeliProduk,
              harga_jual: newHargaJualProduk,
              keuntungan: newHargaJualProduk - newHargaBeliProduk,
            };
          }
          return produk;
        });
        setSearchResults(updatedSearchResults);
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
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
    } else if (newHargaBeliProduk == "") {
      setIsHargaBeliProdukEmpty(true);
      setErrorInput("Input tidak boleh kosong.");
    } else if (newHargaJualProduk == "") {
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
      ) &&
      produks.some(
        (produk) =>
          produk.kategori &&
          produk.kategori.toLowerCase() === newKategoriProduk.toLowerCase()
      ) &&
      produks.some(
        (produk) =>
          produk.harga_beli && produk.harga_beli === newHargaBeliProduk
      ) &&
      produks.some(
        (produk) =>
          produk.harga_jual && produk.harga_jual === newHargaJualProduk
      )
    ) {
      setErrorInput("Produk sudah ada dalam daftar.");
    } else {
      updateProduk();
      onClose();
      AlertMessage("berhasil memperbarui", 310, "success");
    }
  };

  return (
    <div className="">
      <div className="border-b-[1px] border-gray-300">
        <div className="px-6 py-3 text-2xl font-semibold font-pt_Sans text-start text-purple-600">
          Edit Data
        </div>
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
          stok={stok}
        />
        <p className="text-center text-fnd text-sm">{msg}</p>

        <div className="px-6 py-4 space-x-2 text-base flex border-t-[1px] border-gray-300 justify-end ">
          <button
            className={`bg-colorOne text-purple-600 w-16 shadow-cus2 hover:shadow-cus2 hover:shadow-gray-500 shadow-gray-400  transition-all ease-in  hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md`}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditProduk;
