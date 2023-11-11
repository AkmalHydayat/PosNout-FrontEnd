import { useEffect, useState } from "react";

import LayoutPage from "../../layout/PageLayout";
import ButtonAddSatuan from "./ButtonAddSatuan";
import TableSatuan from "./TableSatuan";
import { getSatuans } from "../../utils/api";
import AlertShow from "../../components/ui/Alert";

/* eslint-disable react/prop-types */
const Satuan = () => {
  const [satuans, setSatuans] = useState([]);
  const AlertMessage = (message, width, icon) => {
    AlertShow(message, width, icon);
  };
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
      <div className={` p-6  font-pt_Sans`}>
        <div className="font-medium text-3xl  mb-3 text-gray-900 dark:text-colorTwo transition-colors ease-in">
          Satuan Produk
        </div>
        <div className="rounded bg-colorTwo transition-all ease-in shadow-md border-[1px] border-gray-200 shadow-gray-300 dark:shadow-black dark:border-colorDarkOne dark:bg-colorDarkTwo ">
          <div className="px-6 py-3 border-b-[1px] transition-all ease-in  border-purple-300 dark:border-colorDarkOne ">
            <ButtonAddSatuan
              satuans={satuans}
              setSatuans={setSatuans}
              AlertMessage={AlertMessage}
            />
          </div>
          <TableSatuan
            satuans={satuans}
            setSatuans={setSatuans}
            AlertMessage={AlertMessage}
          />
        </div>
      </div>
    </LayoutPage>
  );
};

export default Satuan;
