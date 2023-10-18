/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "../../components/ui/Modal";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteConfirmProduk from "./DeleteConfirmProduk";

const ButtonDeleteSatuan = ({
  id,
  itemToDelete,
  setProduks,
  isSearching,
  setSearchResults,
  searchResults,
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
            <FontAwesomeIcon icon={faTrash} />
          </div>
        }
        modalContent={
          <DeleteConfirmProduk
            setProduks={setProduks}
            isSearching={isSearching}
            setSearchResults={setSearchResults}
            searchResults={searchResults}
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            itemToDelete={itemToDelete}
            id={id}
            list={"produk"}
          />
        }
        className={`bg-red-600 text-white hover:bg-red-700 rounded group px-3 py-1 font-semibold text-base`}
      ></Modal>
    </div>
  );
};

export default ButtonDeleteSatuan;
