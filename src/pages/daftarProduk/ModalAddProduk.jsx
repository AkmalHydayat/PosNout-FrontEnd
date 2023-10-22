/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonModal from "../../components/ui/ButtonModal";
import BodyModalProduk from "./BodyModalProduk";

const ModalAddProduk = ({
  className,
  buttonLabel,
  modalContent,
  isVisible,
  onClose,
  onClick,
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
    <div>
      <ButtonModal onClick={onClick} className={className}>
        {buttonLabel}
      </ButtonModal>
      <BodyModalProduk
        isVisible={isVisible}
        onClose={onClose}
        setNewNamaProduk={setNewNamaProduk}
        setNewSatuanProduk={setNewSatuanProduk}
        setNewKategoriProduk={setNewKategoriProduk}
        setNewHargaBeliProduk={setNewHargaBeliProduk}
        setNewHargaJualProduk={setNewHargaJualProduk}
        setIsNamaProdukEmpty={setIsNamaProdukEmpty}
        setIsSatuanProdukEmpty={setIsSatuanProdukEmpty}
        setIsKategoriProdukEmpty={setIsKategoriProdukEmpty}
        setIsHargaBeliProdukEmpty={setIsHargaBeliProdukEmpty}
        setIsHargaJualProdukEmpty={setIsHargaJualProdukEmpty}
        setErrorInput={setErrorInput}
      >
        {modalContent}
      </BodyModalProduk>
    </div>
  );
};

export default ModalAddProduk;
