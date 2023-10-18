/* eslint-disable react/prop-types */

import FormAddProduk from "./FormAddProduk";
import Modal from "../../components/ui/Modal";
import { useState } from "react";

const ButtonAddProduk = ({ produks, setProduks }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Modal
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        buttonLabel={
          <div className="text-base font-semibold font-titilium">Add</div>
        }
        modalContent={
          <FormAddProduk
            setProduks={setProduks}
            produks={produks}
            onClose={() => setShowModal(false)}
          />
        }
        className={`bg-purple-600 text-colorTwo hover:bg-purple-700 rounded hover:shadow-purple-700 group px-3 py-1 font-semibold text-md`}
      ></Modal>
    </div>
  );
};

export default ButtonAddProduk;
