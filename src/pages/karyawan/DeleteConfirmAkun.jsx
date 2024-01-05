/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import ButtonBgSec from "../../components/ui/ButtonBgSec";
import axios from "axios";
import AlertShow from "../../components/ui/Alert";
const AlertMessage = (message, width, icon) => {
  AlertShow(message, width, icon);
};
const DeleteConfirmAkun = ({ akun, id, idUserLogin, getUsers, onClose }) => {
  const handleDelete = async (id) => {
    if (id === idUserLogin) {
      return AlertMessage("akun sedang digunakan! ", 310, "warning");
    }
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      AlertMessage("Berhasil Menghapus akun! ", 340, "success");
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="border-b-[1px] border-gray-300">
        <div className="px-6 py-3 text-2xl text-purple-600 flex justify-center ">
          Hapus Akun
        </div>
      </div>
      <div className="py-8 text-base  font-normal px-3 dark:text-colorTwo">
        Apakah anda yakin ingin menghapus akun dengan username {""}
        <span className="font-bold underline underline-offset-2 decoration-purple-600">
          {akun}
        </span>
        <span> ?</span>
      </div>
      <div className="border-t-[1px] flex justify-center border-gray-300 py-3 space-x-3">
        <ButtonBgSec
          className={`bg-colorTwo dark:border-[1px] w-[68px] dark:bg-colorDarkTwo dark:shadow-black  dark:text-colorTwo  dark:hover:text-purple-600 dark:hover:shadow-sm2 dark:hover:shadow-black hover:dark:shadow-purple-600 dark:shadow-cus2 cursor-pointer shadow-sm2 text-purple-600  dark:border-purple-600 hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover: hover:text-white  hover:bg-purple-700 rounded  group py-0.5  `}
          onClick={() => {
            handleDelete(id);
            onClose();
          }}
        >
          Ya
        </ButtonBgSec>

        <ButtonBgSec
          className={`bg-colorTwo dark:border-[1px] w-[68px] dark:bg-colorDarkTwo dark:shadow-black  dark:text-colorTwo  dark:hover:text-purple-600 dark:hover:shadow-sm2 dark:hover:shadow-black hover:dark:shadow-purple-600 dark:shadow-cus2 cursor-pointer shadow-sm2 text-purple-600  dark:border-purple-600 hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover: hover:text-white  hover:bg-purple-700 rounded  group py-0.5  `}
          onClick={() => onClose()}
        >
          Tidak
        </ButtonBgSec>
      </div>
    </div>
  );
};

export default DeleteConfirmAkun;
