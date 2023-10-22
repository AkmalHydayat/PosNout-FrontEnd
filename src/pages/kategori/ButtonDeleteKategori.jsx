/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "../../components/ui/Modal";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteConfirmKategori from "./DeleteConfirmKategori";

const ButtonDeleteKategori = ({
  setKategoris,
  id,
  namaKategori,
  isSearching,
  setSearchResults,
  searchResults,
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
          <div className="flex items-center text-white">
            <FontAwesomeIcon className="" icon={faTrash} />
          </div>
        }
        className={`bg-red-600 text-white hover:bg-red-700 rounded group px-3 py-1 font-semibold text-base`}
        modalContent={
          <DeleteConfirmKategori
            setKategoris={setKategoris}
            namaKategori={namaKategori}
            isSearching={isSearching}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            id={id}
            list={"kategori"}
            AlertMessage={AlertMessage}
          />
        }
      ></Modal>
    </div>
  );
};

export default ButtonDeleteKategori;
