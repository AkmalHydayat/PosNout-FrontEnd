import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LayoutPage from "../../layout/PageLayout";
import { faGrip, faGripLines } from "@fortawesome/free-solid-svg-icons";

/* eslint-disable react/prop-types */
const Karyawan = () => {
  return (
    <LayoutPage>
      <div className={` p-6  font-titilium`}>
        <div className="font-semibold text-3xl mb-3 text-gray-900">
          Karyawan
        </div>
        <div className="rounded bg-colorTwo shadow-lg shadow-gray-400">
          <div className="px-6 py-2 border-b-2 border-gray-400 space-x-5">
            <FontAwesomeIcon icon={faGrip} className="h-6" />
            <FontAwesomeIcon icon={faGripLines} className="h-6" />
          </div>
        </div>
        <div className="bg-colorTwo rounded-b shadow-lg shadow-gray-400 py-10 px-8 flex justify-around gap-y-6  flex-wrap">
          <div className="py-8 px-8 min-w-[320px] max-w-[320px]  mx-auto bg-colorTwo border-[1px] border-gray-200 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
              className="block object-cover w-[100px] h-[100px] mx-auto rounded-full sm:mx-0 sm:shrink-0"
              src="https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="Woman's Face"
            />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                  Erin Lindford
                </p>
                <p className="text-slate-500 font-medium">Admin</p>
              </div>
              <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Detail
              </button>
            </div>
          </div>
          <div className="py-8 px-8 min-w-[320px] max-w-[320px]  mx-auto bg-colorTwo border-[1px] border-gray-200 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
              className="block object-cover w-[100px] h-[100px] mx-auto rounded-full sm:mx-0 sm:shrink-0"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
              alt="Woman's Face"
            />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">Kessey</p>
                <p className="text-slate-500 font-medium">Kasir</p>
              </div>
              <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Detail
              </button>
            </div>
          </div>
          <div className="py-8 px-8 min-w-[320px] max-w-[320px]  mx-auto bg-colorTwo border-[1px] border-gray-200 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
              className="block object-cover w-[100px] h-[100px] mx-auto rounded-full sm:mx-0 sm:shrink-0"
              src="https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80"
              alt="Woman's Face"
            />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">Evelyn</p>
                <p className="text-slate-500 font-medium">Kasir</p>
              </div>
              <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Detail
              </button>
            </div>
          </div>
          <div className="py-8 px-8 min-w-[320px] max-w-[320px]  mx-auto bg-colorTwo border-[1px] border-gray-200 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
              className="block object-cover w-[100px] h-[100px] mx-auto rounded-full sm:mx-0 sm:shrink-0"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Woman's Face"
            />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">Jacob</p>
                <p className="text-slate-500 font-medium">Kasir</p>
              </div>
              <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Karyawan;
