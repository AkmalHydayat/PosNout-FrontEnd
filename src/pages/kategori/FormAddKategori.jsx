/* eslint-disable react/prop-types */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getKategoris } from "../../utils/api";

const FormAddKategori = ({
  onClose,
  kategoris,
  setKategoris,
  AlertMessage,
  errorInput,
  setErrorInput,
  namaNewKategori,
  setNamaNewKategori,
}) => {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const newKategori = async () => {
    try {
      const response = await axios.post("http://localhost:3000/kategori", {
        nama_kategori: namaNewKategori,
      });
      const updatedKategoris = await getKategoris(); // Mengambil kategori terbaru
      setKategoris(updatedKategoris); // Memperbarui state kategoris di luar komponen
      navigate("/KategoriProduk");
      AlertMessage(response.data.msg, 350, "success");
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
        <div className="px-6 py-3 text-2xl font-pt_Sans font-semibold text-purple-600">
          Add Data
        </div>
      </div>
      <form onSubmit={setSubmit} className="">
        <div className="px-6 py-4 space-y-2">
          <label
            htmlFor=""
            className="font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900"
          >
            Kategori
          </label>
          <input
            type="text"
            autoFocus
            className="w-full h-10 font-pt_Sans focus:outline-none   focus:bg-colorTwo  hover:border-[1px] hover:border-purple-600 dark:focus:shadow-black/50 focus:scale-[1.01] bg-colorTwo dark:focus:bg-colorTwo dark:bg-colorDarkTwo dark:text-colorTwo/80 focus:dark:text-colorDarkOne border-gray-300 focus:border-purple-600  transition-transform ease-in  font-medium border-[1px]  rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600"
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
            className={`bg-colorTwo dark:border-[1px]  dark:bg-colorDarkTwo dark:shadow-black  dark:text-colorTwo  dark:hover:text-purple-600 dark:hover:shadow-sm2 dark:hover:shadow-black hover:dark:shadow-purple-600 dark:shadow-cus2 cursor-pointer shadow-sm2 text-purple-600  dark:border-purple-600 hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover: hover:text-white  hover:bg-purple-700 rounded  group px-4 py-1  `}
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
