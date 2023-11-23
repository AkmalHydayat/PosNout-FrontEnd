<div className="">
  <div
    className={`p-6 space-y-6 font-pt_Sans text-base font-medium text-gray-950 opacity-100 `}
  >
    {/* row 1 */}
    <div className="h-[165px] flex space-x-6 ">
      <div className="w-6/12 flex space-x-6">
        <div
          className={` shadow-md shadow-black/20  transition-all ease-in dark:shadow-black bg-gradient-to-br  from-fuchsia-600 dark:to-cyan-600/60 to-cyan-500 p-3 w-full rounded-md`}
        >
          <div className="flex justify-between">
            <div className="w-2/3 ">Penjualan Hari ini</div>
            {/* gunakan transaksiLog, lalu filter table sesuai dengan hari atau tanggal yang berlangsung (karena /hari), lalu ambil properti total pada semua data filteran tersebut dan jumlahkan semuanya */}
            <div className={`   rounded me-3`}>
              <BsBagCheck className="text-[36px] rounded p-[6px] relative text-gray-900 dark:text-colorTwo transition-all ease-in" />
            </div>
          </div>
          <div className="text-[38px] text-end me-2 mt-10 font-semibold   text-gray-900 dark:text-colorTwo transition-all ease-in">
            {" "}
            {penjualanPerHari.length === 0
              ? 0
              : penjualanPerHari.toLocaleString("id-ID")}
          </div>
        </div>
        <div
          className={` shadow-md shadow-black/20 transition-all ease-in dark:shadow-black bg-gradient-to-br from-rose-600 dark:to-orange-600/60 to-orange-500  p-3 w-full rounded-md `}
        >
          <div className="flex justify-between">
            {/* gunakan transaksiLog, lalu filter table berdasarkan transaksilog.keuntungan  sesuai dengan hari atau tanggal yang berlangsung (karena /hari), lalu ambil properti total pada semua data filteran tersebut dan jumlahkan semuanya */}

            <div className="w-2/3  ">Keuntungan Hari ini</div>
            <div className={`   rounded me-3`}>
              <LiaFileInvoiceDollarSolid className="text-[36px] rounded p-[6px] relative text-gray-900 dark:text-colorTwo transition-all ease-in" />
            </div>
          </div>
          <div className="text-[38px] text-end me-2 mt-10 font-semibold text-gray-900 dark:text-colorTwo transition-all ease-in ">
            {keuntunganPerHari.length === 0
              ? 0
              : keuntunganPerHari.toLocaleString("id-ID")}
          </div>
        </div>
      </div>

      <div className="w-6/12 flex space-x-6">
        <div
          className={` shadow-md shadow-black/20  transition-all ease-in dark:shadow-black bg-gradient-to-br  from-green-600 to-teal-500 dark:to-teal-600/60 p-3 w-3/4 rounded-md`}
        >
          <div className="flex justify-between">
            <div className="w-2/3 ">Total kas</div>
            {/* gunakan transaksiLog, lalu filter table sesuai dengan hari atau tanggal yang berlangsung (karena /hari), lalu ambil properti total pada semua data filteran tersebut dan jumlahkan semuanya */}
            <div className={`   rounded me-3`}>
              <BsBagCheck className="text-[36px] rounded p-[6px] relative text-gray-900 dark:text-colorTwo transition-all ease-in" />
            </div>
          </div>
          <div className="text-[38px] text-end me-2 mt-10 font-semibold   text-gray-900 dark:text-colorTwo transition-all ease-in">
            {" "}
            {kas.length === 0 ? 0 : kas.toLocaleString("id-ID")}
          </div>
        </div>
        <div
          className={` shadow-md shadow-black/20 transition-all ease-in dark:shadow-black bg-gradient-to-br from-yellow-600  dark:to-lime-600/60 to-lime-500  p-3 w-3/5 rounded-md `}
        >
          <div className="flex justify-between">
            {/* gunakan transaksiLog, lalu filter table berdasarkan transaksilog.keuntungan  sesuai dengan hari atau tanggal yang berlangsung (karena /hari), lalu ambil properti total pada semua data filteran tersebut dan jumlahkan semuanya */}

            <div className="w-2/3  ">Transaksi/hari</div>
            <div className={`   rounded`}>
              <LiaFileInvoiceDollarSolid className="text-[36px] rounded p-[6px] relative text-gray-900 dark:text-colorTwo transition-all ease-in" />
            </div>
          </div>
          <div className="text-[38px] text-end me-2 mt-10 font-semibold text-gray-900 dark:text-colorTwo transition-all ease-in ">
            123
          </div>
        </div>
      </div>
    </div>
    {/* row 2 */}
    <div className=" flex space-x-6 w-full">
      <div className="w-6/12">
        <div
          className={`shadow-md shadow-black/20   transition-all ease-in dark:shadow-black bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 rounded-md border-[1px] border-gray-300`}
        >
          <div className="flex justify-between items-center">
            <span>Grafik Penjualan/Hari</span>
            <span
              className={`bg-colorTwo transition-all ease-in  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo rounded me-3 mt-1 shadow-sm2 shadow-black/20 dark:shadow-black/40`}
            >
              <PiChartLineUpLight className="text-[39px] rounded  p-[6px] relative text-purple-600  " />
            </span>
          </div>
          <div className="h-[236px] w-12/12 px-4 flex justify-center">
            <LineChart chartDatas={chartDatasSale} options={options} />
          </div>
        </div>
      </div>
      <div className="w-6/12 flex space-x-6">
        <div
          className={`shadow-md shadow-black/20  transition-all ease-in dark:shadow-black border-[1px] border-gray-300 bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 w-10/12 rounded-md `}
        >
          <div className="flex justify-between mb-5 items-center">
            {/* gunakan table daftarproduk lalu cari barang dengan stok kurang dari 10, dan tampilkan  */}
            <div className="w-2/3 mb-2 px-3 ">Barang Paling Laku</div>
            <span
              className={`bg-colorTwo transition-all ease-in  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo rounded me-3 mt-1 shadow-sm2 shadow-black/20 dark:shadow-black/40`}
            >
              <PiChartLineUpLight className="text-[39px] rounded  p-[6px] relative text-purple-600  " />
            </span>
          </div>
          <div
            className={`${
              barang_Terlaris.length > 10 ? "h-[210px] overflow-y-scroll" : ""
            } px-3 `}
          >
            <table className="w-full border-[1px] border-gray-900  dark:border-gray-400">
              <thead className="">
                <tr className="text-center border-[1px] border-gray-900  dark:border-gray-400 w-2/12">
                  <td className=" py-1 border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12 ">
                    Nama Barang
                  </td>
                  <td className="py-1">Total</td>
                </tr>
              </thead>

              <tbody className="text-center text-base">
                {barang_Terlaris.length == 0 ? (
                  <tr>
                    <td className=" text-center py-1 " colSpan={2}>
                      Tidak ada Data.
                    </td>
                  </tr>
                ) : (
                  barang_Terlaris
                    .sort((a, b) => b.jumlah - a.jumlah)
                    .map((item, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2
                            ? ""
                            : "bg-gray-200 dark:bg-colorDarkOne/50 transition-colors ease-in text-colorDarkOne dark:text-colorTwo"
                        }`}
                      >
                        <td className="border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12">
                          {item.namaProduk}
                        </td>
                        <td className="">{item.jumlah}</td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div
          className={`shadow-md shadow-black/20  transition-all ease-in dark:shadow-black border-[1px] border-gray-300 bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 w-10/12 rounded-md `}
        >
          <div className="flex justify-between mb-5 items-center">
            {/* gunakan table daftarproduk lalu cari barang dengan stok kurang dari 10, dan tampilkan  */}
            <div className="w-2/3 mb-2 px-3 ">Barang Paling Laku</div>
            <span
              className={`bg-colorTwo transition-all ease-in  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo rounded me-3 mt-1 shadow-sm2 shadow-black/20 dark:shadow-black/40`}
            >
              <PiChartLineUpLight className="text-[39px] rounded  p-[6px] relative text-purple-600  " />
            </span>
          </div>
          <div
            className={`${
              barang_Terlaris.length > 10 ? "h-[210px] overflow-y-scroll" : ""
            } px-3 `}
          >
            <table className="w-full border-[1px] border-gray-900  dark:border-gray-400">
              <thead className="">
                <tr className="text-center border-[1px] border-gray-900  dark:border-gray-400 w-2/12">
                  <td className=" py-1 border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12 ">
                    Nama Barang
                  </td>
                  <td className="py-1">Total</td>
                </tr>
              </thead>

              <tbody className="text-center text-base">
                {barang_Terlaris.length == 0 ? (
                  <tr>
                    <td className=" text-center py-1 " colSpan={2}>
                      Tidak ada Data.
                    </td>
                  </tr>
                ) : (
                  barang_Terlaris
                    .sort((a, b) => b.jumlah - a.jumlah)
                    .map((item, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2
                            ? ""
                            : "bg-gray-200 dark:bg-colorDarkOne/50 transition-colors ease-in text-colorDarkOne dark:text-colorTwo"
                        }`}
                      >
                        <td className="border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12">
                          {item.namaProduk}
                        </td>
                        <td className="">{item.jumlah}</td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    {/* row 3 */}
    <div className=" flex space-x-6 w-full">
      <div
        className={`shadow-md shadow-black/20 w-10/12  transition-all ease-in dark:shadow-black bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 rounded-md border-[1px] border-gray-300`}
      >
        <div className="flex justify-between items-center">
          <span>Grafik Penjualan/Hari</span>
          <span
            className={`bg-colorTwo transition-all ease-in  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo rounded me-3 mt-1 shadow-sm2 shadow-black/20 dark:shadow-black/40`}
          >
            <PiChartLineUpLight className="text-[39px] rounded  p-[6px] relative text-purple-600  " />
          </span>
        </div>
        <div className="h-[310px] w-12/12 px-4 flex justify-center">
          <LineChart chartDatas={chartDatasSale} options={options} />
        </div>
      </div>
      <div
        className={`shadow-md shadow-black/20  transition-all ease-in dark:shadow-black border-[1px] border-gray-300 bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 w-6/12 rounded-md `}
      >
        <div className="flex justify-between mb-5 items-center">
          {/* gunakan table daftarproduk lalu cari barang dengan stok kurang dari 10, dan tampilkan  */}
          <div className="w-2/3 mb-2 px-3 ">Barang Paling Laku</div>
          <span
            className={`bg-colorTwo transition-all ease-in  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo rounded me-3 mt-1 shadow-sm2 shadow-black/20 dark:shadow-black/40`}
          >
            <PiChartLineUpLight className="text-[39px] rounded  p-[6px] relative text-purple-600  " />
          </span>
        </div>
        <div
          className={`${
            barang_Terlaris.length >= 10 ? "h-[285px] overflow-y-scroll" : ""
          } px-3 `}
        >
          <table className="w-full border-[1px] border-gray-900  dark:border-gray-400">
            <thead className="">
              <tr className="text-center border-[1px] border-gray-900  dark:border-gray-400 w-2/12">
                <td className=" py-1 border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12 ">
                  Nama Barang
                </td>
                <td className="py-1">Total</td>
              </tr>
            </thead>

            <tbody className="text-center text-base">
              {barang_Terlaris.length == 0 ? (
                <tr>
                  <td className=" text-center py-1 " colSpan={2}>
                    Tidak ada Data.
                  </td>
                </tr>
              ) : (
                barang_Terlaris
                  .sort((a, b) => b.jumlah - a.jumlah)
                  .map((item, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2
                          ? ""
                          : "bg-gray-200 dark:bg-colorDarkOne/50 transition-colors ease-in text-colorDarkOne dark:text-colorTwo"
                      }`}
                    >
                      <td className="border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12">
                        {item.namaProduk}
                      </td>
                      <td className="">{item.jumlah}</td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="h-72 flex space-x-6 ">
      <div
        className={` shadow-md shadow-black/20  transition-all ease-in dark:shadow-black border-[1px] border-gray-300 bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3  w-full rounded-md `}
      >
        <div className="flex justify-between">
          {/* gunakan orderdetail, lalu cari nama produk atau barcode yang paling banyak yang ada pada table orderdetail, gunakan filter/hari /minggu /bulan */}

          <div className="w-2/3 mb-2 px-3">Barang Paling Laku</div>
        </div>
        <div
          className={`${
            barang_Terlaris.length >= 8 ? "h-56 overflow-y-scroll" : ""
          } px-3 `}
        >
          <table className="w-full border-[1px] border-gray-900  dark:border-gray-400">
            <thead className="">
              <tr className="text-center border-[1px] border-gray-900  dark:border-gray-400 w-2/12">
                <td className=" py-1 border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12 ">
                  Nama Barang
                </td>
                <td className="py-1">Total</td>
              </tr>
            </thead>

            <tbody className="text-center text-base">
              {barang_Terlaris.length == 0 ? (
                <tr>
                  <td className=" text-center py-1 " colSpan={2}>
                    Tidak ada Data.
                  </td>
                </tr>
              ) : (
                barang_Terlaris
                  .sort((a, b) => b.jumlah - a.jumlah)
                  .map((item, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2
                          ? ""
                          : "bg-gray-200 dark:bg-colorDarkOne/50 transition-colors ease-in text-colorDarkOne dark:text-colorTwo"
                      }`}
                    >
                      <td className="border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12">
                        {item.namaProduk}
                      </td>
                      <td className="">{item.jumlah}</td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className={`shadow-md shadow-black/20  transition-all ease-in dark:shadow-black border-[1px] border-gray-300 bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 w-full rounded-md `}
      >
        <div className="flex justify-between">
          {/* gunakan orderdetail dan daftarproduk, lalu cari nama produk yang ada di daftarproduk tetapi tidak ada didalam order detail*/}
          <div className="w-2/3 mb-2 px-3">Barang Kurang Laku</div>
        </div>
        <div
          className={`${
            barang_KurangLaris.length >= 8 ? "h-56 overflow-y-scroll" : ""
          } px-3 `}
        >
          <table className="w-full border-[1px] border-gray-900  dark:border-gray-400">
            <thead className="">
              <tr className="text-center border-[1px] border-gray-900  dark:border-gray-400 w-2/12">
                <td className=" py-1 border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12 ">
                  Nama Barang
                </td>
              </tr>
            </thead>

            <tbody className="text-center text-base">
              {barang_KurangLaris.length == 0 ? (
                <tr>
                  <td className=" text-center py-1 ">Tidak ada Data.</td>
                </tr>
              ) : (
                barang_KurangLaris.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2
                        ? ""
                        : "bg-gray-200 dark:bg-colorDarkOne/50 transition-colors ease-in text-colorDarkOne dark:text-colorTwo"
                    }`}
                  >
                    <td className="border-e-[1px]  border-gray-900 text-colorDarkOne dark:text-colorTwo transition-colors ease-in dark:border-gray-400 w-10/12">
                      {item}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className={`shadow-md shadow-black/20  transition-all ease-in dark:shadow-black border-[1px] border-gray-300 bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 w-full rounded-md `}
      >
        <div className="flex justify-between ">
          {/* gunakan table daftarproduk lalu cari barang dengan stok kurang dari 10, dan tampilkan  */}
          <div className="w-2/3 mb-2 px-3 ">Stok Minimum</div>
        </div>
        <div
          className={`${
            minimumStok.length >= 8 ? "h-56 overflow-y-scroll" : ""
          } px-3 `}
        >
          <table className="w-full border-[1px] border-gray-900  dark:border-gray-400">
            <thead className="">
              <tr className="text-center border-[1px] border-gray-900  dark:border-gray-400 w-2/12">
                <td className=" py-1 border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12 ">
                  Nama Barang
                </td>
                <td className="py-1">Stok</td>
              </tr>
            </thead>

            <tbody className="text-center text-base">
              {minimumStok.length == 0 ? (
                <tr>
                  <td className=" text-center py-1 " colSpan={2}>
                    Tidak ada Data.
                  </td>
                </tr>
              ) : (
                minimumStok
                  .sort((a, b) => b.stok - a.stok)
                  .map((item, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2
                          ? ""
                          : "bg-gray-200 dark:bg-colorDarkOne/50 transition-colors ease-in text-colorDarkOne dark:text-colorTwo"
                      }`}
                    >
                      <td className="border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12">
                        {item.nama_produk}
                      </td>
                      <td className="">{item.stok}</td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>;

<div
  className={`shadow-md shadow-black/20  transition-all ease-in dark:shadow-black border-[1px] border-gray-300 bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 w-10/12 rounded-md `}
>
  <div className="flex justify-between mb-4 items-center">
    {/* gunakan table daftarproduk lalu cari barang dengan stok kurang dari 10, dan tampilkan  */}
    <div className="w-2/3 mb-2 px-3 ">Barang Kurang Laku</div>
    <span
      className={`bg-colorTwo transition-all ease-in  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo rounded me-3 mt-1 shadow-sm2 shadow-black/20 dark:shadow-black/40`}
    >
      <PiChartLineUpLight className="text-[39px] rounded  p-[6px] relative text-purple-600  " />
    </span>
  </div>
  <div
    className={`${
      barang_KurangLaris.length > 12 ? "h-80 overflow-y-scroll" : ""
    } px-3 `}
  >
    <table className="w-full border-[1px] border-gray-900  dark:border-gray-400">
      <thead className="">
        <tr className="text-center border-[1px] border-gray-900  dark:border-gray-400 w-2/12">
          <td className=" py-1 border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12 ">
            Nama Barang
          </td>
        </tr>
      </thead>

      <tbody className="text-center text-base">
        {barang_KurangLaris.length == 0 ? (
          <tr>
            <td className=" text-center py-1 " colSpan={2}>
              Tidak ada Data.
            </td>
          </tr>
        ) : (
          barang_KurangLaris.map((item, index) => (
            <tr
              key={index}
              className={` ${
                index % 2
                  ? ""
                  : "bg-gray-200 dark:bg-colorDarkOne/50  transition-colors ease-in text-colorDarkOne dark:text-colorTwo"
              }`}
            >
              <td className="border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12">
                {item}
              </td>
              {/* <td className="">{item.jumlah}</td> */}
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
</div>;
