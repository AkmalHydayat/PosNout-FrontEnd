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
  totalJumlah,
  transaksiList,
  tanggalSekarang,
  generateInvoice,
}) => {
  return (
    <div>
      <ButtonModal onClick={onClick} className={className}>
        {buttonLabel}
      </ButtonModal>
      <BodyModalPayment
        generateInvoice={generateInvoice}
        isVisible={isVisible}
        onClose={onClose}
        totalJumlah={totalJumlah}
        invoiceNumber={invoiceNumber}
        transaksiList={transaksiList}
        tanggalSekarang={tanggalSekarang}
      >
        {/* modal content berisi formAddStok */}
        {modalContent}
      </BodyModalPayment>
    </div>
  );
};

export default ModalPayment;
