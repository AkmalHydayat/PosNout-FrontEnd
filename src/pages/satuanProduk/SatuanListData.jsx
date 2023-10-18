import { useState } from "react";

const SatuanListData = () => {
  const [satuanList, setSatuanList] = useState([
    { id: 1, nama: "pcs" },
    { id: 2, nama: "lusin" },
    { id: 3, nama: "dus" },
    { id: 4, nama: "box" },
    { id: 5, nama: "rim" },
  ]);

  return {
    satuanList,
    setSatuanList,
  };
};

export default SatuanListData;
