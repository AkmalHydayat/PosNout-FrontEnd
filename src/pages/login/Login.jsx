/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { BsRobot } from "react-icons/bs";

const LoginPage = () => {
  const [translate, setTranslate] = useState(false);
  return (
    <div className="flex items-center justify-center font-titilium dark:bg-colorDarkOne bg-colorOne h-screen ">
      <div className=" w-2/4 rounded flex  space-x-6 bg-colorTwo shadow-sm2 shadow-black/40  ">
        <div
          className={`w-1/2 flex justify-center items-center bg-gradient-to-br transition-all ease-in-out duration-200 z-30 ${
            translate
              ? "translate-x-[354px] rounded-e"
              : "translate-x-0 rounded-s"
          } from-emerald-600 to-purple-600 `}
        >
          <div className=" relative flex flex-col">
            <BsRobot className=" text-[100px] relative rotate-6 z-30 text-black dark:text-colorTwo transition-all ease-in" />
            <span className="text-[55px] leading-9 relative dark:text-colorTwo text-black font-mouse transition-all ease-in">
              Pos
            </span>
            <span className="font-mouse absolute -rotate-12 -bottom-2 right-0 text-4xl  text-white">
              Nout
            </span>
          </div>
        </div>
        <div
          className={`w-1/2 pe-6 py-10 transition-all ease-in-out  ${
            translate
              ? "-translate-x-[330px] opacity-0 invisible hidden"
              : "translate-x-0 visible block"
          }`}
        >
          <div className="relative">
            <div className="text-2xl font-semibold ">
              <div className="text-purple-600">Login</div>
              <div className="absolute  h-1 w-1 rounded-full top-[7px] left-[37px] bg-purple-600"></div>
            </div>
          </div>
          <form action="" className="space-y-5 mt-5 ">
            <div className="relative z-0 mt-8 mb-6">
              <input
                type="text"
                className="block py-2.5 font-semibold font-acme text-md px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-purple-900 peer"
                placeholder=" "
              />
              <label className="absolute text-sm   text-purple-600  duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:font-bold peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                Name
              </label>
            </div>
            <div className="relative z-0 mt-8">
              <input
                type="password"
                className="block py-2.5 text-md px-0 w-full  text-black bg-transparent border-0 border-b-2 border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-purple-600  duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                Password
              </label>
            </div>

            <div className="pt-5">
              <button className="  px-4 py-2 mx-auto font-semibold bg-purple-600 hover:bg-purple-600 rounded-sm text-colorTwo w-full ">
                Login
              </button>
            </div>
          </form>
          <div className="text-sm text-center mt-2">
            Don't have an account?{" "}
            <span
              className="text-purple-600 cursor-pointer hover:font-semibold"
              onClick={() => setTranslate(!translate)}
            >
              Sign Up
            </span>
          </div>
        </div>
        <div
          className={`w-1/2 pe-6 py-10 transition-all ease-in-out  ${
            translate
              ? "-translate-x-[330px] visible block"
              : "translate-x-0 opacity-0 invisible hidden"
          }`}
        >
          <div className="relative">
            <div className="text-2xl font-semibold ">
              <div className="text-purple-600">Sign Up</div>
              <div className="absolute  h-1 w-1 rounded-full top-[7px] left-[14px] bg-purple-600"></div>
            </div>
          </div>
          <form action="" className="space-y-5 mt-5 ">
            <div className="relative z-0 mt-8 mb-6">
              <input
                type="text"
                className="block py-2.5 font-semibold font-acme text-md px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-purple-900 peer"
                placeholder=" "
              />
              <label className="absolute text-sm   text-purple-600  duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:font-bold peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                Name
              </label>
            </div>
            <div className="relative z-0 mt-8">
              <input
                type="password"
                className="block py-2.5 text-md px-0 w-full  text-black bg-transparent border-0 border-b-2 border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-purple-600  duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
                Password
              </label>
            </div>

            <div className="pt-5">
              <button className="  px-4 py-2 mx-auto font-semibold bg-purple-600 hover:bg-purple-600 rounded-sm text-colorTwo w-full ">
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-sm text-center mt-2">
            have an account?{" "}
            <span
              className="text-purple-600 cursor-pointer hover:font-semibold"
              onClick={() => setTranslate(!translate)}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
