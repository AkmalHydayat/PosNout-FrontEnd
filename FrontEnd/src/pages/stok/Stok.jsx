import { useState } from "react";

import LayoutPage from "../../layout/PageLayout";
import ButtonAddStok from "./ButtonAddStok";
import TableStok from "./TableStok";
import DateNow from "../../components/Date";

/* eslint-disable react/prop-types */
const Stok = () => {
  const { hari, month, year } = DateNow();
  const [stokList, setStokList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const addStok = (id, nama, jumlah, dateNow) => {
    const newStokList = {
      tanggal: dateNow,
      id: id,
      nama: nama,
      jumlah: jumlah,
    };
    setStokList([...stokList, newStokList]);
  };

  // Fungsi untuk mencari stok berdasarkan nama
  const searchStok = () => {
    const results = stokList.filter((item) =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setIsSearching(true);
  };

  // Fungsi untuk menutup table pecarian
  const stopSearch = () => {
    setIsSearching(false);
    setSearchTerm(""); // Mengosongkan input pencarian saat pencarian dihentikan
    setSearchResults([]);
  };

  return (
    <LayoutPage>
      <div className={` p-6  font-titilium`}>
        <div className="font-semibold text-3xl mb-3 text-gray-900">
          Stok Produk
        </div>
        <div className="rounded bg-colorTwo shadow-lg shadow-gray-400">
          <div className="px-6 py-3 border-b-2 border-gray-400">
            <ButtonAddStok
              tanggal={hari}
              bulan={month}
              tahun={year}
              addStok={addStok}
            />
          </div>
          <TableStok
            searchStok={searchStok}
            stopSearch={stopSearch}
            stokList={stokList}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            searchResults={searchResults}
            isSearching={isSearching}
          />
        </div>
      </div>
    </LayoutPage>
  );
};

export default Stok;

