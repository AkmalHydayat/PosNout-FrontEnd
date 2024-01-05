/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";
import { BsBagCheck } from "react-icons/bs";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import LineChart from "../../components/LineChart";
import PolarAreaChart from "../../components/PolarAreaChart";
import { useState } from "react";
const Dashboard = ({
  penjualanPerHari,
  keuntunganPerHari,
  transaksiPerHari,
  minimumStok,
  barang_KurangLaris,
  kas,
  chartData,
  chartDatasSale,
  options,
  handlerChart,
  ChartDatasPolarArea,
  handlerProdukTerlaris,
}) => {
  const [harian, setHarian] = useState(true);
  const [mingguan, setMingguan] = useState(false);
  const [barangLarisMingguan, setBarangLarisMingguan] = useState(true);
  const [barangLarisBulananIni, setBarangLarisBulananIni] = useState(false);
  const [barangLarisBulananLalu, setBarangLarisBulananLalu] = useState(false);
  const [bulanan, setBulanan] = useState(false);
  return (
    <div className="">
      <div
        className={`p-6 space-y-6 font-pt_Sans text-base font-medium text-gray-950 opacity-100 `}
      >
        {/* row 1 */}
        <div className="h-[350px] flex space-x-6 ">
          <div className="w-6/12 flex flex-col space-y-6 ">
            <div className="flex space-x-6 h-full">
              <div
                className={` shadow-md shadow-black/20  transition-all ease-in dark:shadow-black bg-gradient-to-br  from-fuchsia-600 dark:to-cyan-600/60 to-cyan-500 p-3 w-full  rounded-md`}
              >
                <div className="flex justify-between">
                  <div className="w-2/3 ">Penjualan Hari ini</div>
                  <div className={`   rounded me-3`}>
                    <BsBagCheck className="text-[36px] rounded p-[6px] relative text-gray-900 dark:text-colorTwo transition-all ease-in" />
                  </div>
                </div>
                <div className="text-[38px] text-end me-2 mt-10 font-semibold   text-gray-900 dark:text-colorTwo transition-all ease-in">
                  {" "}
                  {penjualanPerHari === 0
                    ? 0
                    : penjualanPerHari.toLocaleString("id-ID")}
                </div>
              </div>
              <div
                className={` shadow-md shadow-black/20 transition-all ease-in dark:shadow-black bg-gradient-to-br from-rose-600 dark:to-orange-600/60 to-orange-500  p-3 w-full rounded-md `}
              >
                <div className="flex justify-between">
                  <div className="w-2/3  ">Keuntungan Hari ini</div>
                  <div className={`   rounded me-3`}>
                    <LiaFileInvoiceDollarSolid className="text-[36px] rounded p-[6px] relative text-gray-900 dark:text-colorTwo transition-all ease-in" />
                  </div>
                </div>
                <div className="text-[38px] text-end me-2 mt-10 font-semibold text-gray-900 dark:text-colorTwo transition-all ease-in ">
                  {keuntunganPerHari === 0
                    ? 0
                    : keuntunganPerHari.toLocaleString("id-ID")}
                </div>
              </div>
            </div>
            <div className="flex space-x-6 h-full">
              <div
                className={` shadow-md shadow-black/20  transition-all ease-in dark:shadow-black bg-gradient-to-br  from-green-600 dark:to-teal-600/60  to-teal-500 p-3 w-full rounded-md`}
              >
                <div className="flex justify-between">
                  <div className="w-2/3 ">Transaksi Hari ini</div>
                  <div className={`   rounded me-3`}>
                    <BsBagCheck className="text-[36px] rounded p-[6px] relative text-gray-900 dark:text-colorTwo transition-all ease-in" />
                  </div>
                </div>
                <div className="text-[38px] text-end me-2 mt-10 font-semibold   text-gray-900 dark:text-colorTwo transition-all ease-in">
                  {transaksiPerHari === 0
                    ? 0
                    : transaksiPerHari.toLocaleString("id-ID")}
                </div>
              </div>
              <div
                className={` shadow-md shadow-black/20 transition-all ease-in dark:shadow-black bg-gradient-to-br from-yellow-600 dark:to-lime-600/60 to-lime-500  p-3 w-full rounded-md `}
              >
                <div className="flex justify-between">
                  <div className="w-2/3  ">Kas</div>
                  <div className={`   rounded me-3`}>
                    <LiaFileInvoiceDollarSolid className="text-[36px] rounded p-[6px] relative text-gray-900 dark:text-colorTwo transition-all ease-in" />
                  </div>
                </div>
                <div className="text-[38px] text-end me-2 mt-10 font-semibold text-gray-900 dark:text-colorTwo transition-all ease-in ">
                  {kas.toLocaleString("id-ID")}
                </div>
              </div>
            </div>
          </div>
          <div className="w-6/12">
            <div
              className={`shadow-md shadow-black/20 h-full space-y-6 transition-all ease-in dark:shadow-black bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo py-4 px-7 rounded-md border-[1px] border-gray-300`}
            >
              <div className="flex justify-between items-center ">
                <span>Grafik Penjualan</span>

                <div className="flex justify-evenly text-sm inset-96 shadow-inner space-x-1 rounded-md shadow-black/10 transition-all ease-in text-colorDarkOne dark:text-colorTwo text-center p-1 bg-colorOne dark:bg-colorDarkOne w-2/5">
                  <button
                    name="hari"
                    className={` ${
                      harian
                        ? " bg-purple-600  text-white"
                        : "bg-colorOne text-black  dark:bg-colorDarkOne dark:text-colorTwo"
                    } w-full rounded-md py-0.5 transition-colors  ease-in`}
                    onClick={(e) => {
                      const baseOn = e.target.name;
                      handlerChart(baseOn);
                      setHarian(true);
                      setMingguan(false);
                      setBulanan(false);
                    }}
                  >
                    Hari
                  </button>
                  <button
                    name="minggu"
                    className={` ${
                      mingguan
                        ? " bg-purple-600  text-white"
                        : "bg-colorOne text-black  dark:bg-colorDarkOne dark:text-colorTwo"
                    } w-full rounded-md py-0.5 transition-colors  ease-in`}
                    onClick={(e) => {
                      const baseOn = e.target.name;
                      handlerChart(baseOn);
                      setHarian(false);
                      setMingguan(true);
                      setBulanan(false);
                    }}
                  >
                    Minggu
                  </button>
                  <button
                    name="bulan"
                    className={` ${
                      bulanan
                        ? " bg-purple-600  text-white"
                        : "bg-colorOne text-black  dark:bg-colorDarkOne dark:text-colorTwo"
                    } w-full rounded-md py-0.5 transition-colors  ease-in`}
                    onClick={(e) => {
                      const baseOn = e.target.name;
                      handlerChart(baseOn);
                      setHarian(false);
                      setMingguan(false);
                      setBulanan(true);
                    }}
                  >
                    Bulan
                  </button>
                </div>
              </div>

              {chartData.length === 0 ? (
                <div className=" h-[230px] text-colorDarkOne dark:text-colorTwo mx-auto px-4 flex justify-center items-center transition-all ease-in opacity-100">
                  Tidak ada data.
                </div>
              ) : (
                <div className=" h-full mx-auto px-4 flex justify-center transition-all ease-in opacity-100">
                  <LineChart chartDatas={chartDatasSale} options={options} />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* row 2 */}
        <div className="h-[500px] flex space-x-6 ">
          <div className="w-7/12">
            <div
              className={`shadow-md shadow-black/20 h-full space-y-6 transition-all ease-in dark:shadow-black bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo rounded-md border-[1px] py-4 px-7 border-gray-300`}
            >
              <div className="flex justify-between items-center ">
                <span>Barang Paling Laku</span>

                <div className="flex justify-evenly text-sm inset-96 shadow-inner space-x-1 rounded-md shadow-black/10 transition-all ease-in text-colorDarkOne dark:text-colorTwo text-center p-1 bg-colorOne dark:bg-colorDarkOne w-[50%]">
                  <button
                    name="minggu"
                    className={` ${
                      barangLarisMingguan
                        ? " bg-purple-600  text-white"
                        : "bg-colorOne text-black  dark:bg-colorDarkOne dark:text-colorTwo"
                    } w-full rounded-md py-0.5 transition-colors  ease-in`}
                    onClick={(e) => {
                      const baseOn = e.target.name;
                      handlerProdukTerlaris(baseOn);
                      setBarangLarisBulananIni(false);
                      setBarangLarisBulananLalu(false);
                      setBarangLarisMingguan(true);
                    }}
                  >
                    7 hari lalu
                  </button>
                  <button
                    name="bulan lalu"
                    className={` ${
                      barangLarisBulananLalu
                        ? " bg-purple-600  text-white"
                        : "bg-colorOne text-black  dark:bg-colorDarkOne dark:text-colorTwo"
                    } w-full rounded-md py-0.5 transition-colors  ease-in`}
                    onClick={(e) => {
                      const baseOn = e.target.name;
                      handlerProdukTerlaris(baseOn);
                      setBarangLarisBulananIni(false);
                      setBarangLarisBulananLalu(true);
                      setBarangLarisMingguan(false);
                    }}
                  >
                    Bulan Lalu
                  </button>
                  <button
                    name="bulan ini"
                    className={` ${
                      barangLarisBulananIni
                        ? " bg-purple-600  text-white"
                        : "bg-colorOne text-black  dark:bg-colorDarkOne dark:text-colorTwo"
                    } w-full rounded-md py-0.5 transition-colors  ease-in`}
                    onClick={(e) => {
                      const baseOn = e.target.name;
                      handlerProdukTerlaris(baseOn);
                      setBarangLarisBulananIni(true);
                      setBarangLarisMingguan(false);
                      setBarangLarisBulananLalu(false);
                    }}
                  >
                    Bulan Ini
                  </button>
                </div>
              </div>

              {chartData.length === 0 ? (
                <div className="max-w-[520px] h-[400px]  text-colorDarkOne dark:text-colorTwo mx-auto px-4 flex justify-center items-center transition-all ease-in opacity-100">
                  Tidak ada data.
                </div>
              ) : (
                <div className="max-w-[410px] mx-auto">
                  <PolarAreaChart chartDatas={ChartDatasPolarArea} />
                </div>
              )}
            </div>
          </div>
          <div className="w-5/12 flex flex-col space-y-6 ">
            <div className="w-full h-1/2">
              <div
                className={`shadow-md shadow-black/20  transition-all ease-in dark:shadow-black border-[1px] border-gray-300 bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 h-full rounded-md `}
              >
                <div className="flex justify-between items-center">
                  <div className="w-2/3 mb-2 px-3 ">Stok Minimum</div>
                </div>
                <div
                  className={`${
                    minimumStok.length > 5 ? "h-44 overflow-y-scroll" : ""
                  } px-3 `}
                >
                  <table className="w-full border-x-[1px] border-b-[1px] border-gray-900  dark:border-gray-400">
                    <thead className="sticky  top-0 bg-colorTwo dark:text-colorTwo text-colorDarkOne dark:bg-colorDarkTwo  after:absolute  after:w-full after:h-[1px] after:bg-gray-900 dark:after:bg-gray-400 before:absolute before:top-0 before:w-full before:h-[1px] before:bg-gray-900 dark:before:bg-gray-400 transition-all ease-in">
                      <tr className="text-center border-x-[1px] border-gray-900   dark:border-gray-400 w-2/12">
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
                          .sort((a, b) => a.stok - b.stok)
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
            <div className="w-full h-1/2">
              <div
                className={`shadow-md shadow-black/20  transition-all ease-in dark:shadow-black border-[1px] border-gray-300 bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 h-full rounded-md `}
              >
                <div className="flex justify-between items-center">
                  <div className="w-2/3 mb-2 px-3 ">Barang Kurang Laku</div>
                </div>
                <div
                  className={`${
                    barang_KurangLaris.length > 5
                      ? "h-44 overflow-y-scroll"
                      : ""
                  } px-3 `}
                >
                  <table className="w-full border-x-[1px] border-b-[1px] border-gray-900  dark:border-gray-400">
                    <thead className="sticky top-0 bg-colorTwo dark:text-colorTwo text-colorDarkOne dark:bg-colorDarkTwo after:content-[''] after:absolute after:bottom-0 after:w-full after:h-[1px] after:bg-gray-900 dark:after:bg-gray-400 before:content-[''] before:absolute before:top-0 before:w-full before:h-[1px] before:bg-gray-900 dark:before:bg-gray-400 transition-all ease-in">
                      <tr className="text-center border-[1px] border-gray-900  dark:border-gray-400 w-2/12">
                        <td className=" py-1 border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12 ">
                          Nama Barang
                        </td>
                      </tr>
                    </thead>

                    <tbody className="text-center text-base">
                      {barang_KurangLaris.length == 0 ? (
                        <tr>
                          <td className=" text-center py-1 ">
                            Tidak ada Data.
                          </td>
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
                            <td className="border-e-[1px]  border-gray-900  dark:border-gray-400 w-10/12">
                              {item}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
