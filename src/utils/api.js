import axios from "axios";
import url from "./configAPI.js";
export const getKategoris = async () => {
  try {
    const response = await axios.get(`${url}kategori`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // atau Anda dapat menangani error di tempat lain
  }
};

export const getSatuans = async () => {
  try {
    const response = await axios.get(` ${url}satuan`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // atau Anda dapat menangani error di tempat lain
  }
};

export const getProduks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/produk");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // atau Anda dapat menangani error di tempat lain
  }
};

export const getStoks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/tambahStok");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // atau Anda dapat menangani error di tempat lain
  }
};

export const getTransaksiLogs = async () => {
  try {
    const response = await axios.get("http://localhost:3000/laporanTransaksi");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // atau Anda dapat menangani error di tempat lain
  }
};

export const getOrderDetail = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/orderDetail`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // atau Anda dapat menangani error di tempat lain
  }
};

export const getSalesReport = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/laporanPenjualan`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // atau Anda dapat menangani error di tempat lain
  }
};
export const getSalesReportByDate = async (date) => {
  try {
    setTimeout(async () => {
      const response = await axios.get(
        `http://localhost:3000/laporanPenjualan/${date}`
      );
      return response.data;
    }, 1000);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // atau Anda dapat menangani error di tempat lain
  }
};

export const getChartData = async (baseOn) => {
  try {
    const response = await axios.get(`http://localhost:3000/periodSaleReport`, {
      params: {
        period: baseOn,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // atau Anda dapat menangani error di tempat lain
  }
};

export const getProdukTerlaris = async (baseOn) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/getProductTerlaris`,
      {
        params: {
          period: baseOn,
        },
      }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // atau Anda dapat menangani error di tempat lain
  }
};
