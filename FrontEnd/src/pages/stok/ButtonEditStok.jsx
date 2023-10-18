/* eslint-disable react/prop-types */

import { useState } from "react";
import FormEditStok from "./FormEditStok";
import Modal from "../../components/ui/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const ButtonEditKategori = ({ itemToEdit, editStok, id }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Modal
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        buttonLabel={
          <div className="flex items-center ">
            <FontAwesomeIcon className="text-thrd me-1" icon={faPenToSquare} />
            <div className="text-white group-hover:text-thrd ">Edit</div>
          </div>
        }
        modalContent={
          <FormEditStok
            isVisible={showModal}
            itemToEdit={itemToEdit}
            editStok={editStok}
            onClose={() => setShowModal(false)}
            id={id}
          />
        }
        className={`px-3 py-1 font-semibold text-md`}
      ></Modal>
    </div>
  );
};

export default ButtonEditKategori;
