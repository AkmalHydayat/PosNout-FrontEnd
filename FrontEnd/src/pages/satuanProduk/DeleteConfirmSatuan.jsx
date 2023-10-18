/* eslint-disable react-hooks/rules-of-hooks */

import { getSatuans } from "../../utils/api";
import ButtonBgSec from "../../components/ui/ButtonBgSec";
import axios from "axios";

/* eslint-disable react/prop-types */
const DeleteConfirmSatuan = ({
  setSatuans,
  namaSatuan,
  isSearching,
  searchResults,
  setSearchResults,
  isVisible,
  onClose,
  id,
  list,
}) => {
  if (!isVisible) return null;

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/satuan/${id}`);
    const updatedSatuans = await getSatuans();
    setSatuans(updatedSatuans); // Perbarui state Satuans di sini
    onClose();

    // Jika sedang dalam mode pencarian, perbarui searchResults
    if (isSearching) {
      // Filter item yang memiliki id yang tidak sama dengan id yang dihapus
      const updatedResults = searchResults.filter((satuan) => satuan.id !== id);

      // Perbarui searchResults dengan hasil yang telah difilter
      setSearchResults(updatedResults);
    }
  };

  return (
    <div className="">
      <div className="border-b-[1px] border-gray-300">
        <div className="px-6 py-3 text-2xl text-secondary">Hapus Data</div>
      </div>
      <div className="py-8 text-base  font-normal px-3">
        Apakah anda yakin ingin menghapus{" "}
        <span className="font-bold">{namaSatuan}</span> dari list {list}?
      </div>
      <div className="border-t-[1px] border-gray-300 py-3 space-x-3">
        <ButtonBgSec
          className={
            "text-center w-16 py-[2px] bg-purple-600 hover:bg-purple-700 rounded text-white"
          }
          onClick={() => handleDelete(id)}
        >
          Ya
        </ButtonBgSec>
        <ButtonBgSec
          className={
            "text-center w-16 py-[2px] rounded text-white bg-gray-600 hover:bg-gray-700"
          }
          onClick={() => onClose()}
        >
          Tidak
        </ButtonBgSec>
      </div>
    </div>
  );
};

export default DeleteConfirmSatuan;
