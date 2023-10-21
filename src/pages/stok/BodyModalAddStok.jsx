/* eslint-disable react/prop-types */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableProdukList from "./TableProdukForStok";

const BodyModalAddStok = ({
  children,
  isVisible,
  onClose,
  isHide,
  setIsHide,
  getIdName,
}) => {
  return (
    <div
      className={`fixed inset-0 ${
        isVisible ? "visible bg-black/30" : "invisible"
      }  flex items-center justify-center font-titilium  backdrop-blur-sm transition-colors`}
      id="wrapper"
    >
      <div className="flex items-center  space-x-12 ">
        <div
          className={`${
            isVisible
              ? "scale-100 opacity-100 delay-150 duration-300 "
              : "scale-75 opacity-0 delay-0 "
          } ${
            isHide ? "translate-x-0 duration-200" : "translate-x-[450px] "
          } w-[350px] relative text-base transition-all ease-in-out font-semibold bg-colorTwo rounded-md`}
        >
          {/* Button Close Modal */}
          <button
            className="text-white absolute z-20 -end-2 -top-2 bg-purple-600 px-2 rounded-lg  hover:bg-purple-700 hover:shadow-sm"
            onClick={() => {
              onClose();
              setIsHide(false);
              getIdName("", "");
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          {/* children berisi formAddStok  */}
          <div className="">{children}</div>
        </div>
        {/* table Produk list tampil ketika tombol pecarian di klik */}
        <div className={`w-[800px]  ${isHide ? `visible ` : `invisible `}  `}>
          <div
            className={`${
              isHide
                ? "scale-100 opacity-100 delay-300 translate-y-0 rotate-0 "
                : "scale-50 opacity-0 delay-100 translate-y-32 rotate-45"
            }  relative text-base transition-all ease-out font-semibold bg-colorTwo rounded-md`}
          >
            <TableProdukList
              isVisible={isVisible}
              getIdName={getIdName}
              isHide={isHide}
              setIsHide={setIsHide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyModalAddStok;
