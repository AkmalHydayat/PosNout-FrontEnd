/* eslint-disable react/prop-types */

export const PaymentTable = ({ transaksiList }) => {
  return (
    <div className="bg-colorTwo dark:bg-colorDarkTwo rounded">
      <div className="  py-5 ">
        <div className="text-xl  text-center text-purple-600 font-bold">
          Data Barang
        </div>
        <div
          className={`${
            transaksiList.length > 8 ? "h-96 overflow-y-scroll" : ""
          }   px-6 py-5`}
        >
          <table className="border-[1px] border-gray-900 dark:border-gray-300">
            <thead className="border-b-[1px] border-gray-900 dark:border-gray-300 bg-colorTwo text-colorDarkOne dark:text-colorTwo dark:bg-colorDarkTwo transition-colors ease-in">
              <tr className="text-center font-bold text-base bg-purple-600 text-colorTwo">
                <td className="w-10 py-2 border-s-[1px] border-gray-900 dark:border-gray-300 ">
                  No
                </td>
                <td className="w-32 py-2 border-s-[1px] border-gray-900 dark:border-gray-300">
                  Barcode
                </td>
                <td className="w-72 py-2 border-s-[1px] border-gray-900 dark:border-gray-300">
                  Nama Produk
                </td>
                <td className="w-28 py-2 border-s-[1px] border-gray-900 dark:border-gray-300">
                  Harga
                </td>
                <td className="w-14  py-2 border-s-[1px] border-gray-900 dark:border-gray-300">
                  Qty
                </td>
                <td className="w-32 py-2 border-x-[1px] border-gray-900 dark:border-gray-300">
                  Total
                </td>
              </tr>
            </thead>
            <tbody>
              {transaksiList.map((item, index) => (
                <tr
                  className={`text-center ${
                    index % 2
                      ? `bg-colorTwo dark:bg-colorDarkTwo text-colorDarkOne dark:text-colorTwo transition-all ease-in`
                      : `bg-gray-100 dark:bg-colorDarkOne/50 text-colorDarkOne dark:text-colorTwo transition-all ease-in`
                  }  font-normal text-base`}
                  key={index}
                >
                  <td className="w-10 py-1 border-s-[1px] border-gray-900 dark:border-gray-300 ">
                    {index + 1}
                  </td>
                  <td className="w-32 py-1 border-s-[1px] border-gray-900 dark:border-gray-300">
                    {item.barcode}
                  </td>
                  <td className="w-72 py-1 border-s-[1px] border-gray-900 dark:border-gray-300">
                    {item.namaProduk}
                  </td>
                  <td className="w-28 py-1 border-s-[1px] border-gray-900 dark:border-gray-300">
                    {item.harga.toLocaleString("id-ID")}
                  </td>
                  <td className="w-14 py-1 border-s-[1px] border-gray-900 dark:border-gray-300">
                    {item.jumlah}
                  </td>
                  <td className="w-32 py-1 border-x-[1px] border-gray-900 dark:border-gray-300">
                    {item.total.toLocaleString("id-ID")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
