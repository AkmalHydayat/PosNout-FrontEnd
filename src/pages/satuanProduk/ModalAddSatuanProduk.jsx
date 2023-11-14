/* eslint-disable react/prop-types */
import ButtonModal from "../../components/ui/ButtonModal";
import BodyModalAddSatuan from "./BodyModalAddSatuan";

const ModalAddSatuanProduk = ({
  className,
  buttonLabel,
  modalContent,
  isVisible,
  onClose,
  onClick,
  setErrorInput,
  setItem,
}) => {
  return (
    <div>
      <ButtonModal onClick={onClick} className={className}>
        {buttonLabel}
      </ButtonModal>
      <BodyModalAddSatuan
        isVisible={isVisible}
        onClose={onClose}
        setErrorInput={setErrorInput}
        setItem={setItem}
      >
        {modalContent}
      </BodyModalAddSatuan>
    </div>
  );
};

export default ModalAddSatuanProduk;
