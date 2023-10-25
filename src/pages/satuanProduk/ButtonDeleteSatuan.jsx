/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "../../components/ui/Modal";
import DeleteConfirmSatuan from "./DeleteConfirmSatuan";
import { HiOutlineTrash } from "react-icons/hi";

const ButtonDeleteSatuan = ({
  setSatuans,
  id,
  namaSatuan,
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
          <div className="flex items-center ">
            <HiOutlineTrash className="text-lg" />
          </div>
        }
        className={`bg-red-700 font-pt_Sans text-colorTwo border-[1px] p-1 border-red-700 transition-all ease-in  hover:scale-95  hover:bg-red-800 hover:border-colorTwo rounded  group font-semibold text-md`}
        modalContent={
          <DeleteConfirmSatuan
            setSatuans={setSatuans}
            namaSatuan={namaSatuan}
            isSearching={isSearching}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            id={id}
            list={"satuan"}
            AlertMessage={AlertMessage}
          />
        }
      ></Modal>
    </div>
  );
};

export default ButtonDeleteSatuan;
