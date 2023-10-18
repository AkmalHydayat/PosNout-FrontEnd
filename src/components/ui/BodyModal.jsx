/* eslint-disable react/prop-types */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BodyModal = ({ children, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center font-titilium bg-black bg-opacity-25 backdrop-blur-sm shadow-cus"
      id="wrapper"
    >
      <div className="w-[500px] relative text-lg font-semibold bg-colorTwo rounded-md">
        {/* Button Close Modal */}
        <button
          className="text-colorTwo absolute z-20 -end-2 -top-2 bg-purple-600 px-2 rounded-lg  hover:bg-purple-700 hover:shadow-sm"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default BodyModal;
