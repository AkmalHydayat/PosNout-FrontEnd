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
          <label htmlFor="" className="text-gray-900">
            Produk
          </label>
          <input
            type="text"
            autoFocus
            className={`w-full h-10 focus:outline-none bg-white border-gray-300 border-[1px] text-gray-900 rounded px-2 text-base font-medium placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 ${emptyNamaProdukStyle}
            }`}
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
            <label htmlFor="" className="text-gray-900">
              Satuan
            </label>
            <select
              className={`w-full cursor-pointer h-10 focus:outline-none bg-white border-gray-300 border-[1px] text-gray-900 rounded px-2 text-base font-medium placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 ${emptySatuanProdukStyle}
            }`}
              value={newSatuanProduk}
              onChange={(e) => {
                setNewSatuanProduk(e.target.value.toLowerCase());
                setIsSatuanProdukEmpty(false);
              }}
            >
              <option value="">--Pilih--</option>
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
            <label htmlFor="" className="text-gray-900">
              Kategori
            </label>
            <select
              className={`w-full h-10 cursor-pointer focus:outline-none bg-white border-gray-300 border-[1px] text-gray-900 rounded px-2 text-base font-medium placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 ${emptyKategoriProdukStyle}
            }`}
              size={1}
              placeholder="pilih"
              value={newKategoriProduk}
              onChange={(e) => {
                setNewKategoriProduk(e.target.value.toLowerCase());
                setIsKategoriProdukEmpty(false);
              }}
            >
              <option value="" className="">
                --Pilih--
              </option>
              {kategoris.map((kategori) => (
                <option value={kategori.nama_kategori} key={kategori.id}>
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
            <label htmlFor="" className="text-gray-900">
              Harga Beli
            </label>
            <input
              type="text"
              className={`w-full h-10 focus:outline-none bg-white border-gray-300 border-[1px] text-gray-900 rounded px-2 text-base font-medium placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 ${emptyHargaBeliProdukStyle}
            }`}
              placeholder="Harga Beli"
              value={newHargaBeliProduk}
              onChange={(e) => {
                setNewHargaBeliProduk(e.target.value.toLowerCase());
                setIsHargaBeliProdukEmpty(false);
              }}
            />
          </div>
        </div>
        {/* input harga jual */}
        <div>
          <div className="pe-6 py-1 mt-2  ">
            <label htmlFor="" className="text-gray-900">
              Harga Jual
            </label>
            <input
              type="text"
              className={`w-full h-10 focus:outline-none bg-white border-gray-300 border-[1px] text-gray-900 rounded px-2 text-base font-medium placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 ${emptyHargaJualProdukStyle}
            }`}
              placeholder="Harga Jual"
              value={newHargaJualProduk}
              onChange={(e) => {
                setNewHargaJualProduk(e.target.value.toLowerCase());
                setIsHargaJualProdukEmpty(false);
              }}
            />
          </div>
        </div>
      </div>
      {/* stok */}
      <div>
        <div className="px-6 py-1 mt-2  flex flex-col">
          <label htmlFor="" className="text-gray-900">
            Stok
          </label>
          <input
            type="text"
            className="w-1/5 h-10 focus:outline-none font-semibold bg-gray-300 cursor-default border-gray-300 border-[1px] text-gray-900 rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 mb-3"
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
