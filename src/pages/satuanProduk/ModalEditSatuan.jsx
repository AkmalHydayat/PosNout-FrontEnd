/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonModal from "../../components/ui/ButtonModal";
import BodyModalEditSatuan from "./BodyModalEditSatuan";

const ModalEditSatuan = ({
  className,
  buttonLabel,
  modalContent,
  isVisible,
  onClose,
  onClick,
  setErrorInput,
  setNamaNewSatuan,
  namaSatuan,
}) => {
  return (
    <div>
      <ButtonModal onClick={onClick} className={className}>
        {buttonLabel}
      </ButtonModal>
      <BodyModalEditSatuan
        isVisible={isVisible}
        onClose={onClose}
        setErrorInput={setErrorInput}
        setNamaNewSatuan={setNamaNewSatuan}
        namaSatuan={namaSatuan}
      >
        {modalContent}
      </BodyModalEditSatuan>
    </div>
  );
};

export default ModalEditSatuan;
