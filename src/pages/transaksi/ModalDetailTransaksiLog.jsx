/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonModal from "../../components/ui/ButtonModal";
import BodyModalTransaksiLog from "./BodyModalTransaksiLog";

const ModalDetailTransaksiLog = ({
  className,
  children,
  buttonLabel,
  isVisible,
  onClose,
  onClick,
}) => {
  return (
    <div>
      <ButtonModal onClick={onClick} className={className}>
        {buttonLabel}
      </ButtonModal>
      <BodyModalTransaksiLog isVisible={isVisible} onClose={onClose}>
        {children}
      </BodyModalTransaksiLog>
    </div>
  );
};

export default ModalDetailTransaksiLog;
