/* eslint-disable react/prop-types */

import FormAddProduk from "./FormAddProduk";
import { useState } from "react";
import ModalAddProduk from "./ModalAddProduk";
import { FiPlusCircle } from "react-icons/fi";

const ButtonAddProduk = ({ produks, setProduks, AlertMessage }) => {
  const [showModal, setShowModal] = useState(false);
  const [newNamaProduk, setNewNamaProduk] = useState("");
  const [newSatuanProduk, setNewSatuanProduk] = useState("");
  const [newKategoriProduk, setNewKategoriProduk] = useState("");
  const [newHargaBeliProduk, setNewHargaBeliProduk] = useState("");
  const [newHargaJualProduk, setNewHargaJualProduk] = useState("");
  const [errorInput, setErrorInput] = useState("");
  const [isNamaProdukEmpty, setIsNamaProdukEmpty] = useState(false);
  const [isSatuanProdukEmpty, setIsSatuanProdukEmpty] = useState(false);
  const [isKategoriProdukEmpty, setIsKategoriProdukEmpty] = useState(false);
  const [isHargaBeliProdukEmpty, setIsHargaBeliProdukEmpty] = useState(false);
  const [isHargaJualProdukEmpty, setIsHargaJualProdukEmpty] = useState(false);

  const emptyNamaProdukStyle = isNamaProdukEmpty
    ? "border-[1px] border-red-500"
    : "";
  const emptySatuanProdukStyle = isSatuanProdukEmpty
    ? "border-[1px] border-red-500"
    : "";
  const emptyKategoriProdukStyle = isKategoriProdukEmpty
    ? "border-[1px] border-red-500"
    : "";
  const emptyHargaBeliProdukStyle = isHargaBeliProdukEmpty
    ? "border-[1px] border-red-500"
    : "";
  const emptyHargaJualProdukStyle = isHargaJualProdukEmpty
    ? "border-[1px] border-red-500"
    : "";
  return (
    <div>
      <ModalAddProduk
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        setNewNamaProduk={setNewNamaProduk}
        setNewSatuanProduk={setNewSatuanProduk}
        setNewKategoriProduk={setNewKategoriProduk}
        setNewHargaBeliProduk={setNewHargaBeliProduk}
        setNewHargaJualProduk={setNewHargaJualProduk}
        setIsNamaProdukEmpty={setIsNamaProdukEmpty}
        setIsSatuanProdukEmpty={setIsSatuanProdukEmpty}
        setIsKategoriProdukEmpty={setIsKategoriProdukEmpty}
        setIsHargaBeliProdukEmpty={setIsHargaBeliProdukEmpty}
        setIsHargaJualProdukEmpty={setIsHargaJualProdukEmpty}
        setErrorInput={setErrorInput}
        buttonLabel={
          <div className="flex items-center space-x-2">
            <FiPlusCircle className="text-lg" />
            <div className="text-base font-semibold font-pt_Sans">Add</div>
          </div>
        }
        className={`bg-colorTwo text-purple-600 shadow-sm2 border-[1px] border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover:shadow-sm2 hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md`}
        modalContent={
          <FormAddProduk
            setProduks={setProduks}
            produks={produks}
            onClose={() => setShowModal(false)}
            AlertMessage={AlertMessage}
            newNamaProduk={newNamaProduk}
            newSatuanProduk={newSatuanProduk}
            newKategoriProduk={newKategoriProduk}
            newHargaBeliProduk={newHargaBeliProduk}
            newHargaJualProduk={newHargaJualProduk}
            setNewNamaProduk={setNewNamaProduk}
            setNewSatuanProduk={setNewSatuanProduk}
            setNewKategoriProduk={setNewKategoriProduk}
            setNewHargaBeliProduk={setNewHargaBeliProduk}
            setNewHargaJualProduk={setNewHargaJualProduk}
            setIsNamaProdukEmpty={setIsNamaProdukEmpty}
            setIsSatuanProdukEmpty={setIsSatuanProdukEmpty}
            setIsKategoriProdukEmpty={setIsKategoriProdukEmpty}
            setIsHargaBeliProdukEmpty={setIsHargaBeliProdukEmpty}
            setIsHargaJualProdukEmpty={setIsHargaJualProdukEmpty}
            emptyNamaProdukStyle={emptyNamaProdukStyle}
            emptySatuanProdukStyle={emptySatuanProdukStyle}
            emptyKategoriProdukStyle={emptyKategoriProdukStyle}
            emptyHargaBeliProdukStyle={emptyHargaBeliProdukStyle}
            emptyHargaJualProdukStyle={emptyHargaJualProdukStyle}
            errorInput={errorInput}
            setErrorInput={setErrorInput}
          />
        }
      ></ModalAddProduk>
    </div>
  );
};

export default ButtonAddProduk;
