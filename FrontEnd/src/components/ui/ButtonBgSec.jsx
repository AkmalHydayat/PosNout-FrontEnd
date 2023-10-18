/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
const ButtonBgSec = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={` ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonBgSec;
