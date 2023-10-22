/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonModal from "../../components/ui/ButtonModal";
import BodyModalGetProduk from "./BodyModalGetProduk";

const ModalGetProduk = ({
  setIsSearching,
  setSearchTerm,
  setSearchResults,
  className,
  buttonLabel,
  modalContent,
  isVisible,
  onClose,
  onClick,
  setCurrentPage,
}) => {
  return (
    <div>
      <ButtonModal onClick={onClick} className={className}>
        {buttonLabel}
      </ButtonModal>
      <BodyModalGetProduk
        setCurrentPage={setCurrentPage}
        isVisible={isVisible}
        onClose={onClose}
        setIsSearching={setIsSearching}
        setSearchTerm={setSearchTerm}
        setSearchResults={setSearchResults}
      >
        {/* modal content berisi formAddStok */}
        {modalContent}
      </BodyModalGetProduk>
    </div>
  );
};

export default ModalGetProduk;
