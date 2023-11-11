/* eslint-disable react/prop-types */
import { useState } from "react";
import DeleteConfirmSatuan from "./DeleteConfirmSatuan";
import { HiOutlineTrash } from "react-icons/hi";
import ModalDelete from "../../components/ui/ModalDelete";

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
      <ModalDelete
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        buttonLabel={
          <div className="flex items-center ">
            <HiOutlineTrash className="text-lg" />
          </div>
        }
        className={`bg-red-700 font-pt_Sans text-colorTwo p-1 transition-all ease-in  hover:scale-95  hover:bg-red-800  rounded  group font-semibold text-md`}
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
      ></ModalDelete>
    </div>
  );
};

export default ButtonDeleteSatuan;
