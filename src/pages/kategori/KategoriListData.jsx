import { useState } from "react";

const KategoriListData = () => {
  const [kategoriList, setKategoriList] = useState([
    { id: 1, nama: "makanan" },
    { id: 2, nama: "minuman" },
    { id: 3, nama: "snack" },
    { id: 4, nama: "kebersihan" },
    { id: 5, nama: "kesehatan" },
    { id: 6, nama: "alat rumah tangga" },
  ]);

  return {
    kategoriList,
    setKategoriList,
  };
};

export default KategoriListData;
