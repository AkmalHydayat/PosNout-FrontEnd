/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getKategoris, getSatuans } from "../../utils/api";

const FormInputProduk = ({
  errorInput,
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
  emptyNamaProdukStyle,
  emptySatuanProdukStyle,
  emptyKategoriProdukStyle,
  emptyHargaBeliProdukStyle,
  emptyHargaJualProdukStyle,
  setIsNamaProdukEmpty,
  setIsSatuanProdukEmpty,
  setIsKategoriProdukEmpty,
  setIsHargaBeliProdukEmpty,
  setIsHargaJualProdukEmpty,
  stok,
}) => {
  console.log();
  const [kategoris, setKategoris] = useState([]);
  const [satuans, setSatuans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSatuans();

        setSatuans(data);
      } catch (error) {
        // Handle error jika diperlukan
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getKategoris();
        setKategoris(data);
      } catch (error) {
        // Handle error jika diperlukan
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-start text-base">
      {/* input nama produk */}
      <div>
        <div className="px-6 py-1 mt-2 ">
          <label
            htmlFor=""
            className={`font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900 `}
          >
            Produk
          </label>
          <input
            type="text"
            autoFocus
            className={`w-full h-10 font-pt_Sans focus:outline-none focus:bg-colorTwo dark:focus:bg-colorTwo dark:focus:text-colorDarkOne  hover:border-[1px] hover:border-purple-600 dark:focus:shadow-black/50 focus:scale-[1.01] bg-colorTwo dark:bg-colorDarkTwo  border-gray-300 focus:border-purple-600  transition-transform ease-in-out  font-medium border-[1px] text-gray-600 focus:text-colorDarkOne  rounded px-2 text-base placeholder:text-sm placeholder:font-normal dark:placeholder:text-colorTwo/50 dark:text-colorTwo placeholder:text-gray-600 ${emptyNamaProdukStyle}`}
            placeholder="Produk"
            value={newNamaProduk}
            onChange={(e) => {
              setNewNamaProduk(e.target.value.toLowerCase());
              setIsNamaProdukEmpty(false);
            }}
          />
        </div>
      </div>
      <div className="flex space-x-2">
        {/* input satuan */}
        <div className="w-1/2 ">
          <div className="ps-6 py-1 mt-2 ">
            <label
              htmlFor=""
              className={` font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900`}
            >
              Satuan
            </label>
            <select
              className={`${emptySatuanProdukStyle} w-full h-10 font-pt_Sans focus:outline-none   focus:bg-colorTwo  hover:border-[1px] hover:border-purple-600 dark:focus:shadow-black/50 focus:scale-[1.01] bg-colorTwo dark:bg-colorDarkTwo focus:text-colorDarkOne border-gray-300 focus:border-purple-600  transition-transform ease-in-out  font-medium border-[1px] text-gray-600 dark:text-colorTwo rounded px-2 text-[15px] placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 dark:placeholder:text-colorTwo/50`}
              value={newSatuanProduk}
              onChange={(e) => {
                setNewSatuanProduk(e.target.value.toLowerCase());
                setIsSatuanProdukEmpty(false);
              }}
            >
              <option value="" className="text-gray-600">
                --Pilih--
              </option>
              {satuans.map((satuan, index) => (
                <option value={satuan.nama_satuan} key={index}>
                  {satuan.nama_satuan}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* input kategori */}
        <div className="w-1/2 ">
          <div className="pe-6 py-1 mt-2 ">
            <label
              htmlFor=""
              className={`font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900`}
            >
              Kategori
            </label>
            <select
              className={`${emptyKategoriProdukStyle} w-full h-10 font-pt_Sans focus:outline-none focus:text-colorDarkOne focus:bg-colorTwo  hover:border-[1px] hover:border-purple-600 dark:focus:shadow-black/50 focus:scale-[1.01] bg-colorTwo dark:bg-colorDarkTwo  border-gray-300 focus:border-purple-600  transition-transform ease-in-out  font-medium border-[1px] text-gray-600 dark:text-colorTwo rounded px-2 text-[15px] placeholder:text-sm placeholder:font-normal placeholder:text-gray-600`}
              size={1}
              placeholder="pilih"
              value={newKategoriProduk}
              onChange={(e) => {
                setNewKategoriProduk(e.target.value.toLowerCase());
                setIsKategoriProdukEmpty(false);
              }}
            >
              <option value=" --Pilih--" className="text-gray-600">
                {" "}
                --Pilih--
              </option>
              {kategoris.map((kategori) => (
                <option
                  value={kategori.nama_kategori}
                  key={kategori.id}
                  className=""
                >
                  {kategori.nama_kategori}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        {/* input harga beli */}
        <div>
          <div className="ps-6 py-1 mt-2 ">
            <label
              htmlFor=""
              className={` font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900`}
            >
              Harga Beli
            </label>
            <input
              type="text"
              className={`${emptyHargaBeliProdukStyle} focus:text-colorDarkOne w-full h-10 font-pt_Sans focus:outline-none dark:focus:bg-colorTwo dark:focus:text-colorDarkOne focus:bg-colorTwo  hover:border-[1px] hover:border-purple-600 dark:focus:shadow-black/50 focus:scale-[1.01] bg-colorTwo dark:bg-colorDarkTwo  border-gray-300 focus:border-purple-600  transition-transform ease-in-out  font-medium border-[1px] text-gray-600 rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 dark:placeholder:text-colorTwo/50 dark:text-colorTwo`}
              placeholder="Harga Beli"
              value={newHargaBeliProduk}
              onChange={(e) => {
                const inputValue = e.target.value;
                const sanitizedValue = inputValue.replace(/[^0-9]/g, "");

                if (sanitizedValue.charAt(0) === "0") {
                  // Angka 0 berada di awal inputan, jadi kita menghapusnya
                  setNewHargaBeliProduk(sanitizedValue.slice(1));
                } else {
                  setNewHargaBeliProduk(sanitizedValue.toLowerCase());
                  setIsHargaBeliProdukEmpty(false);
                }
              }}
            />
          </div>
        </div>
        {/* input harga jual */}
        <div>
          <div className="pe-6 py-1 mt-2  ">
            <label
              htmlFor=""
              className={`font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900`}
            >
              Harga Jual
            </label>
            <input
              type="text"
              className={`${emptyHargaJualProdukStyle} focus:text-colorDarkOne w-full h-10 font-pt_Sans focus:outline-none dark:focus:bg-colorTwo dark:focus:text-colorDarkOne focus:bg-colorTwo  hover:border-[1px] hover:border-purple-600 dark:focus:shadow-black/50 focus:scale-[1.01] bg-colorTwo dark:bg-colorDarkTwo  border-gray-300 focus:border-purple-600  transition-transform ease-in-out  font-medium border-[1px] text-gray-600 rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 dark:placeholder:text-colorTwo/50 dark:text-colorTwo`}
              placeholder="Harga Jual"
              value={newHargaJualProduk}
              onChange={(e) => {
                const inputValue = e.target.value;
                const sanitizedValue = inputValue.replace(/[^0-9]/g, "");

                if (sanitizedValue.charAt(0) === "0") {
                  // Angka 0 berada di awal inputan, jadi kita menghapusnya
                  setNewHargaJualProduk(sanitizedValue.slice(1));
                } else {
                  setNewHargaJualProduk(sanitizedValue.toLowerCase());
                  setIsHargaJualProdukEmpty(false);
                }
              }}
            />
          </div>
        </div>
      </div>
      {/* stok */}
      <div>
        <div className="px-6 py-1 mt-2  flex flex-col">
          <label
            htmlFor=""
            className={`font-medium font-pt_Sans text-lg dark:text-colorTwo text-gray-900`}
          >
            Stok
          </label>
          <input
            type="text"
            className="w-[10%] text-center h-10 focus:outline-none font-semibold bg-gray-300 dark:bg-colorDarkOne/80 cursor-default border-gray-300 border-[1px] text-gray-900 dark:text-colorTwo rounded px-2 text-[15px] placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 mb-3"
            placeholder="Harga Jual"
            value={stok ? stok : 0}
            readOnly
          />
        </div>
        {errorInput && (
          <div className="text-fnd text-xs px-6 text-center mt-2">
            {errorInput}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInputProduk;
