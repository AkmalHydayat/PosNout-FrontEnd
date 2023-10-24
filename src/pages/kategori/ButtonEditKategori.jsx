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
        className={`bg-colorTwo text-purple-600 shadow-sm2 border-[1px] p-0.5 border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover:shadow-sm2 hover:border-white hover:text-white  hover:bg-purple-700 rounded  group font-semibold text-md`}
        buttonLabel={
          <div className="flex items-center p-0.5">
            <HiOutlinePencilAlt className="text-xl " />
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
      ></Modal>
    </div>
  );
};

export default ButtonEditKategori;
