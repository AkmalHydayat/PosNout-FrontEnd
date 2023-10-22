/* eslint-disable react/prop-types */

import { useState } from "react";
import FormEditSatuan from "./FormEditSatuan";
import Modal from "../../components/ui/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const ButtonEditSatuan = ({
  id,
  namaSatuan,
  isSearching,
  setSearchResults,
  searchResults,
  setSatuans,
  AlertMessage
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Modal
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        buttonLabel={
          <div className="flex items-center ">
            <FontAwesomeIcon className="" icon={faPenToSquare} />
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
        className={`text-white bg-sky-700 hover:bg-sky-800 rounded group px-3 py-1 font-semibold text-base`}
      ></Modal>
    </div>
  );
};

export default ButtonEditSatuan;
