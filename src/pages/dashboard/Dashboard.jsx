/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link, NavLink } from "react-router-dom";
import LayoutPage from "../../layout/PageLayout";
import { BsBagCheck } from "react-icons/bs";
import { PiChartLineUpLight, PiChartBarLight } from "react-icons/pi";
import {
  LiaFileInvoiceDollarSolid,
  LiaMoneyBillWaveSolid,
} from "react-icons/lia";
import { useEffect, useState } from "react";
import { getOrderDetail, getProduks, getSalesReport } from "../../utils/api";
import DateNow from "../../components/Date";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import { Chart } from "chart.js";
import PolarAreaChart from "../../components/PolarAreaChart";

const Dashboard = () => {
  const [produks, setProduks] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);
  const [penjualanPerHari, setPenjualanPerHari] = useState([]);
  const [keuntunganPerHari, setKeuntunganPerHari] = useState([]);
  const [transaksiPerHari, setTransaksiPerHari] = useState([]);
  const [minimumStok, setMinimumStok] = useState([]);
  const [barang_Terlaris, setBarang_Terlaris] = useState([]);
  const [barang_KurangLaris, setBarang_KurangLaris] = useState([]);
  const [salesReport, setSalesReport] = useState([]);
  const [harian, setHarian] = useState(true);
  const [mingguan, setMingguan] = useState(false);
  const [bulanan, setBulanan] = useState(false);
  const [grafik, setGrafik] = useState(false);
  Chart.defaults.font.family = "DM Sans";
  Chart.defaults.font.color = "red";
  const [chartDatasSale, setChartDatasSale] = useState({
    labels: [],
    datasets: [
      {
        label: "Total Penjualan/Hari",
        data: [],
      },
    ],
  });
  const [chartDatasPolarArea, setChartDatasPolarArea] = useState({
    labels: [],
    datasets: [
      {
        label: "Total Penjualan/Hari",
        data: [],
      },
    ],
  });
  const [kas, setKas] = useState(0);
  const { hari, month, year } = DateNow();
  const tanggalSekarang = hari + "-" + month + "-" + year;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",

        labels: {
          pointStyle: "rectRounded",
          usePointStyle: true,
          // This more specific font property overrides the global property
          font: {
            size: 11,
            family: "'DM Sans', serif",
          },
        },
      },
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataProduk = await getProduks();
        const dataOrder = await getOrderDetail();
        const dataSales = await getSalesReport();
        setProduks(dataProduk);
        setOrderDetail(dataOrder);
        setSalesReport(dataSales);

        if (dataSales.length === 0) {
          setGrafik(true);
          return;
        }
        // Update chartDatas after getting salesReport
        setChartDatasSale({
          labels: dataSales.map((data) => {
            // Memecah string tanggal menjadi array dengan "/" sebagai pemisah
            const parts = data.tanggal.split("-");

            // Mengambil bagian bulan dan tanggal saja (tanpa tahun)
            const formattedDate = `${parts[0]}/${parts[1]}`;

            return formattedDate;
          }),
          datasets: [
            {
              label: "Penjualan",
              data: dataSales.map((data) => data.totalPenjualan),
              backgroundColor: "#e11d48",
              borderColor: "#e11d48",
            },
            {
              label: "Keuntungan",
              data: dataSales.map((data) => data.totalKeuntungan),
              backgroundColor: "rgba(13, 148, 136,  1)",
              borderColor: "rgba(13, 148, 136,  1)",
            },
          ],
        });
      } catch (error) {
        // Handle error jika diperlukan
        console.error("Error in component:", error);
      }
    };
    fetchData();
  }, []);

  const transaksiHariIni = () => {
    if (salesReport.length > 0) {
      // Pastikan salesReport tidak kosong
      const filteredData = salesReport.filter((sales) => {
        const salesDate = sales.tanggal;
        return salesDate === tanggalSekarang;
      });
      setPenjualanPerHari(
        filteredData.reduce((accumulator, sales) => {
          return accumulator + sales.totalPenjualan;
        }, 0) // Inisialisasi accumulator dengan 0
      );
      setKeuntunganPerHari(
        filteredData.reduce((accumulator, sales) => {
          return accumulator + sales.totalKeuntungan;
        }, 0) // Inisialisasi accumulator dengan 0
      );
      setTransaksiPerHari(filteredData[0].totalTransaksi);
    }
  };
  const barangTerlaris = () => {
    if (produks.length > 0) {
      const filteredData = orderDetail.filter((detail) =>
        produks.some((produk) => produk.barcode === detail.barcodeProduk)
      );
      const hasilJumlah = filteredData.reduce((acc, obj) => {
        const { jumlah, namaProduk } = obj;

        if (!acc[namaProduk]) {
          acc[namaProduk] = jumlah;
        } else {
          acc[namaProduk] += jumlah;
        }
        return acc;
      }, []);

      const hasilArray = Object.keys(hasilJumlah).map((namaProduk) => ({
        namaProduk,
        jumlah: hasilJumlah[namaProduk],
      }));

      setBarang_Terlaris(hasilArray);
    }
  };

  const barangKurangTerlaris = () => {
    if (produks.length > 0) {
      const arrayProduk = produks.map((obj) => obj.nama_produk);
      const arrayOrder = orderDetail.map((obj) => obj.namaProduk);
      const filteredData = arrayProduk.filter(
        (produk) => !arrayOrder.includes(produk)
      );

      setBarang_KurangLaris(filteredData);
    }
  };
  const stokMinimum = () => {
    if (produks.length > 0) {
      const filteredData = produks.filter((produk) => {
        const stok = produk.stok;
        return stok <= 10;
      });
      setMinimumStok(filteredData);
    }
  };
  const kasToko = () => {
    const totalUangMasuk = salesReport.reduce((accumulator, sales) => {
      return accumulator + sales.totalPenjualan;
    }, 0);
    const totalLaba = salesReport.reduce((accumulator, sales) => {
      return accumulator + sales.totalKeuntungan;
    }, 0);
    setKas(totalUangMasuk - totalLaba);
  };

  useEffect(() => {
    transaksiHariIni();
    kasToko();
    stokMinimum();
    barangTerlaris();
    barangKurangTerlaris();
    setChartDatasPolarArea({
      labels: barang_Terlaris.slice(0, 8).map((data) => data.namaProduk),
      datasets: [
        {
          label: "Penjualan",
          data: barang_Terlaris.slice(0, 8).map((data) => data.jumlah),
          backgroundColor: [
            "#c026d3",
            "rgb(8 145 178) ",
            "#e11d48",
            "#f97316",
            "#16a34a",
            "rgb(13 148 136)",
            "#ca8a04",
            "#84cc16",
          ],
          borderColor: [
            "#c026d3",
            "rgb(8 145 178)",
            "#e11d48",
            "#f97316",
            "#16a34a",
            "rgb(13 148 136)",
            "#ca8a04",
            "#84cc16",
          ],
        },
      ],
    });
  }, [tanggalSekarang, salesReport]);

  return (
    <LayoutPage>
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
              <div className="flex space-x-6 h-full">
                <div
                  className={` shadow-md shadow-black/20  transition-all ease-in dark:shadow-black bg-gradient-to-br  from-green-600 dark:to-teal-600/60  to-teal-500 p-3 w-full rounded-md`}
                >
                  <div className="flex justify-between">
                    <div className="w-2/3 ">Transaksi Hari ini</div>
                    {/* gunakan transaksiLog, lalu filter table sesuai dengan hari atau tanggal yang berlangsung (karena /hari), lalu ambil properti total pada semua data filteran tersebut dan jumlahkan semuanya */}
                    <div className={`   rounded me-3`}>
                      <BsBagCheck className="text-[36px] rounded p-[6px] relative text-gray-900 dark:text-colorTwo transition-all ease-in" />
                    </div>
                  </div>
                  <div className="text-[38px] text-end me-2 mt-10 font-semibold   text-gray-900 dark:text-colorTwo transition-all ease-in">
                    {" "}
                    {transaksiPerHari}
                  </div>
                </div>
                <div
                  className={` shadow-md shadow-black/20 transition-all ease-in dark:shadow-black bg-gradient-to-br from-yellow-600 dark:to-lime-600/60 to-lime-500  p-3 w-full rounded-md `}
                >
                  <div className="flex justify-between">
                    {/* gunakan transaksiLog, lalu filter table berdasarkan transaksilog.keuntungan  sesuai dengan hari atau tanggal yang berlangsung (karena /hari), lalu ambil properti total pada semua data filteran tersebut dan jumlahkan semuanya */}

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
                className={`shadow-md shadow-black/20 h-full space-y-6 transition-all ease-in dark:shadow-black bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 rounded-md border-[1px] border-gray-300`}
              >
                <div className="flex justify-between items-center ">
                  <span>Grafik Penjualan</span>

                  <div className="flex justify-evenly text-sm inset-96 shadow-inner space-x-1 rounded-md shadow-black/10 transition-all ease-in text-colorDarkOne dark:text-colorTwo text-center p-1 bg-colorOne dark:bg-colorDarkOne w-2/5 me-5">
                    <button
                      className={` ${
                        harian
                          ? " bg-purple-600  text-white"
                          : "bg-colorOne text-black  dark:bg-colorDarkOne dark:text-colorTwo"
                      } w-full rounded-md py-0.5 transition-colors  ease-in`}
                      onClick={() => {
                        setHarian(true);
                        setMingguan(false);
                        setBulanan(false);
                      }}
                    >
                      Hari
                    </button>
                    <button
                      className={` ${
                        mingguan
                          ? " bg-purple-600  text-white"
                          : "bg-colorOne text-black  dark:bg-colorDarkOne dark:text-colorTwo"
                      } w-full rounded-md py-0.5 transition-colors  ease-in`}
                      onClick={() => {
                        setHarian(false);
                        setMingguan(true);
                        setBulanan(false);
                      }}
                    >
                      Minggu
                    </button>
                    <button
                      className={` ${
                        bulanan
                          ? " bg-purple-600  text-white"
                          : "bg-colorOne text-black  dark:bg-colorDarkOne dark:text-colorTwo"
                      } w-full rounded-md py-0.5 transition-colors  ease-in`}
                      onClick={() => {
                        setHarian(false);
                        setMingguan(false);
                        setBulanan(true);
                      }}
                    >
                      Bulan
                    </button>
                  </div>
                </div>

                {salesReport.length === 0 ? (
                  <div className="max-w-[520px] h-[230px] my-auto text-colorDarkOne dark:text-colorTwo mx-auto px-4 flex justify-center items-center transition-all ease-in opacity-100">
                    Tidak ada data.
                  </div>
                ) : (
                  <div className=" invisible w-full transition-all ease-in opacity-0"></div>
                )}
                {harian && salesReport.length > 0 ? (
                  <div className="max-w-[520px] mx-auto px-4 flex justify-center transition-all ease-in opacity-100">
                    <LineChart chartDatas={chartDatasSale} options={options} />
                  </div>
                ) : (
                  <div className=" invisible w-full transition-all ease-in opacity-0"></div>
                )}

                {mingguan && salesReport.length > 0 ? (
                  <div className="max-w-[520px] mx-auto px-4 visible flex justify-center transition-all ease-in opacity-100">
                    <BarChart chartDatas={chartDatasSale} options={options} />
                  </div>
                ) : (
                  <div className=" invisible w-full transition-all ease-in opacity-0"></div>
                )}

                {bulanan && salesReport.length > 0 ? (
                  <div className="max-w-[520px] mx-auto px-4 flex justify-center transition-all ease-in opacity-100">
                    <LineChart chartDatas={chartDatasSale} options={options} />
                  </div>
                ) : (
                  <div className=" invisible w-full transition-all ease-in opacity-0"></div>
                )}
              </div>
            </div>
          </div>
          {/* row 2 */}
          <div className="h-[500px] flex space-x-6 ">
            <div className="w-5/12 flex flex-col space-y-6 ">
              <div className="w-full h-1/2">
                <div
                  className={`shadow-md shadow-black/20  transition-all ease-in dark:shadow-black border-[1px] border-gray-300 bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 h-full rounded-md `}
                >
                  <div className="flex justify-between items-center">
                    {/* gunakan table daftarproduk lalu cari barang dengan stok kurang dari 10, dan tampilkan  */}
                    <div className="w-2/3 mb-2 px-3 ">Stok Minimum</div>
                  </div>
                  <div
                    className={`${
                      minimumStok.length > 5 ? "h-44 overflow-y-scroll" : ""
                    } px-3 `}
                  >
                    <table className="w-full border-x-[1px] border-b-[1px] border-gray-900  dark:border-gray-400">
                      <thead className="sticky top-0 bg-colorTwo dark:text-colorTwo text-colorDarkOne dark:bg-colorDarkTwo after:content-[''] after:absolute after:bottom-0 after:w-full after:h-[1px] after:bg-gray-900 dark:after:bg-gray-400 before:content-[''] before:absolute before:top-0 before:w-full before:h-[1px] before:bg-gray-900 dark:before:bg-gray-400 transition-all ease-in">
                        <tr className="text-center border-x-[1px] border-gray-900  dark:border-gray-400 w-2/12">
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
                    {/* gunakan table daftarproduk lalu cari barang dengan stok kurang dari 10, dan tampilkan  */}
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
            <div className="w-7/12">
              <div
                className={`shadow-md shadow-black/20  transition-all ease-in dark:shadow-black border-[1px] border-gray-300 bg-colorTwo  dark:bg-colorDarkTwo dark:text-colorTwo dark:border-colorDarkTwo p-3 w-full h-full rounded-md `}
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
                {orderDetail.length === 0 ? (
                  <div className="max-w-[520px] h-[350px] my-auto text-colorDarkOne dark:text-colorTwo mx-auto px-4 flex justify-center items-center transition-all ease-in opacity-100">
                    Tidak ada data.
                  </div>
                ) : (
                  <div className="max-w-[410px] mx-auto">
                    <PolarAreaChart chartDatas={chartDatasPolarArea} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Dashboard;
