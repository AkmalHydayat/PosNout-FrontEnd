/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonModal from "../components/ui/ButtonModal";
import BodyModalSetting from "./BodyModalSetting";

const ModalSetting = ({
  className,
  buttonLabel,
  modalContent,
  onClose,
  onClick,
  isVisible,
  edit,
  setEdit,
  url,
  refreshToken,
  setPassword,
  setConfPassword,
  id,
}) => {
  return (
    <div>
      <ButtonModal onClick={onClick} className={className}>
        {buttonLabel}
      </ButtonModal>
      <BodyModalSetting
        id={id}
        isVisible={isVisible}
        onClose={onClose}
        edit={edit}
        setEdit={setEdit}
        url={url}
        refreshToken={refreshToken}
        setPassword={setPassword}
        setConfPassword={setConfPassword}
      >
        {modalContent}
      </BodyModalSetting>
    </div>
  );
};

export default ModalSetting;
