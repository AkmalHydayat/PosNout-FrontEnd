/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const transaksiListData = () => {
  const [transaksiList, setTransaksiList] = useState([
    // {
    //   barcode: "BRG00007",
    //   namaProduk: "aqua 600ml",
    //   harga: "3000.00",
    //   jumlah: 2,
    //   total: 6000,
    // },
    // {
    //   barcode: "BRG00009",
    //   namaProduk: "purelife",
    //   harga: "3500.00",
    //   jumlah: 5,
    //   total: 17500,
    // },
  ]);

  return {
    transaksiList,
    setTransaksiList,
  };
};

export default transaksiListData;
