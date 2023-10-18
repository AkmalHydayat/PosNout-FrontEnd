import { useState } from "react";

const ProdukListData = () => {
  const [produkList, setProdukList] = useState([
    {
      id: "BRG00001",
      nama: "le mineral",
      satuan: "pcs",
      kategori: "minuman",
      hargaBeli: "2000",
      hargaJual: "3000",
      stok: 0,
    },
    {
      id: "BRG00002",
      nama: "aqua ",
      satuan: "pcs",
      kategori: "minuman",
      hargaBeli: "2000",
      hargaJual: "3000",
      stok: 0,
    },
    {
      id: "BRG00003",
      nama: "purelife ",
      satuan: "pcs",
      kategori: "minuman",
      hargaBeli: "2000",
      hargaJual: "3000",
      stok: 0,
    },
  ]);

  return {
    produkList,
    setProdukList,
  };
};

export default ProdukListData;
