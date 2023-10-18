import { useEffect, useState } from "react";

import LayoutPage from "../../layout/PageLayout";
import ButtonAddStok from "./ButtonAddStok";
import TableStok from "./TableStok";
import { getStoks } from "../../utils/api";

/* eslint-disable react/prop-types */
const Stok = () => {
  const [stoks, setStoks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStoks();
        setStoks(data);
      } catch (error) {
        // Handle error jika diperlukan
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <LayoutPage>
      <div className={` p-6  font-titilium`}>
        <div className="font-semibold text-3xl mb-3 text-gray-900">
          Stok Produk
        </div>
        <div className="rounded bg-colorTwo shadow-lg shadow-gray-400">
          <div className="px-6 py-3 border-b-2 border-gray-400">
            <ButtonAddStok setStoks={setStoks} />
          </div>
          <TableStok stoks={stoks} setStoks={setStoks} />
        </div>
      </div>
    </LayoutPage>
  );
};

export default Stok;
