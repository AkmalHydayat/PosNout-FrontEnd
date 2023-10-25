/* eslint-disable react/prop-types */

import { useState } from "react";
import FormEditSatuan from "./FormEditSatuan";
import Modal from "../../components/ui/Modal";
import { HiOutlinePencilAlt } from "react-icons/hi";

const ButtonEditSatuan = ({
  id,
  namaSatuan,
  isSearching,
  setSearchResults,
  searchResults,
  setSatuans,
  AlertMessage,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Modal
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        className={`bg-sky-700 text-colorTwo border-[1px]  border-sky-700 p-1 transition-colors ease-in hover:scale-95 hover:bg-sky-800 rounded  group font-semibold text-md`}
        buttonLabel={
          <div className="flex items-center ">
            <HiOutlinePencilAlt className="text-lg " />
          </div>
        }
        modalContent={
          <FormEditSatuan
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            namaSatuan={namaSatuan}
            id={id}
            isSearching={isSearching}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            setSatuans={setSatuans}
            AlertMessage={AlertMessage}
          />
        }
      ></Modal>
    </div>
  );
};

export default ButtonEditSatuan;
