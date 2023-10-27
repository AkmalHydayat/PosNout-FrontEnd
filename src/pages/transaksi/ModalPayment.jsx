/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonModal from "../../components/ui/ButtonModal";
import BodyModalPayment from "./BodyModalPayment";

const ModalPayment = ({
  className,
  setTransaksiList,
  buttonLabel,
  modalContent,
  isVisible,
  onClose,
  onClick,
  invoiceNumber,
  totalJumlah,
  transaksiList,
  tanggalSekarang,
  handlePaymentClick,
  setInvoiceNumber,
  generateInvoiceNumber,
  setTotalJumlah,
  setProduks,
}) => {
  return (
    <div>
      <ButtonModal onClick={onClick} className={className}>
        {buttonLabel}
      </ButtonModal>
      <BodyModalPayment
        setInvoiceNumber={setInvoiceNumber}
        setTotalJumlah={setTotalJumlah}
        handlePaymentClick={handlePaymentClick}
        setTransaksiList={setTransaksiList}
        isVisible={isVisible}
        onClose={onClose}
        totalJumlah={totalJumlah}
        invoiceNumber={invoiceNumber}
        transaksiList={transaksiList}
        tanggalSekarang={tanggalSekarang}
        generateInvoiceNumber={generateInvoiceNumber}
        setProduks={setProduks}
      >
        {/* modal content berisi formAddStok */}
        {modalContent}
      </BodyModalPayment>
    </div>
  );
};

export default ModalPayment;
