/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const transaksiListData = () => {
  const [transaksiList, setTransaksiList] = useState([
    // {
    //   invoice: 114,
    //   namaProduk: "makanan",
    //   harga: 12000,
    //   jumlah: 11,
    //   total: 0,
    // tanggal:
    // },
  ]);

  return {
    transaksiList,
    setTransaksiList,
  };
};

export default transaksiListData;


