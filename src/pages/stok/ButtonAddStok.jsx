/* eslint-disable react/prop-types */

import FormAddStok from "./FormAddStok";
import { useState } from "react";
import ModalAddStok from "./ModalAddStok";

const ButtonAddStok = ({ setStoks, produks, setProduks }) => {
  const [showModal, setShowModal] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [idSelect, setIdSelect] = useState("");
  const [namaSelect, setNamaSelect] = useState("");
  const getIdName = (id, nama) => {
    setIdSelect(id);
    setNamaSelect(nama);
  };
  return (
    <div>
      <ModalAddStok
        setProduks={setProduks}
        produks={produks}
        getIdName={getIdName}
        isHide={isHide}
        setIsHide={setIsHide}
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        buttonLabel={<div className="text-base font-semibold">Add</div>}
        modalContent={
          <FormAddStok
            setProduks={setProduks}
            getIdName={getIdName}
            idSelect={idSelect}
            namaSelect={namaSelect}
            isHide={isHide}
            setIsHide={setIsHide}
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            setStoks={setStoks}
          />
        }
        className={`bg-purple-600 text-white hover:bg-purple-700 rounded hover:shadow-purple-700 group px-3 py-1 font-semibold text-md`}
      ></ModalAddStok>
    </div>
  );
};

export default ButtonAddStok;
