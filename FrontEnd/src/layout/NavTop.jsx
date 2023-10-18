import {
  faGear,
  faMoon,
  faPaw,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Clock from "../components/FormatClock";
import DateNow from "../components/Date";

/* eslint-disable react/prop-types */
const NavTop = () => {
  const { day, hari, month, year } = DateNow();
  return (
    <div className="">
      <div
        className={` px-6 flex h-[50px] w-full  justify-between text-white font-titilium`}
      >
        <div className="bg-colorTwo p-2 shadow-md shadow-gray-400 rounded-b-md w-2/12 flex flex-col justify-center items-center text-gray-900  ">
          <div className="text-xl font-bold">
            <Clock />
          </div>
          <div className="text-sm  font-semibold">
            {day}, {hari}/{month}/{year}
          </div>
        </div>
        <div className="bg-colorTwo p-2 shadow-md shadow-gray-400 rounded-b-md w-7/12  ">
          <div className="mx-auto w-32">
            <div className="flex relative ">
              <FontAwesomeIcon
                icon={faPaw}
                className="text-4xl relative rotate-6 text-purple-600"
              />
              <div className="relative -top-3 text-3xl  text-gray-900  font-acme ">
                Pos
              </div>
              <div className="font-mouse -rotate-12 absolute right-3 top-0 text-4xl text-gray-900">
                Pow
              </div>
            </div>
          </div>
        </div>
        <div className="bg-colorTwo p-2 shadow-md shadow-gray-400 rounded-b-md w-2/12">
          <div className={`flex h-full justify-around`}>
            <button className="group">
              <FontAwesomeIcon
                icon={faMoon}
                className="text-xl text-gray-900 group-hover:text-purple-600 "
              />
            </button>
            <button className="group">
              <FontAwesomeIcon
                icon={faGear}
                className="text-xl text-gray-900 group-hover:text-purple-600"
              />
            </button>
            <button className="group">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="text-xl text-gray-900 group-hover:text-purple-600"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
