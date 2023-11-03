/* eslint-disable react-hooks/exhaustive-deps */
import LayoutPage from "../../layout/PageLayout";
import { BsBagCheck } from "react-icons/bs";
// import { BiLineChart } from "react-icons/bi";
import {
  PiChartLineUpLight,
  // PiChartPieSlice,
  PiChartBarLight,
} from "react-icons/pi";
import {
  LiaFileInvoiceDollarSolid,
  LiaMoneyBillWaveSolid,
  LiaDollySolid,
} from "react-icons/lia";
import { useEffect, useState } from "react";
import { getTransaksiLogs } from "../../utils/api";
import DateNow from "../../components/Date";

const Dashboard = () => {
  const [transaksiLog, setTransaksiLog] = useState([]);
  // const [transaksiPerHari, setTransaksiPerHari] = useState([]);
  const [penjualanPerHari, setPenjualanPerHari] = useState([]);
  const [keuntunganPerHari, setKeuntunganPerHari] = useState([]);
  const [kas, setKas] = useState(0);
  const { hari, month, year } = DateNow();
  const tanggalSekarang = hari + "-" + month + "-" + year;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTransaksiLogs();
        setTransaksiLog(data);
      } catch (error) {
        // Handle error jika diperlukan
        console.error("Error in component:", error);
      }
    };
    fetchData();
  }, []);

  const transaksiHariIni = () => {
    if (transaksiLog.length > 0) {
      // Pastikan transaksiLog tidak kosong
      const filteredData = transaksiLog.filter((log) => {
        const logDate = log.waktuTransaksi;
        return logDate === tanggalSekarang;
      });
      setPenjualanPerHari(
        filteredData.reduce((accumulator, transaksi) => {
          return accumulator + transaksi.totalTransaksi;
        }, 0) // Inisialisasi accumulator dengan 0
      );
      setKeuntunganPerHari(
        filteredData.reduce((accumulator, transaksi) => {
          return accumulator + transaksi.totalKeuntunganPerTransaksi;
        }, 0) // Inisialisasi accumulator dengan 0
      );
    }
  };
  const kasToko = () => {
    const totalUangMasuk = transaksiLog.reduce((accumulator, transaksi) => {
      return accumulator + transaksi.totalTransaksi;
    }, 0);
    const totalLaba = transaksiLog.reduce((accumulator, transaksi) => {
      return accumulator + transaksi.totalKeuntunganPerTransaksi;
    }, 0);
    setKas(totalUangMasuk - totalLaba);
  };

  useEffect(() => {
    transaksiHariIni();
    kasToko();
  }, [transaksiLog, tanggalSekarang]);

  return (
    <LayoutPage>
      <div className="">
        <div
          className={`p-6 space-y-6 font-pt_Sans text-base font-medium text-gray-950`}
        >
          <div className="h-44 flex space-x-6 ">
            {/* <div
              className={` shadow-md shadow-gray-300 bg-gradient-to-br from-red-500 to-rose-600  p-3 w-full rounded-md`}
            >
              <div className="flex justify-between">
                <div className="w-2/3 " onClick={() => transaksiHariIni()}>
                  Transaksi/ Hari
                </div>

                <div className={`rounded me-3`}>
                  <BsArrowLeftRight className="text-[33px] rounded p-[6px] relative text-gray-900" />
                </div>
              </div>
              <div className="text-[45px] font-medium  mt-12 text-gray-900 ps-3">
                {transaksiPerHari}
              </div>
            </div> */}
            <div
              className={` shadow-md shadow-gray-300 bg-gradient-to-br  from-orange-500 to-rose-500 p-3 w-full rounded-md`}
            >
              <div className="flex justify-between">
                <div className="w-2/3">Total Penjualan/ Hari</div>
                {/* gunakan transaksiLog, lalu filter table sesuai dengan hari atau tanggal yang berlangsung (karena /hari), lalu ambil properti total pada semua data filteran tersebut dan jumlahkan semuanya */}
                <div className={`   rounded me-3`}>
                  <BsBagCheck className="text-[36px] rounded p-[6px] relative text-gray-900" />
                </div>
              </div>
              <div className="text-[40px] text-end me-4 mt-10 font-semibold   text-gray-900 ">
                {" "}
                <span className="me-3">Rp.</span>
                {penjualanPerHari.toLocaleString("id-ID")}
              </div>
            </div>

            <div
              className={` shadow-md shadow-gray-300 bg-gradient-to-br from-emerald-500 to-indigo-600  p-3 w-full rounded-md `}
            >
              <div className="flex justify-between">
                {/* gunakan transaksiLog, lalu filter table berdasarkan transaksilog.keuntungan  sesuai dengan hari atau tanggal yang berlangsung (karena /hari), lalu ambil properti total pada semua data filteran tersebut dan jumlahkan semuanya */}

                <div className="w-2/3 ">Keuntungan/ Hari</div>
                <div className={`   rounded me-3`}>
                  <LiaFileInvoiceDollarSolid className="text-[36px] rounded p-[6px] relative text-gray-900" />
                </div>
              </div>
              <div className="text-[40px] text-end me-4 mt-10 font-semibold   text-gray-900 ">
                {" "}
                <span className="me-3">Rp.</span>
                {keuntunganPerHari.toLocaleString("id-ID")}
              </div>
            </div>
            <div
              className={` shadow-md shadow-gray-300 bg-gradient-to-br from-amber-500 to-green-600 p-3 w-full rounded-md `}
            >
              <div className="flex justify-between">
                {/* gunakan table produk, lalu ambil harga beli kalikan dengan stok lalu jumlahkan semua barang yang ada*/}
                <div className="w-2/3 ">Kas Toko</div>
                <div className={`rounded me-3`}>
                  <LiaMoneyBillWaveSolid className="text-[39px] rounded p-[6px] relative text-gray-900" />
                </div>
              </div>
              <div className="text-[40px] text-end me-4 mt-10 font-semibold   text-gray-900 ">
                {" "}
                <span className="me-3">Rp.</span>
                {kas.toLocaleString("id-ID")}
              </div>
            </div>
          </div>
          <div className="h-60 flex space-x-6 ">
            <div
              className={` shadow-md shadow-gray-300 border-[1px] border-gray-200 bg-colorTwo p-3 w-full rounded-md `}
            >
              <div className="flex justify-between">
                {/* gunakan orderdetail, lalu cari nama produk atau barcode yang paling banyak yang ada pada table orderdetail, gunakan filter/hari /minggu /bulan */}

                <div className="w-2/3 ">Barang Paling Laku</div>
                <div className={`   rounded me-3`}>
                  <LiaDollySolid className="text-[36px] rounded p-[6px] relative text-gray-900" />
                </div>
              </div>
            </div>
            <div
              className={` shadow-md shadow-gray-300 border-[1px] border-gray-200 bg-colorTwo p-3 w-full rounded-md `}
            >
              <div className="flex justify-between">
                {/* gunakan orderdetail dan daftarproduk, lalu cari nama produk yang ada di daftarproduk tetapi tidak ada didalam order detail*/}

                <div className="w-2/3 ">Barang Kurang Laku</div>
                <div className={`   rounded me-3`}>
                  <BsBagCheck className="text-[36px] rounded p-[6px] relative text-gray-900" />
                </div>
              </div>
            </div>
            <div
              className={` shadow-md shadow-gray-300 border-[1px] border-gray-200 bg-colorTwo p-3 w-full rounded-md `}
            >
              <div className="flex justify-between ">
                {/* gunakan table daftarproduk lalu cari barang dengan stok kurang dari 10, dan tampilkan  */}
                <div className="w-2/3 ">Stok Minimum</div>
                <div className={`   rounded me-3`}>
                  <BsBagCheck className="text-[36px] rounded p-[6px] relative text-gray-900" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-44 flex space-x-6">
            <div
              className={` shadow-md shadow-gray-300 bg-colorTwo p-3 w-full rounded-md border-[1px] border-gray-200`}
            >
              <div className="flex justify-between ">
                <span>Grafik Penjualan/Hari</span>
                <span
                  className={`bg-colorTwo rounded me-3 mt-1 shadow-sm2 shadow-gray-200`}
                >
                  {" "}
                  <PiChartLineUpLight className="text-[39px] rounded  p-[6px] relative text-purple-600 border-[1px] " />
                </span>
              </div>
            </div>
            <div
              className={` shadow-md shadow-gray-300 bg-colorTwo p-3 w-full rounded-md border-[1px] border-gray-200`}
            >
              <div className="flex justify-between">
                <span>Grafik Laba/Hari</span>
                <span
                  className={`bg-colorTwo rounded me-3 mt-1 shadow-sm2 shadow-gray-200`}
                >
                  {" "}
                  <PiChartLineUpLight className="text-[39px] rounded  p-[6px] relative text-purple-600 border-[1px] " />
                </span>
              </div>
            </div>
          </div>
          <div className="h-96 flex space-x-6">
            <div
              className={` shadow-md shadow-gray-300 bg-colorTwo p-3 w-full rounded-md border-[1px] border-gray-200`}
            >
              <div className="flex justify-between">
                <span>Grafik Penjualan/Hari</span>
                <span
                  className={`bg-colorTwo rounded me-3 mt-1 shadow-sm2 shadow-gray-200`}
                >
                  {" "}
                  <PiChartBarLight className="text-[39px] rounded p-[6px] relative text-purple-600 border-[1px] " />
                </span>
              </div>
            </div>
            <div
              className={` shadow-md shadow-gray-300 bg-colorTwo p-3 w-full rounded-md border-[1px] border-gray-200`}
            >
              <div className="flex justify-between">
                <span>Grafik Penjualan/Hari</span>
                <span
                  className={`bg-colorTwo rounded me-3 mt-1 shadow-sm2 shadow-gray-200`}
                >
                  {" "}
                  <PiChartBarLight className="text-[39px] rounded    p-[6px] relative text-purple-600 border-[1px] " />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Dashboard;

{
  /* <div
          className={`p-6 space-y-6 font-pt_Sans text-base font-medium text-gray-950 `}
        >
          <div className="h-44 flex space-x-6 ">
            <div
              className={`bg-gradient-to-br from-emerald-500 to-indigo-500 shadow-lg shadow-gray-300 p-3 w-full rounded-md border-[1px] border-gray-300 `}
            >
              <div className="flex justify-between">
                <div className="w-2/3 ">Total Transaksi Hari ini</div>
                <div className="w-fit pe-3 rounded">
                  <BsRobot className="text-4xl  relative text-gray-900" />
                </div>
              </div>
            </div>
            <div
              className={`bg-gradient-to-br from-amber-500 to-lime-500 shadow-lg shadow-gray-300 p-3 w-full rounded-md border-[1px] border-gray-300`}
            >
              <div>
                <span>Total Penjualan/ Hari</span>
                <span></span>
              </div>
            </div>

            <div
              className={`bg-gradient-to-br from-lime-500 to-emerald-500 shadow-lg shadow-gray-300 p-3 w-full rounded-md border-[1px] border-gray-300`}
            >
              <div>
                <span>Total Penjualan/ Minggu</span>
                <span></span>
              </div>
            </div>
            <div
              className={`bg-gradient-to-br from-violet-500 to-rose-500 shadow-lg shadow-gray-300 p-3 w-full rounded-md border-[1px] border-gray-300`}
            >
              <div>
                <span>Total Penjualan/ Bulan</span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="h-44 flex space-x-6 ">
            <div
              className={`bg-gradient-to-br from-rose-500 to-orange-500 shadow-lg shadow-gray-300 p-3 w-full rounded-md border-[1px] border-gray-300`}
            >
              <div>
                <span>Total Penjualan Minggu ini</span>
                <span></span>
              </div>
            </div>
            <div
              className={`bg-gradient-to-br from-violet-500 to-teal-500 shadow-lg shadow-gray-300 p-3 w-full rounded-md border-[1px] border-gray-300`}
            >
              <div>
                <span>Total Penjualan Minggu ini</span>
                <span></span>
              </div>
            </div>
            <div
              className={`bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-lg shadow-gray-300 p-3 w-full rounded-md border-[1px] border-gray-300`}
            >
              <div>
                <span>Total Penjualan Minggu ini</span>
                <span></span>
              </div>
            </div>
          </div>

          <div className="h-44 flex space-x-6">
            <div
              className={`bg-colorTwo shadow-lg shadow-gray-300 p-3 w-full rounded-md border-[1px] border-gray-300`}
            ></div>
            <div
              className={`bg-colorTwo shadow-lg shadow-gray-300 p-3 w-full rounded-md border-[1px] border-gray-300`}
            ></div>
          </div>
          <div className="h-96 flex space-x-6">
            <div
              className={`bg-colorTwo shadow-lg shadow-gray-300 p-3 w-full rounded-md border-[1px] border-gray-300`}
            ></div>
            <div
              className={`bg-colorTwo shadow-lg shadow-gray-300 p-3 w-full rounded-md border-[1px] border-gray-300`}
            ></div>
          </div>
        </div> */
}
