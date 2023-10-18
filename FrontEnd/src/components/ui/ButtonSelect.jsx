/* eslint-disable react/prop-types */
import ButtonBgSec from "./ButtonBgSec";

const ButtonSelect = ({ onClick, children, className }) => {
  return (
    <div>
      <ButtonBgSec onClick={onClick} className={`${className}`}>
        {children}
      </ButtonBgSec>
    </div>
  );
};

export default ButtonSelect;
