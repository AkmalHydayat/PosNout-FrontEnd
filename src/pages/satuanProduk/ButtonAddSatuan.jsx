/* eslint-disable react/prop-types */

import FormAddSatuan from "./FormAddSatuan";
import Modal from "../../components/ui/Modal";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

const ButtonAddSatuan = ({ satuans, setSatuans, AlertMessage }) => {
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
        buttonLabel={
          <div className="flex items-center space-x-2">
            <FiPlusCircle className="text-lg" />
            <div className="text-base font-semibold font-pt_Sans">Add</div>
          </div>
        }
        className={`bg-purple-600 text-colorTwo shadow-cus2 hover:shadow-sm2 hover:shadow-gray-400 shadow-gray-400  transition-all ease-in  hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md`}
        modalContent={
          <FormAddSatuan
            AlertMessage={AlertMessage}
            setSatuans={setSatuans}
            satuans={satuans}
            onClose={() => setShowModal(false)}
            errorInput={errorInput}
            setErrorInput={setErrorInput}
            namaNewSatuan={namaNewSatuan}
            setNamaNewSatuan={setNamaNewSatuan}
          />
        }
      ></Modal>
    </div>
  );
};

export default ButtonAddSatuan;
