/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "../../components/ui/Modal";
import DeleteConfirm from "../../components/DeleteConfirm";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ButtonDeleteKategori = ({ deleteData, itemToDelete, id }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Modal
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        buttonLabel={
          <div className="flex items-center ">
            <FontAwesomeIcon className="text-thrd me-1" icon={faTrash} />
            <div className="text-white group-hover:text-thrd ">Delete</div>
          </div>
        }
        modalContent={
          <DeleteConfirm
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            deleteData={deleteData}
            itemToDelete={itemToDelete}
            id={id}
          />
        }
        className={`px-3 py-1 font-semibold text-md`}
      ></Modal>
    </div>
  );
};

export default ButtonDeleteKategori;
