import { useEffect, useState } from "react";
import LayoutPage from "../../layout/PageLayout";
import ButtonAddKategori from "./ButtonAddKategori";
import TableKategori from "./TableKategori";
import { getKategoris } from "../../utils/api";

const Kategori = () => {
  const [kategoris, setKategoris] = useState([]);

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
      <div className={`p-6 font-titilium`}>
        <div className="font-semibold text-3xl mb-3 text-gray-900">
          Kategori Produk
        </div>
        <div className="rounded bg-colorTwo shadow-lg shadow-gray-400">
          <div className="px-6 py-3 border-b-2 border-gray-400 ">
            <ButtonAddKategori
              kategoris={kategoris}
              setKategoris={setKategoris}
            />
          </div>
          <TableKategori kategoris={kategoris} setKategoris={setKategoris} />
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
