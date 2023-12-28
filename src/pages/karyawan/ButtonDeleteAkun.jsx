/* eslint-disable react/prop-types */

import { useState } from "react";
import ModalDelete from "../../components/ui/ModalDelete";
import DeleteConfirmAkun from "./DeleteConfirmAkun";
const ButtonDeleteAkun = ({ akun, id, idUserLogin, getUsers }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <ModalDelete
        isVisible={showModal}
        onClick={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        buttonLabel={
          <div className=" py-1 text-sm text-white font-semibold rounded-lg  w-[70px] border border-colorTwo dark:border-colorDarkTwo  hover:text-white hover:bg-red-700 bg-red-600 hover:border-transparent dark:hover:border-transparent focus:outline-none transition-all ease-in ">
            Delete
          </div>
        }
        // className={`bg-red-700 font-pt_Sans text-colorTwo p-1 transition-all ease-in  hover:scale-95  hover:bg-red-800  rounded  group font-semibold text-md`}
        modalContent={
          <DeleteConfirmAkun
            akun={akun}
            id={id}
            idUserLogin={idUserLogin}
            getUsers={getUsers}
            isVisible={showModal}
            onClose={() => setShowModal(false)}
          />
        }
      ></ModalDelete>
    </div>
  );
};

export default ButtonDeleteAkun;
