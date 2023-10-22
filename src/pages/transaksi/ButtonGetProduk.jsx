/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ModalGetProduk from "./ModalGetProduk";
import TableProdukForTransaksi from "./TableProdukForTransaksi";

const ButtonGetProduk = ({ getSelected }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8);
  return (
    <div>
      <ModalGetProduk
        isVisible={showModal}
        setCurrentPage={setCurrentPage}
        setIsSearching={setIsSearching}
        setSearchTerm={setSearchTerm}
        setSearchResults={setSearchResults}
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
            setIsSearching={setIsSearching}
            setSearchTerm={setSearchTerm}
            setSearchResults={setSearchResults}
            searchTerm={searchTerm}
            searchResults={searchResults}
            isSearching={isSearching}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            perPage={perPage}
            setPerPage={setPerPage}
          />
        }
      ></ModalGetProduk>
    </div>
  );
};

export default ButtonGetProduk;
