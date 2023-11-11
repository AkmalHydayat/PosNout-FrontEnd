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
  totalKeuntunganPerTransaksi,
  setTotalKeuntunganPerTransaksi,
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
        totalKeuntunganPerTransaksi={totalKeuntunganPerTransaksi}
        setTotalKeuntunganPerTransaksi={setTotalKeuntunganPerTransaksi}
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
        className={`bg-purple-600 dark:shadow-black text-colorTwo shadow-cus2 hover:shadow-sm2 hover:shadow-gray-400 shadow-gray-400  transition-all ease-in  hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md`}
        modalContent={<PaymentTable transaksiList={transaksiList} />}
      />
    </div>
  );
};

export default ButtonPayment;
