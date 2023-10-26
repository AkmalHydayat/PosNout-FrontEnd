/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonModal from "../../components/ui/ButtonModal";
import BodyModalEditKategori from "./BodyModalEditKategori";

const ModalEditKategori = ({
  className,
  buttonLabel,
  modalContent,
  isVisible,
  onClose,
  onClick,
  setErrorInput,
  setNamaNewKategori,
}) => {
  return (
    <div>
      <ButtonModal onClick={onClick} className={className}>
        {buttonLabel}
      </ButtonModal>
      <BodyModalEditKategori
        isVisible={isVisible}
        onClose={onClose}
        setErrorInput={setErrorInput}
        setNamaNewKategori={setNamaNewKategori}
      >
        {" "}
        {modalContent}
      </BodyModalEditKategori>
    </div>
  );
};

export default ModalEditKategori;
