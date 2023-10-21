/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import ModalPayment from "./ModalPayment";
import { PaymentTable } from "./PaymentTable";
import Swal from "sweetalert2";

// const MySwal = withReactContent(Swal);
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
  totalJumlah,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <ModalPayment
        isVisible={showModal}
        onClick={() => {
          if (transaksiList.length === 0) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 2000,
              background: "rgb(147 51 234)",
              color: "#f5f5f5",
              iconColor: "#f5f5f5",
            });

            Toast.fire({
              icon: "warning",
              title: "tidak ada barang yang diinputkan!",
              width: 400,
            });
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
