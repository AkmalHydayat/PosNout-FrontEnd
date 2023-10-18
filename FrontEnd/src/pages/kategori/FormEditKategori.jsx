/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getKategoris } from "../../utils/api";

/* eslint-disable react/prop-types */
const FormEditKategori = ({
  isVisible,
  onClose,
  id,
  namaKategori,
  isSearching,
  setSearchResults,
  searchResults,
  setKategoris,
}) => {
  if (!isVisible) return null;

  const [namaNewKategori, setNamaNewKategori] = useState(namaKategori || "");
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
      await axios.put(`http://localhost:3000/kategori/${id}`, {
        nama_kategori: namaNewKategori,
      });
      navigate("/KategoriProduk");
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

  return (
    <div className="">
      <div className="border-b-[1px] border-gray-300">
        <div className="px-6 py-3 text-2xl text-gray-900">Edit Data</div>
      </div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          updateKategori();
          onClose();
        }}
      >
        <div className="px-6 py-4 space-y-2 text-start ">
          <label htmlFor="" className="text-gray-900 ">
            Kategori
          </label>
          <input
            type="text"
            className="w-full h-10 focus:outline-none bg-white border-gray-300 border-[1px] text-gray-900 rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600"
            value={namaNewKategori}
            placeholder="kategori"
            onChange={(e) => setNamaNewKategori(e.target.value.toLowerCase())}
            autoFocus
          />
          <p className="text-center text-fnd text-sm">{msg}</p>
        </div>
        <div className="px-6 pb-4 space-x-2 text-base flex justify-end">
          <button
            type="submit"
            className="bg-purple-600 text-white font-semibold px-2 py-1 rounded  hover:bg-purple-700"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditKategori;
