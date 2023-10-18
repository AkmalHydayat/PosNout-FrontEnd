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
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center  justify-center font-titilium bg-black bg-opacity-25 backdrop-blur-sm shadow-cus"
      id="wrapper"
    >
      <div className="flex items-center  space-x-12 ">
        <div className="w-[350px] relative mx-auto text-lg font-semibold bg-colorTwo rounded-md  ">
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
        <div className={`w-[800px] ${isHide ? `block` : `hidden`} `}>
          <TableProdukList
            getIdName={getIdName}
            isHide={isHide}
            setIsHide={setIsHide}
          />
        </div>
      </div>
    </div>
  );
};

export default BodyModalAddStok;
