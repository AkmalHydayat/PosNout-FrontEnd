/* eslint-disable react/prop-types */

import { useState } from "react";
import FormEditProduk from "./FormEditProduk";
import { HiOutlinePencilAlt } from "react-icons/hi";
import ModalEditProduk from "./ModalEditProduk";

const ButtonEditProduk = ({
  editNama,
  editSatuan,
  editKategori,
  editHargaBeli,
  editHargaJual,
  editProduk,
  isSearching,
  setSearchResults,
  searchResults,
  setProduks,
  id,
  produks,
  stok,
  AlertMessage,
}) => {
  const [errorInput, setErrorInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newNamaProduk, setNewNamaProduk] = useState("");
  const [newSatuanProduk, setNewSatuanProduk] = useState("");
  const [newKategoriProduk, setNewKategoriProduk] = useState("");
  const [newHargaBeliProduk, setNewHargaBeliProduk] = useState("");
  const [newHargaJualProduk, setNewHargaJualProduk] = useState("");
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
      <ModalEditProduk
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        setErrorInput={setErrorInput}
        setIsNamaProdukEmpty={setIsNamaProdukEmpty}
        setIsSatuanProdukEmpty={setIsSatuanProdukEmpty}
        setIsKategoriProdukEmpty={setIsKategoriProdukEmpty}
        setIsHargaBeliProdukEmpty={setIsHargaBeliProdukEmpty}
        setIsHargaJualProdukEmpty={setIsHargaJualProdukEmpty}
        className={`bg-sky-700 font-pt_Sans text-colorTwo p-1 transition-all ease-in  hover:scale-95  hover:bg-sky-800  rounded  group font-semibold text-md`}
        buttonLabel={
          <div className="flex items-center ">
            <HiOutlinePencilAlt className="text-lg " />
          </div>
        }
        modalContent={
          <FormEditProduk
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            editNama={editNama}
            editSatuan={editSatuan}
            editKategori={editKategori}
            editHargaBeli={editHargaBeli}
            editHargaJual={editHargaJual}
            editProduk={editProduk}
            id={id}
            isSearching={isSearching}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            setProduks={setProduks}
            produks={produks}
            stok={stok}
            AlertMessage={AlertMessage}
            setIsNamaProdukEmpty={setIsNamaProdukEmpty}
            setIsSatuanProdukEmpty={setIsSatuanProdukEmpty}
            setIsKategoriProdukEmpty={setIsKategoriProdukEmpty}
            setIsHargaBeliProdukEmpty={setIsHargaBeliProdukEmpty}
            setIsHargaJualProdukEmpty={setIsHargaJualProdukEmpty}
            newNamaProduk={newNamaProduk}
            newSatuanProduk={newSatuanProduk}
            newKategoriProduk={newKategoriProduk}
            newHargaBeliProduk={newHargaBeliProduk}
            newHargaJualProduk={newHargaJualProduk}
            setNewSatuanProduk={setNewSatuanProduk}
            setNewKategoriProduk={setNewKategoriProduk}
            setNewNamaProduk={setNewNamaProduk}
            setNewHargaBeliProduk={setNewHargaBeliProduk}
            setNewHargaJualProduk={setNewHargaJualProduk}
            isNamaProdukEmpty={isNamaProdukEmpty}
            isSatuanProdukEmpty={isSatuanProdukEmpty}
            isKategoriProdukEmpty={isKategoriProdukEmpty}
            isHargaBeliProdukEmpty={isHargaBeliProdukEmpty}
            isHargaJualProdukEmpty={isHargaJualProdukEmpty}
            emptyNamaProdukStyle={emptyNamaProdukStyle}
            emptySatuanProdukStyle={emptySatuanProdukStyle}
            emptyKategoriProdukStyle={emptyKategoriProdukStyle}
            emptyHargaBeliProdukStyle={emptyHargaBeliProdukStyle}
            emptyHargaJualProdukStyle={emptyHargaJualProdukStyle}
            setErrorInput={setErrorInput}
            errorInput={errorInput}
          />
        }
      ></ModalEditProduk>
    </div>
  );
};

export default ButtonEditProduk;
