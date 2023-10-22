/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import ModalPayment from "./ModalPayment";
import { PaymentTable } from "./PaymentTable";
// import Swal from "sweetalert2";

const ButtonPayment = ({
  transaksiList,
  invoiceNumber,
  totalJumlah,
  AlertMessage,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <ModalPayment
        isVisible={showModal}
        onClick={() => {
          if (transaksiList.length === 0) {
            // AlertMessage("tidak ada barang yang diinputkan!", 400);
            AlertMessage("berhasil menghapus", 310, "success");
          } else {
            setShowModal(true);
          }
        }}
        onClose={() => setShowModal(false)}
        totalJumlah={totalJumlah}
        invoiceNumber={invoiceNumber}
        buttonLabel={
          <div>
            <FontAwesomeIcon
              icon={faMoneyCheckDollar}
              className=" text-white me-2"
            />
            Bayar
          </div>
        }
        className={`bg-purple-600 text-white  hover:bg-purple-700 rounded hover:shadow-purple-700 group px-3 py-1 font-semibold text-md`}
        modalContent={<PaymentTable transaksiList={transaksiList} />}
      />
    </div>
  );
};

export default ButtonPayment;
