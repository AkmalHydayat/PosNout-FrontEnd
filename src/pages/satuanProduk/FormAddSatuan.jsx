/* eslint-disable react-hooks/rules-of-hooks */

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSatuans } from "../../utils/api";

/* eslint-disable react/prop-types */
const FormAddSatuan = ({
  onClose,
  satuans,
  setSatuans,
  AlertMessage,
  errorInput,
  setErrorInput,
  namaNewSatuan,
  setNamaNewSatuan,
}) => {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const newSatuan = async () => {
    try {
      await axios.post("http://localhost:3000/satuan", {
        nama_satuan: namaNewSatuan,
      });
      const updatedSatuans = await getSatuans(); // Mengambil kategori terbaru
      setSatuans(updatedSatuans); // Memperbarui state kategoris di luar komponen
      navigate("/SatuanProduk");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const setSubmit = (e) => {
    e.preventDefault();
    if (namaNewSatuan.trim() === "") {
      setErrorInput("Input tidak boleh kosong.");
    } else if (
      satuans.some(
        (satuan) =>
          satuan.nama_satuan.toLowerCase() === namaNewSatuan.toLowerCase()
      )
    ) {
      setErrorInput("Kategori sudah ada dalam daftar.");
    } else {
      newSatuan();
      setNamaNewSatuan("");
      setErrorInput("");
      onClose();
      AlertMessage("berhasil menambahkan", 310, "success");
    }
  };
  return (
    <div className="">
      <div className="border-b-[1px] border-gray-300">
        <div className="px-6 py-3 text-2xl font-pt_Sans font-semibold text-purple-600">
          Add Data
        </div>
      </div>
      <form action="" onSubmit={setSubmit}>
        <div className="px-6 py-4 space-y-2 ">
          <label htmlFor="" className=" font-medium text-lg text-gray-900">
            Satuan
          </label>
          <input
            type="text"
            autoFocus
            className="w-full h-10 font-pt_Sans focus:outline-none  focus:shadow-sm2 focus:bg-colorTwo focus:shadow-gray-300 bg-colorOne ease-in border-gray-300 focus:border-none  transition-all  font-medium border-[1px] text-gray-900 rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600"
            placeholder="Pcs, Box, Lusin, Dus, etc"
            value={namaNewSatuan}
            onChange={(e) => {
              setNamaNewSatuan(e.target.value.toLowerCase());
            }}
          />
        </div>
        {errorInput && (
          <div className="text-fnd text-xs -mt-3 px-6">{errorInput}</div>
        )}
        <p className="text-center text-fnd text-sm">{msg}</p>
        <div className="px-6 pb-4 space-x-2 text-base flex justify-end ">
          <button
            className={`bg-colorTwo text-purple-600 w-16 shadow-cus2 hover:shadow-cus2 hover:shadow-gray-500 shadow-gray-400  transition-all ease-in  hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md`}
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddSatuan;
