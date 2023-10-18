/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonModal from "../../components/ui/ButtonModal";
import BodyModalGetProduk from "./BodyModalGetProduk";

const ModalGetProduk = ({

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
      <BodyModalGetProduk isVisible={isVisible} onClose={onClose}>
        {/* modal content berisi formAddStok */}
        {modalContent}
      </BodyModalGetProduk>
    </div>
  );
};

export default ModalGetProduk;
