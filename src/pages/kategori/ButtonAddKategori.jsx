/* eslint-disable react/prop-types */
import FormAddKategori from "./FormAddKategori";
import Modal from "../../components/ui/Modal";
import { useState } from "react";

const ButtonAddKategori = ({ kategoris, setKategoris, AlertMessage }) => {
  const [showModal, setShowModal] = useState(false);
  const [errorInput, setErrorInput] = useState("");
  const [namaNewKategori, setNamaNewKategori] = useState("");
  return (
    <div>
      <Modal
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        setItem={setNamaNewKategori}
        setErrorInput={setErrorInput}
        buttonLabel={
          <div className="text-base font-semibold font-titilium">Add</div>
        }
        className={`bg-purple-600 text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md`}
        modalContent={
          <FormAddKategori
            AlertMessage={AlertMessage}
            setKategoris={setKategoris}
            kategoris={kategoris}
            onClose={() => setShowModal(false)}
            errorInput={errorInput}
            setErrorInput={setErrorInput}
            namaNewKategori={namaNewKategori}
            setNamaNewKategori={setNamaNewKategori}
          />
        }
      ></Modal>
    </div>
  );
};

export default ButtonAddKategori;
