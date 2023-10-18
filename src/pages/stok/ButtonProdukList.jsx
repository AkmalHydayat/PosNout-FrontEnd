/* eslint-disable react/prop-types */

import { useState } from "react";
import ProdukListModal from "./ProdukListModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import FormAddStok from "./FormAddStok";
// import TableProduk from "../daftarProduk/TableProduk";
import TableProdukList from "./TableProdukList";

const ButtonProdukList = () => {
  const [showModalProdukList, setShowModalProdukList] = useState(false);

  return (
    <div>
      <ProdukListModal
        isVisible={showModalProdukList}
        onClick={() => setShowModalProdukList(true)}
        onClose={() => setShowModalProdukList(false)}
        buttonLabel={
          <div className="text-base font-semibold">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        }
        modalContent={
          <TableProdukList
            isVisible={showModalProdukList}
            onClose={() => setShowModalProdukList(false)}
          />
        }
        className={`px-3 py-1 font-semibold text-md`}
      ></ProdukListModal>
    </div>
  );
};

export default ButtonProdukList;
