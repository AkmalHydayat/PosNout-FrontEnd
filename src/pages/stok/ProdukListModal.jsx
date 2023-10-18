/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonModal from "../../components/ui/ButtonModal";
import BodyModalProdukList from "./BodyModalProdukList";

const ProdukListModal = ({
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
      <BodyModalProdukList isVisible={isVisible} onClose={onClose}>
        {modalContent}
      </BodyModalProdukList>
    </div>
  );
};

export default ProdukListModal;
