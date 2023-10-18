/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ModalGetProduk from "./ModalGetProduk";
import TableProdukForTransaksi from "./TableProdukForTransaksi";

const ButtonGetProduk = ({ getSelected }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <ModalGetProduk
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        buttonLabel={
          <FontAwesomeIcon icon={faSearch} className=" text-white " />
        }
        className={`bg-purple-600 text-white  hover:bg-purple-700 rounded-e hover:shadow-purple-700 group px-3 py-1 font-semibold text-md`}
        modalContent={
          <TableProdukForTransaksi
            getSelected={getSelected}
            onClose={() => setShowModal(false)}
          />
        }
      ></ModalGetProduk>
    </div>
  );
};

export default ButtonGetProduk;
