/* eslint-disable react/prop-types */

import { useState } from "react";
import Modal from "../../components/ui/Modal";
import DeleteConfirmKategori from "./DeleteConfirmKategori";
import { HiOutlineTrash } from "react-icons/hi";
const ButtonDeleteKategori = ({
  setKategoris,
  id,
  namaKategori,
  isSearching,
  setSearchResults,
  searchResults,
  AlertMessage,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Modal
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        buttonLabel={
          <div className="flex items-center p-0.5">
            <HiOutlineTrash className="text-xl " />
          </div>
        }
        className={`bg-colorTwo text-purple-600 shadow-sm2 border-[1px] p-0.5 border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover:shadow-sm2 hover:text-white  hover:bg-red-700 hover:border-white rounded  group  font-semibold text-md`}
        modalContent={
          <DeleteConfirmKategori
            setKategoris={setKategoris}
            namaKategori={namaKategori}
            isSearching={isSearching}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            id={id}
            list={"kategori"}
            AlertMessage={AlertMessage}
          />
        }
      ></Modal>
    </div>
  );
};

export default ButtonDeleteKategori;
