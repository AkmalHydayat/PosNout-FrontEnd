/* eslint-disable react/prop-types */

import { useState } from "react";
import FormEditKategori from "./FormEditKategori";
import Modal from "../../components/ui/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const ButtonEditKategori = ({
  id,
  namaKategori,
  isSearching,
  setSearchResults,
  searchResults,
  setKategoris,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Modal
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        className={`text-white bg-sky-700 hover:bg-sky-800 rounded group px-3 py-1 font-semibold text-base`}
        buttonLabel={
          <div className="flex items-center">
            <FontAwesomeIcon className=" " icon={faPenToSquare} />
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
          />
        }
      ></Modal>
    </div>
  );
};

export default ButtonEditKategori;
