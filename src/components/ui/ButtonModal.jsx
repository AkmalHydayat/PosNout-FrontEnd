/* eslint-disable react/prop-types */

import ButtonBgSec from "./ButtonBgSec";

const ButtonModal = ({ onClick, children, className }) => {
  return (
    <div>
      <ButtonBgSec onClick={onClick} className={` ${className}`}>
        {children}
      </ButtonBgSec>
    </div>
  );
};

export default ButtonModal;
