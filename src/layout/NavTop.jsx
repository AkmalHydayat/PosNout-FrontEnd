import Clock from "../components/FormatClock";
import DateNow from "../components/Date";
import { BsMoon, BsGear, BsBoxArrowRight, BsRobot } from "react-icons/bs";
/* eslint-disable react/prop-types */
const NavTop = () => {
  const { day, hari, month, year } = DateNow();
  return (
    <div className="">
      <div
        className={` px-6 flex h-[55px] w-full  justify-between text-white `}
      >
        <div className="bg-colorTwo shadow-md shadow-gray-300 p-1 rounded-b w-[15%] flex flex-col justify-center items-center text-gray-900">
          <div className="text-[18px] font-bold font-Roboto">
            <Clock />
          </div>
          <div className="text-[13px] font-medium ">
            {day}, {hari}/{month}/{year}
          </div>
        </div>
        <div className="bg-colorTwo shadow-md shadow-gray-300 p-2 rounded-b w-7/12  ">
          <div className="mx-auto w-32">
            <div className="flex relative">
              <div className=" relative -top-[3px] right-1">
                <BsRobot className="text-[40px] relative rotate-6 text-gray-900" />
              </div>
              <div className="relative -top-2 text-4xl  text-gray-900 font-mouse">
                Pos
              </div>
              <div className="font-mouse -rotate-12 absolute right-[7px] top-0 text-4xl text-purple-600">
                Nout
              </div>
            </div>
          </div>
        </div>
        <div className="bg-colorTwo shadow-md shadow-gray-300 p-2 rounded-b w-[15%] ">
          <div className={`flex h-full justify-center space-x-4`}>
            <button className="group hover:bg-purple-400 p-2 rounded-xl">
              <BsMoon className="text-xl text-gray-900 " />
            </button>
            <button className="group  hover:bg-purple-400 p-2 rounded-xl">
              <BsGear className="text-xl text-gray-900 " />
            </button>
            <button className="group hover:bg-purple-400 p-2 rounded-xl">
              <BsBoxArrowRight className="text-xl text-gray-900 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
