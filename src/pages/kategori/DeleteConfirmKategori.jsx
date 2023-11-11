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
  onClose,
  id,
  list,
  AlertMessage,
}) => {
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
        <span className="font-bold underline underline-offset-2 decoration-purple-600">
          {namaKategori}
        </span>{" "}
        dari list {list}?
      </div>
      <div className="border-t-[1px] border-gray-300 py-3 space-x-3">
        <ButtonBgSec
          className={`bg-colorTwo dark:border-[1px] w-[68px] dark:bg-colorDarkTwo dark:shadow-black  dark:text-colorTwo  dark:hover:text-purple-600 dark:hover:shadow-sm2 dark:hover:shadow-black hover:dark:shadow-purple-600 dark:shadow-cus2 cursor-pointer shadow-sm2 text-purple-600  dark:border-purple-600 hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover: hover:text-white  hover:bg-purple-700 rounded  group py-0.5  `}
          onClick={() => {
            handleDelete(id);
            AlertMessage("berhasil menghapus", 310, "success");
          }}
        >
          Ya
        </ButtonBgSec>

        <ButtonBgSec
          className={`bg-colorTwo dark:border-[1px] w-[68px] dark:bg-colorDarkTwo dark:shadow-black  dark:text-colorTwo  dark:hover:text-purple-600 dark:hover:shadow-sm2 dark:hover:shadow-black hover:dark:shadow-purple-600 dark:shadow-cus2 cursor-pointer shadow-sm2 text-purple-600  dark:border-purple-600 hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover: hover:text-white  hover:bg-purple-700 rounded  group py-0.5  `}
          onClick={() => onClose()}
        >
          Tidak
        </ButtonBgSec>
      </div>
    </div>
  );
};

export default DeleteConfirmKategori;
