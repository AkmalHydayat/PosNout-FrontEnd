/* eslint-disable react/prop-types */

import FormAddSatuan from "./FormAddSatuan";
import Modal from "../../components/ui/Modal";
import { useState } from "react";

const ButtonAddSatuan = ({ satuans, setSatuans }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Modal
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        className={`bg-purple-600 text-white hover:bg-purple-700 rounded hover:shadow-purple-700 group px-3 py-1 font-semibold text-md`}
        buttonLabel={<div className="text-base font-semibold">Add</div>}
        modalContent={
          <FormAddSatuan
            satuans={satuans}
            setSatuans={setSatuans}
            isVisible={showModal}
            onClose={() => setShowModal(false)}
          />
        }
      ></Modal>
    </div>
  );
};

export default ButtonAddSatuan;
