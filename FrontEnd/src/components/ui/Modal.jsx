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
}) => {
  return (
    <div>
      <ButtonModal onClick={onClick} className={className}>
        {buttonLabel}
      </ButtonModal>
      <BodyModal isVisible={isVisible} onClose={onClose}>
        {modalContent}
      </BodyModal>
    </div>
  );
};

export default Modal;
