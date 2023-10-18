/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

/* eslint-disable react/prop-types */
const FormEditStok = ({ isVisible, onClose, itemToEdit, editStok, id }) => {
  if (!isVisible) return null;

  const [stok, setStok] = useState(itemToEdit);

  return (
    <div className="">
      <div className="border-b-2 border-gray-100">
        <div className="px-6 py-3 text-2xl text-secondary">Edit Data</div>
      </div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          editStok(id, stok);
          onClose();
        }}
      >
        <div className="px-6 py-4 space-y-2 text-start ">
          <label htmlFor="" className="text-secondary ">
            Stok
          </label>
          <input
            type="text"
            className="w-full h-10 focus:outline-none bg-gray-100 text-secondary rounded px-2 text-base"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
          />
        </div>
        <div className="px-6 pb-4 space-x-2 text-base flex justify-end">
          <button
            type="submit"
            className="bg-secondary text-thrd font-semibold px-2 py-1 rounded  hover:shadow-thrd hover:shadow-sm2"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditStok;
