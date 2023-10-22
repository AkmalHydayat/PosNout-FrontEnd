/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonModal from "./ButtonModal";
import BodyModal from "./BodyModal";

const Modal = ({
  className,
  buttonLabel,
  modalContent,
  isVisible,
  onClose,
  onClick,
  setErrorInput,
  setItem,
}) => {
  return (
    <div>
      <ButtonModal onClick={onClick} className={className}>
        {buttonLabel}
      </ButtonModal>
      <BodyModal
        isVisible={isVisible}
        onClose={onClose}
        setErrorInput={setErrorInput}
        setItem={setItem}
      >
        {modalContent}
      </BodyModal>
    </div>
  );
};

export default Modal;
