import axios from "axios";

export const getKategoris = async () => {
  try {
    const response = await axios.get("http://localhost:3000/kategori");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // atau Anda dapat menangani error di tempat lain
  }
};

export const getSatuans = async () => {
  try {
    const response = await axios.get("http://localhost:3000/satuan");
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
