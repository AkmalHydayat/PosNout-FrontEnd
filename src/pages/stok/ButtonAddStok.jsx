/* eslint-disable react/prop-types */

import FormAddStok from "./FormAddStok";
import { useState } from "react";
import ModalAddStok from "./ModalAddStok";
import { FiPlusCircle } from "react-icons/fi";

const ButtonAddStok = ({ setStoks, produks, setProduks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [idSelect, setIdSelect] = useState("");
  const [namaSelect, setNamaSelect] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [isBarcodeEmpty, setIsBarcodeEmpty] = useState(false);
  const [isJumlahEmpty, setIsJumlahEmpty] = useState(false);
  const getIdName = (id, nama) => {
    setIdSelect(id);
    setNamaSelect(nama);
  };
  return (
    <div>
      <ModalAddStok
        searchTerm={searchTerm}
        searchResults={searchResults}
        isSearching={isSearching}
        currentPage={currentPage}
        setSearchTerm={setSearchTerm}
        setSearchResults={setSearchResults}
        setIsSearching={setIsSearching}
        setCurrentPage={setCurrentPage}
        setProduks={setProduks}
        produks={produks}
        getIdName={getIdName}
        isHide={isHide}
        setIsHide={setIsHide}
        isVisible={showModal}
        setJumlah={setJumlah}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        setIsBarcodeEmpty={setIsBarcodeEmpty}
        setIsJumlahEmpty={setIsJumlahEmpty}
        buttonLabel={
          <div className="flex items-center space-x-2">
            <FiPlusCircle className="text-lg" />
            <div className="text-base font-semibold font-pt_Sans">Add</div>
          </div>
        }
        className={`bg-purple-600 text-colorTwo shadow-cus2 hover:shadow-sm2 hover:shadow-gray-400 shadow-gray-400  transition-all ease-in  hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md`}
        modalContent={
          <FormAddStok
            setProduks={setProduks}
            getIdName={getIdName}
            idSelect={idSelect}
            namaSelect={namaSelect}
            isHide={isHide}
            setIsHide={setIsHide}
            isVisible={showModal}
            onClose={() => setShowModal(false)}
            setStoks={setStoks}
            setJumlah={setJumlah}
            jumlah={jumlah}
            isBarcodeEmpty={isBarcodeEmpty}
            isJumlahEmpty={isJumlahEmpty}
            setIsBarcodeEmpty={setIsBarcodeEmpty}
            setIsJumlahEmpty={setIsJumlahEmpty}
          />
        }
      ></ModalAddStok>
    </div>
  );
};

export default ButtonAddStok;
