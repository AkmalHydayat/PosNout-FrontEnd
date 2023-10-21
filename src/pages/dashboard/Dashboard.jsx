import LayoutPage from "../../layout/PageLayout";

const Dashboard = () => {
  return (
    <LayoutPage>
      <div className="">
        <div
          className={`p-6 space-y-6 font-acme text-lg font-normal text-gray-950 `}
        >
          <div className="h-44 flex space-x-6 ">
            <div
              className={`bg-gradient-to-br from-emerald-500 to-indigo-500  p-2 w-full rounded-md shadow-lg shadow-gray-400`}
            >
              Total Transaksi/Hari
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-lime-500 w-full p-2 rounded-md shadow-lg shadow-gray-400">
              Total Penjualan/Hari
            </div>

            <div className="bg-gradient-to-br from-lime-500 to-emerald-500 w-full p-2 rounded-md shadow-lg shadow-gray-400">
              sdsdf
            </div>
            <div className="bg-gradient-to-br from-violet-500 to-rose-500  w-full p-2 rounded-md shadow-lg shadow-gray-400">
              sdsdf
            </div>
          </div>
          <div className="h-44 flex space-x-6 ">
            <div
              className={`bg-gradient-to-br from-rose-500 to-orange-500 p-2 w-full rounded-md shadow-lg shadow-gray-400`}
            >
              Total Transaksi/Hari
            </div>
            <div className="bg-gradient-to-br from-violet-500 to-teal-500 w-full p-2 rounded-md shadow-lg shadow-gray-400">
              Total Penjualan/Hari
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 w-full p-2 rounded-md shadow-lg shadow-gray-400">
              Total Laba/Hari
            </div>
          </div>

          <div className="h-44 flex space-x-6">
            <div className="bg-colorTwo w-full p-2 rounded-md shadow-lg shadow-gray-400"></div>
            <div className="bg-colorTwo w-full p-2 rounded-md shadow-lg shadow-gray-400"></div>
          </div>
          <div className="h-96 flex space-x-6">
            <div className="bg-colorTwo w-full p-2 rounded-md shadow-lg shadow-gray-400"></div>
            <div className="bg-colorTwo w-full p-2 rounded-md shadow-lg shadow-gray-400"></div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Dashboard;
