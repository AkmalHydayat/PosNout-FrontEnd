/* eslint-disable react-hooks/rules-of-hooks */
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
import { getProduks, getStoks } from "../../utils/api";
import DateNow from "../../components/Date";
import AlertShow from "../../components/ui/Alert";
/* eslint-disable react/prop-types */
const FormAddStok = ({
  setProduks,
  getIdName,
  onClose,
  isHide,
  setIsHide,
  idSelect,
  namaSelect,
  setStoks,
  setJumlah,
  jumlah,
  isBarcodeEmpty,
  setIsBarcodeEmpty,
  isJumlahEmpty,
  setIsJumlahEmpty,
}) => {
  const AlertMessage = (message, width, icon) => {
    AlertShow(message, width, icon);
  };
  const { hari, month, year } = DateNow();

  const emptyBarcodeStyle = isBarcodeEmpty ? "border-[1px] border-red-500" : "";
  const emptyJumlahStyle = isJumlahEmpty ? "border-[1px] border-red-500" : "";
  const tanggalSekarang = `${hari}-${month}-${year}`;

  // Definisikan fungsi untuk menambah stok pada
  const tambahStok = async (barcodeProduk, jumlah, namaProduk, tanggal) => {
    try {
      const response = await axios.post("http://localhost:3000/tambahStok", {
        barcodeProduk: barcodeProduk,
        nama_produk: namaProduk,
        jumlah: jumlah,
        tanggal: tanggal,
      });
      const updatedStoks = await getStoks();
      setStoks(updatedStoks);
      const updatedProduks = await getProduks();
      setProduks(updatedProduks);
      AlertMessage(response.data.message, 350, "success");
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
    }
  };

  // Panggil fungsi dengan barcodeProduk dan jumlah yang sesuai

  return (
    <div className={` font-pt_Sans`}>
      <div className="border-b-[1px] border-gray-300">
        <div className="px-6 py-3 text-2xl font-pt_Sans font-semibold text-purple-600">
          Add Data
        </div>
      </div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (idSelect === "") {
            setIsBarcodeEmpty(true);
          } else if (jumlah === "") {
            setIsJumlahEmpty(true);
          } else {
            tambahStok(idSelect, jumlah, namaSelect, tanggalSekarang);
            setJumlah("");
            getIdName("", "");
            onClose();
          }
        }}
      >
        <div className="space-y-3">
          <div className="px-6 mt-2">
            <label
              htmlFor=""
              className="text-gray-900 font-medium text-lg dark:text-colorTwo"
            >
              Tanggal
            </label>
            <input
              type="text"
              className="dark:border-[1px] dark:border-colorTwo cursor-default w-full h-10 focus:outline-none bg-gray-300 dark:bg-colorDarkOne font-medium dark:text-colorTwo text-gray-900 rounded px-2 text-base"
              placeholder=""
              value={tanggalSekarang}
              readOnly
            />
          </div>
          <div className="px-6   ">
            <label
              htmlFor=""
              className="text-gray-900 dark:text-colorTwo font-medium text-lg"
            >
              Barcode
            </label>
            <div className="flex w-full " onClick={() => setIsHide(!isHide)}>
              <input
                type="text"
                className={`${emptyBarcodeStyle} dark:border-[1px] dark:border-colorTwo dark:border-e-0 cursor-pointer w-full h-10 focus:outline-none bg-gray-300 dark:bg-colorDarkOne dark:text-colorTwo text-gray-900 font-semibold rounded-s px-2 text-base`}
                placeholder=""
                readOnly
                value={idSelect ? idSelect : "-"}
              />
              <div className="w-10 bg-purple-600 dark:border-[1px] border-colorTwo dark:border-s-0 rounded-e flex justify-center items-center cursor-pointer">
                <BiSearchAlt className="text-colorTwo  text-2xl" />
              </div>
            </div>
          </div>
          <div className="px-6 ">
            <label
              htmlFor=""
              className="text-gray-900 dark:text-colorTwo font-medium text-lg"
            >
              Nama Produk
            </label>
            <input
              type="text"
              className="cursor-default w-full h-10 focus:outline-none bg-gray-300 dark:bg-colorDarkOne dark:text-colorTwo text-gray-900 rounded font-medium px-2 text-base dark:border-[1px] dark:border-colorTwo "
              placeholder=""
              readOnly
              value={namaSelect ? namaSelect : "-"}
            />
          </div>
          <div className="px-6 ">
            <label
              htmlFor=""
              className="text-gray-900 dark:text-colorTwo font-medium text-lg"
            >
              Jumlah
            </label>
            <input
              type="text"
              className={`${emptyJumlahStyle} w-full h-10 font-pt_Sans focus:outline-none   focus:bg-colorTwo  hover:border-[1px] hover:border-purple-600 dark:focus:shadow-black/50 focus:scale-[1.01] bg-colorTwo dark:focus:bg-colorTwo dark:bg-colorDarkTwo dark:text-colorTwo/80 focus:dark:text-colorDarkOne border-gray-300 focus:border-purple-600  transition-transform ease-in  font-medium border-[1px]  rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600  `}
              placeholder="Jumlah"
              value={jumlah}
              onChange={(e) => {
                const inputValue = e.target.value;
                const sanitizedValue = inputValue.replace(/[^0-9]/g, "");

                if (sanitizedValue.charAt(0) === "0") {
                  // Angka 0 berada di awal inputan, jadi kita menghapusnya
                  setJumlah(sanitizedValue.slice(1));
                } else {
                  setJumlah(sanitizedValue.toLowerCase());
                }
              }}
            />
          </div>
        </div>

        <div className="px-6 py-4  space-x-2 text-base flex justify-end ">
          <button
            className={`bg-colorTwo dark:border-[1px]  dark:bg-colorDarkTwo dark:shadow-black  dark:text-colorTwo  dark:hover:text-purple-600 dark:hover:shadow-sm2 dark:hover:shadow-black hover:dark:shadow-purple-600 dark:shadow-cus2 cursor-pointer shadow-sm2 text-purple-600  dark:border-purple-600 hover:border-purple-600 shadow-gray-300 transition-all ease-in hover:shadow-gray-50 hover: hover:text-white  hover:bg-purple-700 rounded group px-4 py-1`}
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddStok;
