/* eslint-disable react/prop-types */

import { useState } from "react";
import FormEditKategori from "./FormEditKategori";
import { HiOutlinePencilAlt } from "react-icons/hi";
import ModalEditKategori from "./ModalEditKategori";

const ButtonEditKategori = ({
  id,
  kategoris,
  namaKategori,
  isSearching,
  setSearchResults,
  searchResults,
  setKategoris,
  AlertMessage,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [errorInput, setErrorInput] = useState("");
  const [namaNewKategori, setNamaNewKategori] = useState("");
  return (
    <div>
      <ModalEditKategori
        isVisible={showModal}
        setErrorInput={setErrorInput}
        setNamaNewKategori={setNamaNewKategori}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        className={`bg-sky-700 text-colorTwo border-[1px] p-1 border-sky-700  transition-colors ease-in hover:scale-95 hover:bg-sky-800 rounded  group font-semibold text-md`}
        buttonLabel={
          <div className="flex items-center ">
            <HiOutlinePencilAlt className="text-lg " />
          </div>
        }
        modalContent={
          <FormEditKategori
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            namaKategori={namaKategori}
            id={id}
            kategoris={kategoris}
            isSearching={isSearching}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            setKategoris={setKategoris}
            AlertMessage={AlertMessage}
            setErrorInput={setErrorInput}
            setNamaNewKategori={setNamaNewKategori}
            namaNewKategori={namaNewKategori}
            errorInput={errorInput}
          />
        }
      />
    </div>
  );
};

export default ButtonEditKategori;
