/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonModal from "../../components/ui/ButtonModal";
import BodyModalEditProduk from "./BodyModalEditProduk";

const ModalEditProduk = ({
  className,
  buttonLabel,
  modalContent,
  isVisible,
  onClose,
  onClick,
  setErrorInput,
  setIsNamaProdukEmpty,
  setIsSatuanProdukEmpty,
  setIsKategoriProdukEmpty,
  setIsHargaBeliProdukEmpty,
  setIsHargaJualProdukEmpty,
}) => {
  return (
    <div>
      <ButtonModal onClick={onClick} className={className}>
        {buttonLabel}
      </ButtonModal>
      <BodyModalEditProduk
        isVisible={isVisible}
        onClose={onClose}
        setErrorInput={setErrorInput}
        setIsNamaProdukEmpty={setIsNamaProdukEmpty}
        setIsSatuanProdukEmpty={setIsSatuanProdukEmpty}
        setIsKategoriProdukEmpty={setIsKategoriProdukEmpty}
        setIsHargaBeliProdukEmpty={setIsHargaBeliProdukEmpty}
        setIsHargaJualProdukEmpty={setIsHargaJualProdukEmpty}
      >
        {modalContent}
      </BodyModalEditProduk>
    </div>
  );
};

export default ModalEditProduk;
