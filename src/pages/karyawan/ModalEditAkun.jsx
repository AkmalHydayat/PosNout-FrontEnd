/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonModal from "../../components/ui/ButtonModal";
import BodyModalEditAkun from "./BodyModalEditAkun";

const ModalEditAkun = ({
  className,
  buttonLabel,
  modalContent,
  isVisible,
  onClose,
  onClick,
  setEdit,
}) => {
  return (
    <div>
      <ButtonModal onClick={onClick} className={className}>
        {buttonLabel}
      </ButtonModal>
      <BodyModalEditAkun
        isVisible={isVisible}
        onClose={onClose}
        setEdit={setEdit}
      >
        {modalContent}
      </BodyModalEditAkun>
    </div>
  );
};

export default ModalEditAkun;
