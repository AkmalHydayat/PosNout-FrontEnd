/* eslint-disable react-hooks/rules-of-hooks */

import ButtonBgSec from "../components/ui/ButtonBgSec";

/* eslint-disable react/prop-types */
const deleteConfirm = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="">
      <div className="border-b-[1px] border-gray-300">
        <div className="px-6 py-3 text-2xl text-secondary">Hapus Data</div>
      </div>
      <div className="py-8 text-base  font-normal px-3">
        Apakah anda yakin ingin menghapus{" "}
        {/* <span className="font-bold">{namaKategori}</span> dari list {list}? */}
      </div>
      <div className="border-t-[1px] border-gray-300 py-3 space-x-3">
        <ButtonBgSec
          className={
            "text-center w-16 py-[2px] bg-purple-600 hover:bg-purple-700 rounded text-white"
          }
          // onClick={() => handleDelete(id)}
        >
          Ya
        </ButtonBgSec>
        <ButtonBgSec
          className={
            "text-center w-16 py-[2px] rounded text-white bg-gray-600 hover:bg-gray-700"
          }
          onClick={() => onClose()}
        >
          Tidak
        </ButtonBgSec>
      </div>
    </div>
  );
};

export default deleteConfirm;
