/* eslint-disable react-hooks/rules-of-hooks */

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";

/* eslint-disable react/prop-types */
const FormAddStok = ({
  getIdName,
  tanggal,
  bulan,
  tahun,
  // addStok,
  onClose,
  isHide,
  setIsHide,
  idSelect,
  namaSelect,
}) => {
  // const [tanggal, setTanggal] = useState("");
  // const [id, setId] = useState("");
  const dateNow = tanggal + "/" + bulan + "/" + tahun;
  // const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [isBarcodeEmpty, setIsBarcodeEmpty] = useState(false);
  const [isJumlahEmpty, setIsJumlahEmpty] = useState(false);
  const emptyBarcodeStyle = isBarcodeEmpty ? "border-[1px] border-red-500" : "";
  const emptyJumlahStyle = isJumlahEmpty ? "border-[1px] border-red-500" : "";

  // Definisikan fungsi untuk menambah stok pada
  const tambahStok = async (barcodeProduk, jumlah, namaProduk) => {
    try {
      const response = await axios.post("http://localhost:3000/tambahStok", {
        barcodeProduk: barcodeProduk,
        nama_produk: namaProduk,
        jumlah: jumlah,
      });

      console.log(response.data.message); // Output pesan dari server
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
    }
  };

  // Panggil fungsi dengan barcodeProduk dan jumlah yang sesuai

  return (
    <div className={` `}>
      <div className="border-b-[1px] border-gray-300">
        <div className="px-6 py-3 text-2xl text-gray-900">Add Data</div>
      </div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (idSelect === "") {
            setIsBarcodeEmpty(true);
          } else if (jumlah === "") {
            setIsJumlahEmpty(true);
          } else {
            // addStok(idSelect, namaSelect, jumlah, dateNow);
            tambahStok(idSelect, jumlah, namaSelect);
            setJumlah("");
            onClose();
            getIdName("", "");
          }
        }}
      >
        <div className="space-y-2">
          <div className="px-6 mt-2">
            <label htmlFor="" className="text-gray-900 text-base">
              Tanggal
            </label>
            <input
              type="text"
              className="w-full h-10 focus:outline-none bg-gray-300 border-gray-300 border-[1px] text-gray-900 rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 cursor-default"
              placeholder=""
              value={`${tanggal}/${bulan}/${tahun}`}
              readOnly
            />
          </div>
          <div className="px-6   ">
            <label htmlFor="" className="text-gray-900 text-base">
              Barcode
            </label>
            <div className="flex w-full">
              <input
                type="text"
                className={`${emptyBarcodeStyle} w-full h-10 focus:outline-none bg-gray-300 border-gray-300 border-[1px] text-gray-900 rounded-s px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 cursor-default`}
                placeholder=""
                readOnly
                value={idSelect ? idSelect : "-"}
              />
              <div
                className="w-10 bg-purple-600  rounded-e flex justify-center items-center cursor-pointer"
                onClick={() => setIsHide(!isHide)}
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-white "
                />
              </div>
            </div>
          </div>
          <div className="px-6 ">
            <label htmlFor="" className="text-gray-900 text-base">
              Nama Produk
            </label>
            <input
              type="text"
              className="w-full h-10 focus:outline-none bg-gray-300 border-gray-300 border-[1px] text-gray-900 rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 cursor-default"
              placeholder=""
              readOnly
              value={namaSelect ? namaSelect : "-"}
            />
          </div>
          <div className="px-6 ">
            <label htmlFor="" className="text-gray-900 text-base">
              Jumlah
            </label>
            <input
              type="text"
              className={`${emptyJumlahStyle} w-full h-10 focus:outline-none bg-white border-gray-300 border-[1px] text-gray-900 rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 mb-4`}
              placeholder="Jumlah"
              value={jumlah}
              onChange={(e) => {
                setJumlah(e.target.value.toLowerCase());
              }}
            />
          </div>
        </div>

        <div className="px-6 py-4 border-t-[1px] border-gray-300 space-x-2 text-base flex justify-end ">
          <button
            type="submit"
            className="bg-purple-600 text-white font-semibold px-2 py-1 rounded  hover:bg-purple-700 "
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddStok;
