/* eslint-disable react/prop-types */

export const PaymentTable = ({ transaksiList }) => {
  return (
    <div>
      <div className="  py-5 rounded">
        <div className="text-xl  text-center text-purple-600 font-bold">Data Barang</div>
        <div
          className={`${
            transaksiList.length > 8 ? "h-96 overflow-y-scroll" : ""
          }   px-6 py-5`}
        >
          <table className="border-b-[1px] border-gray-500">
            <thead className="border-[1px] border-gray-500 ">
              <tr className="text-center font-bold text-base bg-purple-600 text-colorTwo">
                <td className="w-10 py-2 border-s-[1px] border-gray-500 ">
                  No
                </td>
                <td className="w-32 py-2 border-s-[1px] border-gray-500">
                  Barcode
                </td>
                <td className="w-72 py-2 border-s-[1px] border-gray-500">
                  Nama Produk
                </td>
                <td className="w-28 py-2 border-s-[1px] border-gray-500">
                  Harga
                </td>
                <td className="w-14  py-2 border-s-[1px] border-gray-500">
                  Qty
                </td>
                <td className="w-32 py-2 border-s-[1px] border-gray-500">
                  Total
                </td>
              </tr>
            </thead>
            <tbody>
              {transaksiList.map((item, index) => (
                <tr
                  className={`text-center ${
                    index % 2 ? "  " : "bg-gray-200"
                  }  font-normal text-base text-gray-900`}
                  key={index}
                >
                  <td className="w-10 py-1 border-s-[1px] border-gray-500 ">
                    {index + 1}
                  </td>
                  <td className="w-32 py-1 border-s-[1px] border-gray-500">
                    {item.barcode}
                  </td>
                  <td className="w-72 py-1 border-s-[1px] border-gray-500">
                    {item.namaProduk}
                  </td>
                  <td className="w-28 py-1 border-s-[1px] border-gray-500">
                    {item.harga}
                  </td>
                  <td className="w-14 py-1 border-s-[1px] border-gray-500">
                    {item.jumlah}
                  </td>
                  <td className="w-32 py-1 border-x-[1px] border-gray-500">
                    {item.total}
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
