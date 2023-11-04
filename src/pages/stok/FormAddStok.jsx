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
      console.log(response.data.message);
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
    }
  };

  // Panggil fungsi dengan barcodeProduk dan jumlah yang sesuai

  return (
    <div className={` font-pt_Sans`}>
      <div className="border-b-[1px] border-gray-300">
        <div className="px-6 py-3 text-2xl  font-semibold  text-purple-600">
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
            AlertMessage("berhasil menambahkan stok", 350, "success");
          }
        }}
      >
        <div className="space-y-2">
          <div className="px-6 mt-2">
            <label htmlFor="" className="text-gray-900 font-medium text-lg">
              Tanggal
            </label>
            <input
              type="text"
              className="w-full h-10 focus:outline-none bg-gray-300 border-gray-300 border-[1px] text-gray-900 rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 cursor-default"
              placeholder=""
              value={tanggalSekarang}
              readOnly
            />
          </div>
          <div className="px-6   ">
            <label htmlFor="" className="text-gray-900 font-medium text-lg">
              Barcode
            </label>
            <div className="flex w-full " onClick={() => setIsHide(!isHide)}>
              <input
                type="text"
                className={`${emptyBarcodeStyle} cursor-pointer w-full h-10 focus:outline-none bg-gray-300 border-gray-300 border-[1px] text-gray-900 rounded-s px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 `}
                placeholder=""
                readOnly
                value={idSelect ? idSelect : "-"}
              />
              <div className="w-10 bg-purple-600  rounded-e flex justify-center items-center cursor-pointer">
                <BiSearchAlt className="text-colorTwo  text-2xl" />
              </div>
            </div>
          </div>
          <div className="px-6 ">
            <label htmlFor="" className="text-gray-900 font-medium text-lg">
              Nama Produk
            </label>
            <input
              type="text"
              className="w-full h-10 focus:outline-none  bg-gray-300 border-gray-300 border-[1px] text-gray-900 rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 cursor-default"
              placeholder=""
              readOnly
              value={namaSelect ? namaSelect : "-"}
            />
          </div>
          <div className="px-6 ">
            <label htmlFor="" className="text-gray-900 font-medium text-lg">
              Jumlah
            </label>
            <input
              type="text"
              className={`${emptyJumlahStyle} w-full h-10 font-pt_Sans focus:outline-none  focus:shadow-sm2 focus:bg-colorTwo focus:shadow-gray-300 bg-colorOne ease-in border-gray-300 focus:border-none  transition-all  font-medium border-[1px] text-gray-900 rounded px-2 text-base placeholder:text-sm placeholder:font-normal placeholder:text-gray-600 `}
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
            className={`bg-colorOne text-purple-600 w-16 shadow-cus2 hover:shadow-cus2 hover:shadow-gray-500 shadow-gray-400  transition-all ease-in  hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md`}
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
