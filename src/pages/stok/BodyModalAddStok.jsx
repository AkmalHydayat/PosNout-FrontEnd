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
  produks,
  setProduks,
  setJumlah,
  setSearchTerm,
  setSearchResults,
  setIsSearching,
  setCurrentPage,
  searchTerm,
  searchResults,
  isSearching,
  currentPage,
  setIsBarcodeEmpty,
  setIsJumlahEmpty,
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
          } w-[350px] relative text-base transition-all ease-in-out font-semibold bg-colorOne rounded-md`}
        >
          {/* Button Close Modal */}
          <button
            className={`text-colorTwo ${
              isVisible
                ? "scale-100 opacity-100  duration-300"
                : "scale-75 opacity-0"
            } absolute z-20 -end-3 -top-3 bg-purple-600 text-colorTwo px-[7px] hover:bg-purple-700 hover:text-colorTwo rounded-lg  shadow-cus2 hover:shadow-sm2 hover:shadow-gray-400 shadow-gray-400  `}
            onClick={() => {
              onClose();
              setIsHide(false);
              getIdName("", "");
              setJumlah("");

              setTimeout(() => {
                setSearchTerm("");
                setSearchResults([]);
                setIsSearching(false);
                setCurrentPage(1);
                setIsBarcodeEmpty(false);
                setIsJumlahEmpty(false);
              }, 500);
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
                ? "scale-100 opacity-100 delay-300 translate-y-0 "
                : "scale-50 opacity-0 delay-50 translate-y-32 "
            }  relative text-base transition-all ease-out font-semibold bg-colorTwo rounded-md`}
          >
            <TableProdukList
              isVisible={isVisible}
              getIdName={getIdName}
              isHide={isHide}
              setIsHide={setIsHide}
              produks={produks}
              setProduks={setProduks}
              searchTerm={searchTerm}
              searchResults={searchResults}
              isSearching={isSearching}
              currentPage={currentPage}
              setSearchTerm={setSearchTerm}
              setSearchResults={setSearchResults}
              setIsSearching={setIsSearching}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyModalAddStok;
