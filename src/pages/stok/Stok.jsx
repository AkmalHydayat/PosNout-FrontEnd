import { useEffect, useState } from "react";

import LayoutPage from "../../layout/PageLayout";
import ButtonAddStok from "./ButtonAddStok";
import TableStok from "./TableStok";
import { getProduks, getStoks } from "../../utils/api";

/* eslint-disable react/prop-types */
const Stok = () => {
  const [stoks, setStoks] = useState([]);
  const [produks, setProduks] = useState([]);

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
      <div className={` p-6  font-pt_Sans`}>
        <div className="font-medium text-3xl  mb-3 text-gray-900">
          Stok Produk
        </div>
        <div className="rounded bg-colorTwo shadow-lg border-[1px] border-gray-200 shadow-gray-300 ">
          <div className="px-6 py-3 border-b-[1px]  border-purple-300 ">
            <ButtonAddStok
              setStoks={setStoks}
              produks={produks}
              setProduks={setProduks}
            />
          </div>
          <TableStok stoks={stoks} setStoks={setStoks} />
        </div>
      </div>
    </LayoutPage>
  );
};

export default Stok;
