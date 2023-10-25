/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonModal from "../../components/ui/ButtonModal";
import BodyModalAddStok from "./BodyModalAddStok";

const ModalAddStok = ({
  produks,
  setProduks,
  getIdName,
  isHide,
  setIsHide,
  className,
  buttonLabel,
  modalContent,
  isVisible,
  onClose,
  onClick,
  setJumlah,
  setSearchTerm,
  setSearchResults,
  setIsSearching,
  setCurrentPage,
  searchTerm,
  searchResults,
  isSearching,
  currentPage,
  setIsBarcodeEmpty,
  setIsJumlahEmpty,
}) => {
  return (
    <div>
      <ButtonModal onClick={onClick} className={className}>
        {buttonLabel}
      </ButtonModal>
      <BodyModalAddStok
        isVisible={isVisible}
        onClose={onClose}
        isHide={isHide}
        setIsHide={setIsHide}
        getIdName={getIdName}
        produks={produks}
        setProduks={setProduks}
        setJumlah={setJumlah}
        searchTerm={searchTerm}
        searchResults={searchResults}
        isSearching={isSearching}
        currentPage={currentPage}
        setSearchTerm={setSearchTerm}
        setSearchResults={setSearchResults}
        setIsSearching={setIsSearching}
        setCurrentPage={setCurrentPage}
        setIsBarcodeEmpty={setIsBarcodeEmpty}
        setIsJumlahEmpty={setIsJumlahEmpty}
      >
        {/* modal content berisi formAddStok */}
        {modalContent}
      </BodyModalAddStok>
    </div>
  );
};

export default ModalAddStok;
