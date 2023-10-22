/* eslint-disable react/prop-types */
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BodyModalProduk = ({
  children,
  isVisible,
  onClose,
  setNewNamaProduk,
  setNewSatuanProduk,
  setNewKategoriProduk,
  setNewHargaBeliProduk,
  setNewHargaJualProduk,
  setIsNamaProdukEmpty,
  setIsSatuanProdukEmpty,
  setIsKategoriProdukEmpty,
  setIsHargaBeliProdukEmpty,
  setIsHargaJualProdukEmpty,
  setErrorInput,
}) => {
  return (
    <div
      className={`fixed inset-0 ${
        isVisible ? "visible bg-black/30" : "invisible"
      } flex items-center justify-center font-titilium  backdrop-blur-sm transition-colors`}
      id="wrapper"
    >
      <div
        className={`${
          isVisible
            ? "scale-100 opacity-100 delay-150 duration-300"
            : "scale-75 opacity-10"
        } w-[500px] relative text-lg transition-all font-semibold bg-colorTwo rounded-md`}
      >
        {/* Button Close Modal */}
        <button
          className={`text-colorTwo ${
            isVisible
              ? "scale-100 opacity-100  duration-300"
              : "scale-75 opacity-0"
          } absolute z-20 -end-2 -top-2 bg-purple-600 px-2 rounded-lg  hover:bg-purple-700 hover:shadow-sm`}
          onClick={() => {
            onClose();
            setNewNamaProduk("");
            setNewSatuanProduk("");
            setNewKategoriProduk("");
            setNewHargaBeliProduk("");
            setNewHargaJualProduk("");
            setIsNamaProdukEmpty(false);
            setIsSatuanProdukEmpty(false);
            setIsKategoriProdukEmpty(false);
            setIsHargaBeliProdukEmpty(false);
            setIsHargaJualProdukEmpty(false);
            setErrorInput("");
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default BodyModalProduk;
