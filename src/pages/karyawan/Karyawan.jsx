import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LayoutPage from "../../layout/PageLayout";
import { faGrip, faGripLines } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";

/* eslint-disable react/prop-types */
const Karyawan = () => {
  const [grid, setGrid] = useState(true);
  const [table, setTable] = useState(false);

  return (
    <LayoutPage>
      <div className={` p-6  font-pt_Sans`}>
        <div className="font-medium text-3xl  mb-3 text-gray-900 dark:text-colorTwo transition-colors ease-in">
          Karyawan
        </div>
        <div className="rounded bg-colorTwo transition-all ease-in shadow-md border-[1px] border-gray-200 shadow-gray-300 dark:shadow-black dark:border-colorDarkOne dark:bg-colorDarkTwo ">
          <div className="px-6 py-[15px] border-b-[1px] space-x-5 transition-all ease-in  border-gray-300  dark:border-colorDarkOne text-colorDarkOne dark:text-colorTwo">
            <FontAwesomeIcon
              onClick={() => {
                setGrid(true);
                setTable(false);
              }}
              icon={faGrip}
              className={`h-6 cursor-pointer hover:text-purple-600  transition-all ease-in duration-150 ${
                grid
                  ? "text-purple-600"
                  : "text-colorDarkOne dark:text-colorTwo"
              } dark:hover:text-purple-600`}
            />

            <FontAwesomeIcon
              onClick={() => {
                setTable(true);
                setGrid(false);
              }}
              icon={faGripLines}
              className={`h-6 cursor-pointer hover:text-purple-600  transition-all ease-in duration-150 ${
                table
                  ? "text-purple-600"
                  : "text-colorDarkOne dark:text-colorTwo"
              } dark:hover:text-purple-600`}
            />
          </div>
          {grid ? (
            <div className="bg-colorTwo dark:bg-colorDarkTwo transition-all ease-in rounded-b  py-10 px-8 flex justify-around gap-y-6  flex-wrap">
              <div className="py-8 px-8 min-w-[320px] max-w-[320px]  mx-auto bg-colorTwo dark:bg-colorDarkTwo transition-all ease-in dark:border-colorDarkOne dark:shadow-black/70  border-[1px] border-gray-200 rounded-xl shadow-md shadow-black/20 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img
                  className="block object-cover w-[100px] h-[100px] mx-auto rounded-full sm:mx-0 sm:shrink-0"
                  src="https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Woman's Face"
                />
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg text-black dark:text-colorTwo transition-all ease-in font-semibold">
                      Erin Lindford
                    </p>
                    <p className="text-gray-400 font-medium">Admin</p>
                  </div>
                  <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-gray-400 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Detail
                  </button>
                </div>
              </div>
              <div className="py-8 px-8 min-w-[320px] max-w-[320px]  mx-auto bg-colorTwo dark:bg-colorDarkTwo transition-all ease-in dark:border-colorDarkOne dark:shadow-black/70  border-[1px] border-gray-200 rounded-xl shadow-md shadow-black/20 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img
                  className="block object-cover w-[100px] h-[100px] mx-auto rounded-full sm:mx-0 sm:shrink-0"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
                  alt="Woman's Face"
                />
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg text-black dark:text-colorTwo transition-all ease-in font-semibold">
                      Kessey
                    </p>
                    <p className="text-gray-400 font-medium">Kasir</p>
                  </div>
                  <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-gray-400 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Detail
                  </button>
                </div>
              </div>
              <div className="py-8 px-8 min-w-[320px] max-w-[320px]  mx-auto bg-colorTwo dark:bg-colorDarkTwo transition-all ease-in dark:border-colorDarkOne dark:shadow-black/70  border-[1px] border-gray-200 rounded-xl shadow-md shadow-black/20 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img
                  className="block object-cover w-[100px] h-[100px] mx-auto rounded-full sm:mx-0 sm:shrink-0"
                  src="https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80"
                  alt="Woman's Face"
                />
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg text-black dark:text-colorTwo transition-all ease-in font-semibold">
                      Evelyn
                    </p>
                    <p className="text-gray-400 font-medium">Kasir</p>
                  </div>
                  <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-gray-400 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Detail
                  </button>
                </div>
              </div>
              <div className="py-8 px-8 min-w-[320px] max-w-[320px]  mx-auto bg-colorTwo dark:bg-colorDarkTwo transition-all ease-in dark:border-colorDarkOne dark:shadow-black/70  border-[1px] border-gray-200 rounded-xl shadow-md shadow-black/20 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img
                  className="block object-cover w-[100px] h-[100px] mx-auto rounded-full sm:mx-0 sm:shrink-0"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Woman's Face"
                />
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg text-black dark:text-colorTwo transition-all ease-in font-semibold">
                      Jacob
                    </p>
                    <p className="text-gray-400 font-medium">Kasir</p>
                  </div>
                  <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-gray-400 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {table ? (
            <div className="p-5 ">
              <table className="w-full text-colorDarkOne dark:text-colorTwo">
                <thead className="">
                  <tr className="border-[1px] border-gray-300  text-center font-semibold text-lg">
                    <td className="border-e-[1px] border-gray-300  w-10 py-2">
                      No
                    </td>
                    <td className="border-e-[1px] border-gray-300  w-72">
                      Nama
                    </td>
                    <td className="border-e-[1px] border-gray-300  w-52">
                      Jabatan
                    </td>
                    <td className="border-e-[1px] border-gray-300 ">Alamat</td>
                    <td className="border-e-[1px] border-gray-300  w-48">
                      Action
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-[1px] border-gray-300  text-center">
                    <td className="border-e-[1px] border-gray-300 w-10 py-1">
                      1
                    </td>
                    <td className="border-e-[1px] border-gray-300  w-72 ">
                      Erin Lindford
                    </td>
                    <td className="border-e-[1px] border-gray-300  w-52 ">
                      Admin
                    </td>
                    <td className="border-e-[1px] border-gray-300  ">
                      Martin Luther King Boulevard, Houston
                    </td>
                    <td className=" w-48 flex justify-center items-center py-1">
                      <button className="bg-purple-600 px-3 py-0.5 rounded flex justify-center items-center space-x-1">
                        <HiOutlinePencilAlt className="text-lg " />
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      </div>
    </LayoutPage>
  );
};

export default Karyawan;
