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
      >
        {/* modal content berisi formAddStok */}
        {modalContent}
      </BodyModalAddStok>
    </div>
  );
};

export default ModalAddStok;
