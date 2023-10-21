/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonModal from "../../components/ui/ButtonModal";
import BodyModalPayment from "./BodyModalPayment";

const ModalPayment = ({
  className,
  buttonLabel,
  modalContent,
  isVisible,
  onClose,
  onClick,
  invoiceNumber,
  formattedTotal,
}) => {
  return (
    <div>
      <ButtonModal onClick={onClick} className={className}>
        {buttonLabel}
      </ButtonModal>
      <BodyModalPayment
        isVisible={isVisible}
        onClose={onClose}
        formattedTotal={formattedTotal}
        invoiceNumber={invoiceNumber}
      >
        {/* modal content berisi formAddStok */}
        {modalContent}
      </BodyModalPayment>
    </div>
  );
};

export default ModalPayment;
