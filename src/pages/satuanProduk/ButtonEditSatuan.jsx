/* eslint-disable react/prop-types */

import { useState } from "react";
import FormEditSatuan from "./FormEditSatuan";
import { HiOutlinePencilAlt } from "react-icons/hi";
import ModalEditSatuan from "./ModalEditSatuan";

const ButtonEditSatuan = ({
  id,
  namaSatuan,
  isSearching,
  setSearchResults,
  searchResults,
  setSatuans,
  AlertMessage,
  satuans,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [errorInput, setErrorInput] = useState("");
  const [namaNewSatuan, setNamaNewSatuan] = useState("");

  return (
    <div>
      <ModalEditSatuan
        isVisible={showModal}
        setErrorInput={setErrorInput}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        setNamaNewSatuan={setNamaNewSatuan}
        className={`bg-sky-700 text-colorTwo border-[1px]  border-sky-700 p-1 transition-colors ease-in hover:scale-95 hover:bg-sky-800 rounded  group font-semibold text-md`}
        buttonLabel={
          <div className="flex items-center ">
            <HiOutlinePencilAlt className="text-lg " />
          </div>
        }
        modalContent={
          <FormEditSatuan
            onClose={() => setShowModal(false)}
            namaSatuan={namaSatuan}
            errorInput={errorInput}
            id={id}
            isSearching={isSearching}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            setSatuans={setSatuans}
            AlertMessage={AlertMessage}
            setErrorInput={setErrorInput}
            namaNewSatuan={namaNewSatuan}
            setNamaNewSatuan={setNamaNewSatuan}
            satuans={satuans}
          />
        }
      ></ModalEditSatuan>
    </div>
  );
};

export default ButtonEditSatuan;
