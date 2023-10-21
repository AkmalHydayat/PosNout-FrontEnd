/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import ModalPayment from "./ModalPayment";
import { PaymentTable } from "./PaymentTable";

const ButtonPayment = ({
  searchTransaksi,
  stopSearch,
  searchTerm,
  setSearchTerm,
  searchResults,
  isSearching,
  transaksiList,
  setJumlah,
  invoiceNumber,
  formattedTotal,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <ModalPayment
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        formattedTotal={formattedTotal}
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
        modalContent={
          <PaymentTable
            searchTerm={searchTerm}
            stopSearch={stopSearch}
            setSearchTerm={setSearchTerm}
            searchResults={searchResults}
            setJumlah={setJumlah}
            isSearching={isSearching}
            transaksiList={transaksiList}
            searchTransaksi={searchTransaksi}
          />
        }
      ></ModalPayment>
    </div>
  );
};

export default ButtonPayment;
