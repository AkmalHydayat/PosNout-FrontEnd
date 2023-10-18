/* eslint-disable react/prop-types */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BodyModalGetProduk = ({ children, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center   justify-center font-titilium bg-black bg-opacity-25 backdrop-blur-sm shadow-cus"
      id="wrapper"
    >
      <div className="flex items-center  space-x-12 ">
        <div className="w-[800px] relative mx-auto text-base  bg-red-600 rounded-md  ">
          {/* Button Close Modal */}
          <button
            className="text-white absolute z-20 -end-2 -top-2 bg-purple-600 px-2 rounded-lg  hover:bg-purple-700 hover:shadow-sm"
            onClick={() => {
              onClose();
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          {/* children berisi formAddStok  */}
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BodyModalGetProduk;
