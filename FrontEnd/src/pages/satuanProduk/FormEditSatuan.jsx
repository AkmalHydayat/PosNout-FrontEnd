/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSatuans } from "../../utils/api";

/* eslint-disable react/prop-types */
const FormEditSatuan = ({
  isVisible,
  onClose,
  id,
  namaSatuan,
  isSearching,
  setSearchResults,
  searchResults,
  setSatuans,
}) => {
  if (!isVisible) return null;

  const [namaNewSatuan, setNamaNewSatuan] = useState(namaSatuan || "");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getSatuanById = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/satuan/${id}`);
        setNamaNewSatuan(response.data.satuan);
      } catch (error) {
        if (error.response) {
          console.error(error.response); // Tambahkan log untuk melihat kesalahan server
          setMsg(
            error.response.data.msg ||
              "Terjadi kesalahan saat mengambil data satuan."
          );
        } else {
          console.error(error); // Log kesalahan jika bukan dari server response
          setMsg("Terjadi kesalahan saat menghubungi server.");
        }
      }
    };
    getSatuanById();
  }, [id]);

  const updateSatuan = async () => {
    try {
      await axios.put(`http://localhost:3000/satuan/${id}`, {
        nama_satuan: namaNewSatuan,
      });
      navigate("/SatuanProduk");
      const updatedSatuans = await getSatuans(); // Panggil fungsi getSatuans untuk memperbarui data
      setSatuans(updatedSatuans);
      // Perbarui juga searchResults jika id ada dalam hasil pencarian
      if (isSearching) {
        const updatedSearchResults = searchResults.map((satuan) => {
          if (satuan.id === id) {
            return { ...satuan, nama_satuan: namaNewSatuan };
          }
          return satuan;
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
          updateSatuan();
          onClose();
        }}
      >
        <div className="px-6 py-4 space-y-2 text-start ">
          <label htmlFor="" className="text-gray-900 ">
            Satuan
          </label>
          <input
            type="text"
            className="w-full h-10 focus:outline-none bg-white border-[1px] border-gray-300 text-gray-900 rounded px-2 text-base"
            value={namaNewSatuan}
            onChange={(e) => setNamaNewSatuan(e.target.value.toLowerCase())}
            placeholder="inputkan satuan"
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

export default FormEditSatuan;
