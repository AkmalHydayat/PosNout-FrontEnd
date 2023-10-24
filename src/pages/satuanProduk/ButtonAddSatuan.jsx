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
        className={`bg-colorTwo text-purple-600 shadow-sm2 border-[1px] border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover:shadow-sm2 hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md`}
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
