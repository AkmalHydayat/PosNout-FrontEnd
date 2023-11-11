/* eslint-disable react/prop-types */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BodyModalPayment = ({
  children,
  isVisible,
  onClose,
  setIsSearching,
  setSearchTerm,
  setSearchResults,
  setCurrentPage,
}) => {
  return (
    <div
      className={`fixed inset-0 ${
        isVisible ? "visible bg-black/30" : "invisible"
      } flex items-center justify-center font-titilium  backdrop-blur-sm transition-colors`}
      id="wrapper"
    >
      <div className="flex items-center space-x-12 ">
        <div
          className={`${
            isVisible
              ? "scale-100 opacity-100 delay-150 duration-300"
              : "scale-75 opacity-0 "
          } w-[800px] relative text-base transition-all ease-in-out font-semibold bg-colorOne rounded-md`}
        >
          {/* Button Close Modal */}
          <button
            className={`text-colorTwo ${
              isVisible
                ? "scale-100 opacity-100  duration-300"
                : "scale-75 opacity-0"
            } absolute z-20 -end-3 -top-3 bg-purple-600 text-colorTwo px-[7px] hover:bg-purple-700 hover:text-colorTwo rounded-lg  shadow-cus2 hover:shadow-sm2 hover:shadow-black/40 shadow-black/20  `}
            onClick={() => {
              onClose();
              setTimeout(() => {
                setIsSearching(false);
                setSearchTerm("");
                setSearchResults([]);
                setCurrentPage(1);
              }, 500);
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

export default BodyModalPayment;
