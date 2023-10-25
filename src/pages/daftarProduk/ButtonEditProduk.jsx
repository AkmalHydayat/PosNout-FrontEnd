/* eslint-disable react/prop-types */

import { useState } from "react";
import FormEditProduk from "./FormEditProduk";
import Modal from "../../components/ui/Modal";
import { HiOutlinePencilAlt } from "react-icons/hi";

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
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Modal
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        className={`bg-sky-700 text-colorTwo border-[1px] p-1 border-sky-700  transition-colors ease-in hover:scale-95 hover:bg-sky-800 rounded  group font-semibold text-md`}
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
          />
        }
      ></Modal>
    </div>
  );
};

export default ButtonEditProduk;
