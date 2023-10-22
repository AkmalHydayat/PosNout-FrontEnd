/* eslint-disable react/prop-types */

import { useState } from "react";
import FormEditProduk from "./FormEditProduk";
import Modal from "../../components/ui/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
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
        buttonLabel={
          <div className="flex items-center ">
            <FontAwesomeIcon className="" icon={faPenToSquare} />
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
        className={`text-white bg-sky-700 hover:bg-sky-800 rounded group px-3 py-1 font-semibold text-base`}
      ></Modal>
    </div>
  );
};

export default ButtonEditProduk;
