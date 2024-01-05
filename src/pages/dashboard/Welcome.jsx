/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import LayoutPage from "../../layout/PageLayout";
import { useEffect, useState } from "react";
import {
  getChartData,
  getOrderDetail,
  getProdukTerlaris,
  getProduks,
  getSalesReport,
  getSalesReportByDate,
} from "../../utils/api";
import DateNow from "../../components/Date";
import { Chart } from "chart.js";
import Dashboard from "./Dashboard";
import axios from "axios";

const Welcome = () => {
  const [produks, setProduks] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);
  const [penjualanPerHari, setPenjualanPerHari] = useState(0);
  const [keuntunganPerHari, setKeuntunganPerHari] = useState(0);
  const [transaksiPerHari, setTransaksiPerHari] = useState(0);
  const [minimumStok, setMinimumStok] = useState([]);
  const [barang_KurangLaris, setBarang_KurangLaris] = useState([]);
  const [salesReport, setSalesReport] = useState([]);
  const [kas, setKas] = useState(0);
  const [chartData, setChartData] = useState([]);
  const { hari, month, year } = DateNow();
  const tanggalSekarang = hari + "-" + month + "-" + year;
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

  const [ChartDatasPolarArea, setChartDatasPolarArea] = useState({
    labels: [],
    datasets: [
      {
        label: "Total Penjualan/Hari",
        data: [],
      },
    ],
  });

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

  const generateInvoiceNumber = () => {
    const uniqueCode = "PP";
    const currentDate = new Date();
    const formattedDate = currentDate
      .toLocaleDateString("id-ID", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
      .join(""); // Format tanggal YYMMDD

    let invoiceNumberCounter = 1;

    const newInvoiceNumber = `${uniqueCode}${formattedDate}${String(
      invoiceNumberCounter
    ).padStart(4, "0")}`;
    invoiceNumberCounter++;
    localStorage.setItem(
      "invoiceNumberCounter",
      invoiceNumberCounter.toString()
    );

    // Simpan nilai invoice ke penyimpanan lokal
    localStorage.setItem("invoiceNumber", newInvoiceNumber);

    return newInvoiceNumber;
  };

  const addAutoSalesReport = async () => {
    const lastResetDate = localStorage.getItem("lastResetDate");
    // const lastResetDate = "1";

    const filter = salesReport.filter((report) => {
      const reportDataTanggal = report.tanggal;
      return reportDataTanggal === tanggalSekarang; //0
    });
    // console.log(filter);
    const currentDate = new Date();
    const formattedDate = currentDate
      .toLocaleDateString("id-ID", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
      .join("");

    if (lastResetDate !== formattedDate && filter.length === 0) {
      try {
        await axios.post("http://localhost:3000/autoAddLaporanPenjualan", {
          tanggal: tanggalSekarang,
        });
        localStorage.setItem("lastResetDate", formattedDate);

        generateInvoiceNumber();
      } catch (error) {
        console.error("Gagal menyimpan data transaksi ke database:", error);
      }
    }
  };

  const handlerChart = async (baseOn) => {
    try {
      const dataChart = await getChartData(baseOn);
      setChartData(dataChart);
      setChartDatasSale({
        labels: dataChart.map((data) => {
          // Memecah string tanggal menjadi array dengan "/" sebagai pemisah
          const parts = data.tanggal.split("-");
          // console.log(parts);
          let formattedDate = "";
          if (baseOn === "minggu") {
            formattedDate = `${parts[0]}/${parts[1]} - ${parts[2].slice(
              9,
              11
            )}/${parts[3]}`;
          } else if (baseOn === "bulan") {
            formattedDate = data.bulan;
          } else {
            formattedDate = `${parts[0]}/${parts[1]}`;
          }

          return formattedDate;
        }),
        datasets: [
          {
            label: "Penjualan",
            data: dataChart.map((data) => data.totalPenjualan),
            backgroundColor: "#e11d48",
            borderColor: "#e11d48",
          },
          {
            label: "Keuntungan",
            data: dataChart.map((data) => data.totalKeuntungan),
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

  const handlerProdukTerlaris = async (baseOn) => {
    try {
      const dataChart = await getProdukTerlaris(baseOn);
      setChartDatasPolarArea({
        labels: dataChart.slice(0, 8).map((data) => data.namaProduk),
        datasets: [
          {
            label: "Penjualan",
            data: dataChart.slice(0, 8).map((data) => data.jumlah),
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
    } catch (error) {
      // Handle error jika diperlukan
      console.error("Error in component:", error);
    }
  };

  const getTransaksiHariIni = async (date) => {
    try {
      const dataPenjualan = await getSalesReportByDate(date);
      //   console.log(dataPenjualan);
      setPenjualanPerHari(dataPenjualan.totalPenjualan);
      setKeuntunganPerHari(dataPenjualan.totalKeuntungan);
      setTransaksiPerHari(dataPenjualan.totalTransaksi);
    } catch (error) {
      console.error("Error in component:", error);
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
    const fetchData = async () => {
      try {
        const dataProduk = await getProduks();
        const dataOrder = await getOrderDetail();
        const dataSales = await getSalesReport();
        addAutoSalesReport();
        setProduks(dataProduk);
        setOrderDetail(dataOrder);
        setSalesReport(dataSales);
        getTransaksiHariIni(tanggalSekarang);
        handlerChart("hari");
        handlerProdukTerlaris("minggu");
      } catch (error) {
        console.error("Error in component:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    kasToko();
    stokMinimum();
    barangKurangTerlaris();
  }, [salesReport]);

  return (
    <LayoutPage>
      <Dashboard
        penjualanPerHari={penjualanPerHari}
        keuntunganPerHari={keuntunganPerHari}
        transaksiPerHari={transaksiPerHari}
        minimumStok={minimumStok}
        barang_KurangLaris={barang_KurangLaris}
        kas={kas}
        chartData={chartData}
        chartDatasSale={chartDatasSale}
        options={options}
        handlerChart={handlerChart}
        ChartDatasPolarArea={ChartDatasPolarArea}
        handlerProdukTerlaris={handlerProdukTerlaris}
      />
    </LayoutPage>
  );
};

export default Welcome;
