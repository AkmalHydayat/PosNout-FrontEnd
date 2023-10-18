import { useEffect, useState } from "react";

import LayoutPage from "../../layout/PageLayout";
import ButtonAddSatuan from "./ButtonAddSatuan";
import TableSatuan from "./TableSatuan";
import { getSatuans } from "../../utils/api";

/* eslint-disable react/prop-types */
const Satuan = () => {
  const [satuans, setSatuans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSatuans();
        setSatuans(data);
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
          Satuan Produk
        </div>
        <div className="rounded bg-colorTwo shadow-lg shadow-gray-400">
          <div className="px-6 py-3 border-b-2 border-gray-400">
            <ButtonAddSatuan satuans={satuans} setSatuans={setSatuans} />
          </div>
          <TableSatuan satuans={satuans} setSatuans={setSatuans} />
        </div>
      </div>
    </LayoutPage>
  );
};

export default Satuan;
