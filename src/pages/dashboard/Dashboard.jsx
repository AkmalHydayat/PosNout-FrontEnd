import LayoutPage from "../../layout/PageLayout";
import { BsBagCheck, BsArrowLeftRight } from "react-icons/bs";
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

const Dashboard = () => {
  return (
    <LayoutPage>
      <div className="">
        <div
          className={`p-6 space-y-6 font-pt_Sans text-base font-medium text-gray-950 `}
        >
          <div className="h-44 flex space-x-6 ">
            <div
              className={` shadow-lg shadow-gray-300 bg-gradient-to-br from-emerald-500 to-indigo-500 p-3 w-full rounded-md border-[1px] border-gray-300 `}
            >
              <div className="flex justify-between">
                <div className="w-2/3 ">Transaksi/ Hari</div>
                <div className={`   rounded me-3`}>
                  <BsArrowLeftRight className="text-[33px] rounded    p-[6px] relative text-gray-900" />
                </div>
              </div>
            </div>
            <div
              className={` shadow-lg shadow-gray-300 bg-gradient-to-br from-amber-500 to-lime-500 p-3 w-full rounded-md border-[1px] border-gray-300`}
            >
              <div className="flex justify-between">
                <div className="w-2/3 ">Total Penjualan/ Hari</div>
                <div className={`   rounded me-3`}>
                  <BsBagCheck className="text-[36px] rounded p-[6px] relative text-gray-900" />
                </div>
              </div>
            </div>

            <div
              className={` shadow-lg shadow-gray-300 bg-gradient-to-br from-lime-500 to-emerald-500 p-3 w-full rounded-md border-[1px] border-gray-300`}
            >
              <div className="flex justify-between">
                <div className="w-2/3 ">Keuntungan/ Hari</div>
                <div className={`   rounded me-3`}>
                  <LiaFileInvoiceDollarSolid className="text-[36px] rounded p-[6px] relative text-gray-900" />
                </div>
              </div>
            </div>
            <div
              className={` shadow-lg shadow-gray-300 bg-gradient-to-br from-violet-500 to-rose-500 p-3 w-full rounded-md border-[1px] border-gray-300`}
            >
              <div className="flex justify-between">
                <div className="w-2/3 ">Kas Toko</div>
                <div className={`rounded me-3`}>
                  <LiaMoneyBillWaveSolid className="text-[39px] rounded p-[6px] relative text-gray-900" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-44 flex space-x-6 ">
            <div
              className={` shadow-lg shadow-gray-300 bg-gradient-to-br from-rose-500 to-orange-500 p-3 w-full rounded-md border-[1px] border-gray-300`}
            >
              <div className="flex justify-between">
                <div className="w-2/3 ">Barang Terlaris/ Hari</div>
                <div className={`   rounded me-3`}>
                  <LiaDollySolid className="text-[36px] rounded p-[6px] relative text-gray-900" />
                </div>
              </div>
            </div>
            <div
              className={` shadow-lg shadow-gray-300 bg-gradient-to-br from-violet-500 to-teal-500 p-3 w-full rounded-md border-[1px] border-gray-300`}
            >
              <div className="flex justify-between">
                <div className="w-2/3 ">Barang Terlaris/ Bulan</div>
                <div className={`   rounded me-3`}>
                  <BsBagCheck className="text-[36px] rounded p-[6px] relative text-gray-900" />
                </div>
              </div>
            </div>
            <div
              className={` shadow-lg shadow-gray-300 bg-gradient-to-br from-emerald-500 to-cyan-500 p-3 w-full rounded-md border-[1px] border-gray-300`}
            >
              <div className="flex justify-between ">
                <div className="w-2/3 ">Stok Minimum</div>
                <div className={`   rounded me-3`}>
                  <BsBagCheck className="text-[36px] rounded p-[6px] relative text-gray-900" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-44 flex space-x-6">
            <div
              className={` shadow-lg shadow-gray-300 bg-colorTwo p-3 w-full rounded-md border-[1px] border-gray-200`}
            >
              <div className="flex justify-between ">
                <span>Grafik Penjualan/Hari</span>
                <span
                  className={`bg-colorTwo rounded me-3 mt-1 shadow-sm2 shadow-gray-300`}
                >
                  {" "}
                  <PiChartLineUpLight className="text-[39px] rounded  p-[6px] relative text-purple-600 " />
                </span>
              </div>
            </div>
            <div
              className={` shadow-lg shadow-gray-300 bg-colorTwo p-3 w-full rounded-md border-[1px] border-gray-200`}
            >
              <div className="flex justify-between">
                <span>Grafik Laba/Hari</span>
                <span
                  className={`bg-colorTwo rounded me-3 mt-1 shadow-sm2 shadow-gray-300`}
                >
                  {" "}
                  <PiChartLineUpLight className="text-[39px] rounded  p-[6px] relative text-purple-600 " />
                </span>
              </div>
            </div>
          </div>
          <div className="h-96 flex space-x-6">
            <div
              className={` shadow-lg shadow-gray-300 bg-colorTwo p-3 w-full rounded-md border-[1px] border-gray-200`}
            >
              <div className="flex justify-between">
                <span>Grafik Penjualan/Hari</span>
                <span
                  className={`bg-colorTwo rounded me-3 mt-1 shadow-sm2 shadow-gray-300`}
                >
                  {" "}
                  <PiChartBarLight className="text-[39px] rounded p-[6px] relative text-purple-600 " />
                </span>
              </div>
            </div>
            <div
              className={` shadow-lg shadow-gray-300 bg-colorTwo p-3 w-full rounded-md border-[1px] border-gray-200`}
            >
              <div className="flex justify-between">
                <span>Grafik Penjualan/Hari</span>
                <span
                  className={`bg-colorTwo rounded me-3 mt-1 shadow-sm2 shadow-gray-300`}
                >
                  {" "}
                  <PiChartBarLight className="text-[39px] rounded    p-[6px] relative text-purple-600 " />
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
