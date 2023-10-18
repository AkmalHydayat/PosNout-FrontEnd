/* eslint-disable react/prop-types */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getKategoris } from "../../utils/api";

const FormAddKategori = ({ onClose, kategoris, setKategoris }) => {
  const [errorInput, setErrorInput] = useState("");
  const [namaNewKategori, setNamaNewKategori] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const newKategori = async () => {
    try {
      await axios.post("http://localhost:3000/kategori", {
        nama_kategori: namaNewKategori,
      });
      const updatedKategoris = await getKategoris(); // Mengambil kategori terbaru
      setKategoris(updatedKategoris); // Memperbarui state kategoris di luar komponen
      navigate("/KategoriProduk");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const setSubmit = (e) => {
    e.preventDefault();
    if (namaNewKategori.trim() === "") {
      setErrorInput("Input tidak boleh kosong.");
    } else if (
      kategoris.some(
        (kategori) =>
          kategori.nama_kategori.toLowerCase() === namaNewKategori.toLowerCase()
      )
    ) {
      setErrorInput("Kategori sudah ada dalam daftar.");
    } else {
      newKategori();
      setNamaNewKategori("");
      setErrorInput("");
      onClose();
    }
  };

  return (
    <div className="">
      <div className="border-b-[1px] border-gray-300">
        <div className="px-6 py-3 text-2xl text-gray-900">Add Data</div>
      </div>
      <form onSubmit={setSubmit}>
        <div className="px-6 py-4 space-y-2">
          <label htmlFor="" className="text-gray-900">
            Kategori
          </label>
          <input
            type="text"
            autoFocus
            className="w-full h-10 focus:outline-none bg-white border-gray-300 border-[1px] text-gray-900 rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600"
            placeholder="Makanan, Minuman, Snack, etc"
            value={namaNewKategori}
            onChange={(e) => setNamaNewKategori(e.target.value.toLowerCase())}
          />
        </div>
        {errorInput && (
          <div className="text-fnd text-xs -mt-3 px-6">{errorInput}</div>
        )}
        <p className="text-center text-fnd text-sm">{msg}</p>
        <div className="px-6 pb-4 space-x-2 text-base flex justify-end">
          <button
            className="bg-purple-600 text-white font-semibold px-2 py-1 rounded hover:bg-purple-700"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddKategori;
