/* eslint-disable react/prop-types */
import { useState } from "react";
import ModalPayment from "./ModalPayment";
import { PaymentTable } from "./PaymentTable";
import { PiCurrencyCircleDollar } from "react-icons/pi";

const ButtonPayment = ({
  transaksiList,
  setTransaksiList,
  invoiceNumber,
  totalJumlah,
  AlertMessage,
  tanggalSekarang,
  handlePaymentClick,
  setInvoiceNumber,
  generateInvoiceNumber,
  setTotalJumlah,
  setProduks,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <ModalPayment
        setInvoiceNumber={setInvoiceNumber}
        isVisible={showModal}
        handlePaymentClick={handlePaymentClick}
        tanggalSekarang={tanggalSekarang}
        transaksiList={transaksiList}
        setTransaksiList={setTransaksiList}
        setTotalJumlah={setTotalJumlah}
        setProduks={setProduks}
        generateInvoiceNumber={generateInvoiceNumber}
        onClick={() => {
          if (transaksiList.length === 0) {
            AlertMessage("tidak ada barang yang diinputkan!", 400, "warning");
          } else {
            setShowModal(true);
          }
        }}
        onClose={() => setShowModal(false)}
        totalJumlah={totalJumlah}
        invoiceNumber={invoiceNumber}
        buttonLabel={
          <div className="flex items-center ">
            <PiCurrencyCircleDollar className=" text-white me-2 text-2xl" />
            <div className="text-base">Bayar</div>
          </div>
        }
        className={`bg-purple-600 text-white px-2 py-1 shadow-cus2 hover:shadow-sm2 transition-shadow shadow-gray-500/70  hover:bg-purple-700 rounded hover:shadow-gray-400 group font-semibold text-lg`}
        modalContent={<PaymentTable transaksiList={transaksiList} />}
      />
    </div>
  );
};

export default ButtonPayment;
