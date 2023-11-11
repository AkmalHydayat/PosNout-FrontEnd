import { useEffect, useState } from "react";

import LayoutPage from "../../layout/PageLayout";
import ButtonAddProduk from "./ButtonAddProduk";
import TableProduk from "./TableProduk";
import { getProduks } from "../../utils/api";
import AlertShow from "../../components/ui/Alert";

/* eslint-disable react/prop-types */
const Produk = () => {
  const [produks, setProduks] = useState([]);
  const AlertMessage = (message, width, icon) => {
    AlertShow(message, width, icon);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduks();
        setProduks(data);
      } catch (error) {
        // Handle error jika diperlukan
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <LayoutPage>
      <div className={`p-6 font-pt_Sans `}>
        <div className="font-medium text-3xl  mb-3 text-gray-900 dark:text-colorTwo transition-colors ease-in">
          Daftar Produk
        </div>
        <div className="rounded bg-colorTwo transition-all ease-in shadow-md border-[1px] border-gray-200 shadow-gray-300 dark:shadow-black dark:border-colorDarkOne dark:bg-colorDarkTwo ">
          <div className="px-6 py-3 border-b-[1px] transition-all ease-in  border-purple-300 dark:border-colorDarkOne ">
            <ButtonAddProduk
              produks={produks}
              setProduks={setProduks}
              AlertMessage={AlertMessage}
            />
          </div>
          <TableProduk
            produks={produks}
            setProduks={setProduks}
            AlertMessage={AlertMessage}
          />
        </div>
      </div>
    </LayoutPage>
  );
};

export default Produk;

// const { produkList, setProdukList } = ProdukListData();
// const [lastId, setLastId] = useState(0);
// const [searchTerm, setSearchTerm] = useState("");
// const [searchResults, setSearchResults] = useState([]);
// const [isSearching, setIsSearching] = useState(false);

// const addProduk = (
//   newNamaProduk,
//   newSatuanProduk,
//   newKategoriProduk,
//   newHargaBeliProduk,
//   newHargaJualProduk
// ) => {
//   const newId = lastId + 1;
//   const newProduk = {
//     id: "BRG" + newId.toString().padStart(5, "0"),
//     nama: newNamaProduk,
//     satuan: newSatuanProduk,
//     kategori: newKategoriProduk,
//     hargaBeli: newHargaBeliProduk,
//     hargaJual: newHargaJualProduk,
//     stok: 0,
//   };
//   setLastId(newId);
//   setProdukList([...produkList, newProduk]);
// };

// const deleteData = (id) => {
//   const updatedProdukList = produkList.filter((item) => item.id !== id);
//   setProdukList(updatedProdukList);
//   // Perbarui juga searchResults jika id dihapus dari hasil pencarian
//   if (isSearching) {
//     const updatedSearchResults = searchResults.filter(
//       (item) => item.id !== id
//     );
//     setSearchResults(updatedSearchResults);
//   }
// };

// const editProduk = (
//   id,
//   newNamaProduk,
//   newSatuanProduk,
//   newKategoriProduk,
//   newHargaBeliProduk,
//   newHargaJualProduk
// ) => {
//   const edit = produkList.map((list) => {
//     if (list.id === id) {
//       return {
//         ...list,
//         nama: newNamaProduk,
//         satuan: newSatuanProduk,
//         kategori: newKategoriProduk,
//         hargaBeli: newHargaBeliProduk,
//         hargaJual: newHargaJualProduk,
//       };
//     }
//     return list;
//   });
//   setProdukList(edit);
//   // Perbarui juga searchResults jika id ada dalam hasil pencarian
//   if (isSearching) {
//     const updatedSearchResults = searchResults.map((item) => {
//       if (item.id === id) {
//         return {
//           ...item,
//           nama: newNamaProduk,
//           satuan: newSatuanProduk,
//           kategori: newKategoriProduk,
//           hargaBeli: newHargaBeliProduk,
//           hargaJual: newHargaJualProduk,
//         };
//       }
//       return item;
//     });
//     setSearchResults(updatedSearchResults);
//   }
// };

// // Fungsi untuk mencari Produk berdasarkan nama
// const searchProduk = () => {
//   const results = produkList.filter((item) =>
//     item.nama.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   setSearchResults(results);
//   setIsSearching(true);
// };

// // Fungsi untuk menutup table pecarian
// const stopSearch = () => {
//   setIsSearching(false);
//   setSearchTerm(""); // Mengosongkan input pencarian saat pencarian dihentikan
//   setSearchResults([]);
// };
