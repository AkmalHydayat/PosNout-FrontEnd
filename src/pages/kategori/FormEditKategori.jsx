/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getKategoris } from "../../utils/api";

const FormEditKategori = ({
  onClose,
  id,
  namaKategori,
  isSearching,
  setSearchResults,
  searchResults,
  AlertMessage,
  setKategoris,
  setErrorInput,
  namaNewKategori,
  setNamaNewKategori,
  errorInput,
  kategoris,
}) => {
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getKategoriById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/kategori/${id}`
        );
        setNamaNewKategori(response.data.nama_kategori);
      } catch (error) {
        if (error.response) {
          console.error(error.response); // Tambahkan log untuk melihat kesalahan server
          setMsg(
            error.response.data.msg ||
              "Terjadi kesalahan saat mengambil data kategori."
          );
        } else {
          console.error(error); // Log kesalahan jika bukan dari server response
          setMsg("Terjadi kesalahan saat menghubungi server.");
        }
      }
    };
    getKategoriById();
  }, [id]);

  const updateKategori = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/kategori/${id}`, {
        nama_kategori: namaNewKategori,
      });
      navigate("/KategoriProduk");
      AlertMessage(response.data.msg, 380, "success");
      const updatedKategoris = await getKategoris(); // Panggil fungsi getKategoris untuk memperbarui data
      setKategoris(updatedKategoris);
      // Perbarui juga searchResults jika id ada dalam hasil pencarian
      if (isSearching) {
        const updatedSearchResults = searchResults.map((kategori) => {
          if (kategori.id === id) {
            return { ...kategori, nama_kategori: namaNewKategori };
          }
          return kategori;
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
    // console.log(namaNewKategori);
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
      updateKategori();
      onClose();
      setNamaNewKategori("");
      setErrorInput("");
    }
  };

  return (
    <div className="">
      <div className="border-b-[1px] border-gray-300">
        <div className="px-6 py-3 text-2xl font-pt_Sans font-semibold text-purple-600">
          Edit Data
        </div>
      </div>
      <form action="" onSubmit={setSubmit}>
        <div className="px-6 py-4 space-y-2 text-start ">
          <label
            htmlFor=""
            className="font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900"
          >
            Kategori
          </label>
          <input
            type="text"
            className="w-full h-10 font-pt_Sans focus:outline-none   focus:bg-colorTwo  hover:border-[1px] hover:border-purple-600 dark:focus:shadow-black/50 focus:scale-[1.01] bg-colorTwo dark:focus:bg-colorTwo dark:bg-colorDarkTwo dark:text-colorTwo/80 focus:dark:text-colorDarkOne border-gray-300 focus:border-purple-600  transition-transform ease-in  font-medium border-[1px] rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600"
            value={namaNewKategori ? namaNewKategori : namaKategori}
            placeholder={namaKategori}
            onChange={(e) => setNamaNewKategori(e.target.value.toLowerCase())}
            autoFocus
          />
          {errorInput && (
            <div className="text-fnd text-xs -mt-3 px-2">{errorInput}</div>
          )}
          <p className="text-center text-fnd text-sm">{msg}</p>
        </div>
        <div className="px-6 pb-4 space-x-2 text-base flex justify-end">
          <button
            type="submit"
            className={`bg-colorTwo dark:border-[1px]  dark:bg-colorDarkTwo dark:shadow-black  dark:text-colorTwo  dark:hover:text-purple-600 dark:hover:shadow-sm2 dark:hover:shadow-black hover:dark:shadow-purple-600 dark:shadow-cus2 cursor-pointer shadow-sm2 text-purple-600  dark:border-purple-600 hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover: hover:text-white  hover:bg-purple-700 rounded  group px-4 py-1  `}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditKategori;
