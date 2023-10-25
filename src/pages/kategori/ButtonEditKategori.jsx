/* eslint-disable react/prop-types */

import { useState } from "react";
import FormEditKategori from "./FormEditKategori";
import Modal from "../../components/ui/Modal";
import { HiOutlinePencilAlt } from "react-icons/hi";

const ButtonEditKategori = ({
  id,
  namaKategori,
  isSearching,
  setSearchResults,
  searchResults,
  setKategoris,
  AlertMessage,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Modal
        isVisible={showModal}
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
            isSearching={isSearching}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            setKategoris={setKategoris}
            AlertMessage={AlertMessage}
          />
        }
      />
    </div>
  );
};

export default ButtonEditKategori;
