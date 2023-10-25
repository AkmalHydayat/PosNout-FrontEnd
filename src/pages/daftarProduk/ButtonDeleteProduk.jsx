/* eslint-disable react/prop-types */
import { HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";
import Modal from "../../components/ui/Modal";
import DeleteConfirmProduk from "./DeleteConfirmProduk";

const ButtonDeleteSatuan = ({
  id,
  itemToDelete,
  setProduks,
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
            <HiOutlineTrash className="text-lg " />
          </div>
        }
        className={`bg-red-700 font-pt_Sans text-colorTwo border-[1px] p-1 border-red-700 transition-all ease-in  hover:scale-95  hover:bg-red-800 hover:border-colorTwo rounded  group font-semibold text-md`}
        modalContent={
          <DeleteConfirmProduk
            setProduks={setProduks}
            isSearching={isSearching}
            setSearchResults={setSearchResults}
            searchResults={searchResults}
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            itemToDelete={itemToDelete}
            id={id}
            list={"produk"}
            AlertMessage={AlertMessage}
          />
        }
      ></Modal>
    </div>
  );
};

export default ButtonDeleteSatuan;
