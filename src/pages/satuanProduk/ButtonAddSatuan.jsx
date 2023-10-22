/* eslint-disable react/prop-types */

import FormAddSatuan from "./FormAddSatuan";
import Modal from "../../components/ui/Modal";
import { useState } from "react";

const ButtonAddSatuan = ({ satuans, setSatuans,AlertMessage }) => {
  const [showModal, setShowModal] = useState(false);
  const [errorInput, setErrorInput] = useState("");
  const [namaNewSatuan, setNamaNewSatuan] = useState("");
  return (
    <div>
      <Modal
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        setErrorInput={setErrorInput}
        setItem={setNamaNewSatuan}
        className={`bg-purple-600 text-white hover:bg-purple-700 rounded hover:shadow-purple-700 group px-3 py-1 font-semibold text-md`}
        buttonLabel={<div className="text-base font-semibold">Add</div>}
        modalContent={
          <FormAddSatuan
            satuans={satuans}
            setSatuans={setSatuans}
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            AlertMessage={AlertMessage}
            namaNewSatuan={namaNewSatuan}
            setNamaNewSatuan={setNamaNewSatuan}
            errorInput={errorInput}
            setErrorInput={setErrorInput}
            
          />
        }
      ></Modal>
    </div>
  );
};

export default ButtonAddSatuan;
