import { useEffect, useState } from "react";
import LayoutPage from "../../layout/PageLayout";
import ButtonAddKategori from "./ButtonAddKategori";
import TableKategori from "./TableKategori";
import { getKategoris } from "../../utils/api";
import AlertShow from "../../components/ui/Alert";

const Kategori = () => {
  const [kategoris, setKategoris] = useState([]);
  const AlertMessage = (message, width, icon) => {
    AlertShow(message, width, icon);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getKategoris();
        setKategoris(data);
      } catch (error) {
        // Handle error jika diperlukan
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <LayoutPage>
      <div className={`p-6 font-pt_Sans `}>
        <div className="font-medium text-3xl  mb-3 text-gray-900 dark:text-colorTwo">
          Kategori Produk
        </div>
        <div className="rounded bg-colorTwo shadow-md border-[1px] border-gray-200 shadow-gray-300 dark:shadow-black dark:border-colorDarkOne dark:bg-colorDarkTwo ">
          <div className="px-6 py-3 border-b-[1px]  border-purple-300 dark:border-colorDarkOne ">
            <ButtonAddKategori
              kategoris={kategoris}
              setKategoris={setKategoris}
              AlertMessage={AlertMessage}
            />
          </div>
          <TableKategori
            kategoris={kategoris}
            setKategoris={setKategoris}
            AlertMessage={AlertMessage}
          />
        </div>
      </div>
    </LayoutPage>
  );
};

export default Kategori;

// const addKategori = (nama) => {
//   const newId = lastId + 1;
//   const newKategori = {
//     id: "KTG" + newId.toString().padStart(3, "0"),
//     nama: nama,
//   };
//   setLastId(newId);
//   setKategoriList([...kategoriList, newKategori]);
// };
