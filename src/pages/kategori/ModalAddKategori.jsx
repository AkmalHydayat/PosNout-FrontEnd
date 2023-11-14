/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonModal from "../../components/ui/ButtonModal";
import BodyModalAddKategori from "./BodyModalAddKategori";

const ModalAddKategori = ({
  className,
  buttonLabel,
  modalContent,
  isVisible,
  onClose,
  onClick,
  setErrorInput,setItem
}) => {
  return (
    <div>
      <ButtonModal onClick={onClick} className={className} >
        {buttonLabel}
      </ButtonModal>
      <BodyModalAddKategori
        isVisible={isVisible}
        onClose={onClose}
        setErrorInput={setErrorInput}
        setItem={setItem}
      >
        {modalContent}
      </BodyModalAddKategori>
    </div>
  );
};

export default ModalAddKategori;
