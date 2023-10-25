/* eslint-disable react-hooks/rules-of-hooks */

import { getKategoris } from "../../utils/api";
import ButtonBgSec from "../../components/ui/ButtonBgSec";
import axios from "axios";

/* eslint-disable react/prop-types */
const DeleteConfirmKategori = ({
  setKategoris,
  namaKategori,
  isSearching,
  searchResults,
  setSearchResults,
  isVisible,
  onClose,
  id,
  list,
  AlertMessage,
}) => {
  if (!isVisible) return null;

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/kategori/${id}`);
    const updatedKategoris = await getKategoris();
    setKategoris(updatedKategoris); // Perbarui state kategoris di sini
    onClose();

    // Jika sedang dalam mode pencarian, perbarui searchResults
    if (isSearching) {
      // Filter item yang memiliki id yang tidak sama dengan id yang dihapus
      const updatedResults = searchResults.filter(
        (kategori) => kategori.id !== id
      );

      // Perbarui searchResults dengan hasil yang telah difilter
      setSearchResults(updatedResults);
    }
  };

  return (
    <div className="">
      <div className="border-b-[1px] border-gray-300">
        <div className="px-6 py-3 text-2xl text-purple-600">Hapus Data</div>
      </div>
      <div className="py-8 text-base  font-normal px-3">
        Apakah anda yakin ingin menghapus{" "}
        <span className="font-bold">{namaKategori}</span> dari list {list}?
      </div>
      <div className="border-t-[1px] border-gray-300 py-3 space-x-3">
        <ButtonBgSec
          className={`bg-colorOne text-purple-600 w-16 shadow-cus2 hover:shadow-cus2 hover:shadow-gray-500 shadow-gray-400  transition-all ease-in  hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md`}
          onClick={() => {
            handleDelete(id);
            AlertMessage("berhasil menghapus", 310, "success");
          }}
        >
          Ya
        </ButtonBgSec>
        <ButtonBgSec
          className={`bg-colorOne text-purple-600 w-16 shadow-cus2 hover:shadow-cus2 hover:shadow-gray-500 shadow-gray-400  transition-all ease-in  hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md`}
          onClick={() => onClose()}
        >
          Tidak
        </ButtonBgSec>
      </div>
    </div>
  );
};

export default DeleteConfirmKategori;
