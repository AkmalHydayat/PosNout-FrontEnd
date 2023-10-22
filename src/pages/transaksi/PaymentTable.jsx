/* eslint-disable react/prop-types */

export const  PaymentTable = ({ transaksiList }) => {
  return (
    <div>
      <div className="  py-5 rounded">
        <div className="text-xl  text-center  font-bold">Data Barang</div>
        <div
          className={`${
            transaksiList.length > 8 ? "h-96 overflow-y-scroll" : ""
          }   px-6 py-5`}
        >
          <table className="">
            <thead className="border-[1px] border-gray-300 ">
              <tr className="text-center font-bold text-base text-gray-900">
                <td className="w-10 py-2 border-[1px] border-gray-300 ">No</td>
                <td className="w-32 py-2 border-[1px] border-gray-300">
                  Barcode
                </td>
                <td className="w-72 py-2 border-[1px] border-gray-300">
                  Nama Produk
                </td>
                <td className="w-28 py-2 border-[1px] border-gray-300">
                  Harga
                </td>
                <td className="w-14  py-2 border-[1px] border-gray-300">Qty</td>
                <td className="w-32 py-2 border-[1px] border-gray-300">
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
                  <td className="w-10 py-2 border-[1px] border-gray-300 ">
                    {index + 1}
                  </td>
                  <td className="w-32 py-2 border-[1px] border-gray-300">
                    {item.barcode}
                  </td>
                  <td className="w-72 py-2 border-[1px] border-gray-300">
                    {item.namaProduk}
                  </td>
                  <td className="w-28 py-2 border-[1px] border-gray-300">
                    {item.harga}
                  </td>
                  <td className="w-14 py-2 border-[1px] border-gray-300">
                    {item.jumlah}
                  </td>
                  <td className="w-32 py-2 border-[1px] border-gray-300">
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
