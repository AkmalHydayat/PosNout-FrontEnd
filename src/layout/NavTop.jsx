import Clock from "../components/FormatClock";
import DateNow from "../components/Date";
import { BsMoon, BsGear, BsBoxArrowRight, BsRobot } from "react-icons/bs";
import { useEffect, useState } from "react";
/* eslint-disable react/prop-types */
const NavTop = () => {
  const { day, hari, month, year } = DateNow();
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="">
      <div
        className={` px-6 flex h-[55px] w-full  justify-between text-white `}
      >
        <div className="bg-colorTwo border-[1px] border-gray-300 dark:border-colorDarkTwo shadow-md shadow-black/20 transition-all ease-in dark:shadow-black dark:bg-colorDarkTwo dark:text-colorTwo p-1 rounded-b w-[15%] flex flex-col justify-center items-center text-gray-900">
          <div className="text-[18px] font-bold font-Roboto">
            <Clock />
          </div>
          <div className="text-[13px] font-medium ">
            {day}, {hari}/{month}/{year}
          </div>
        </div>
        <div className="bg-colorTwo border-[1px] border-gray-300 dark:border-colorDarkTwo shadow-md shadow-black/20 transition-all ease-in dark:shadow-black dark:bg-colorDarkTwo dark:text-colorTwo p-2 rounded-b w-7/12  ">
          <div className="mx-auto w-32">
            <div className="flex relative">
              <div className=" relative -top-[3px] right-1">
                <BsRobot className="text-[40px] relative rotate-6 text-gray-900 dark:text-colorTwo transition-all ease-in" />
              </div>
              <div className="relative -top-2 text-4xl dark:text-colorTwo text-gray-900 font-mouse transition-all ease-in">
                Pos
              </div>
              <div className="font-mouse -rotate-12 absolute right-[7px] top-0 text-4xl  text-purple-600">
                Nout
              </div>
            </div>
          </div>
        </div>
        <div className="bg-colorTwo border-[1px] border-gray-300 dark:border-colorDarkTwo shadow-md shadow-black/20 transition-all ease-in dark:shadow-black dark:bg-colorDarkTwo dark:text-colorTwo p-2 rounded-b w-[15%] ">
          <div className={`flex h-full justify-center space-x-4`}>
            <button
              className="group  p-2 rounded-xl"
              onClick={handleThemeChange}
            >
              <BsMoon className="text-xl text-gray-900 dark:text-colorTwo group-hover:text-purple-600 group-hover:scale-110 transition-all ease-in" />
            </button>
            <button
              className="group   p-2 rounded-xl"
              onClick={() => setShowModal(true)}
            >
              <BsGear className="text-xl text-gray-900 dark:text-colorTwo group-hover:text-purple-600 group-hover:scale-110 transition-all ease-in" />
            </button>
            <button className="group  p-2 rounded-xl">
              <BsBoxArrowRight className="text-xl text-gray-900 dark:text-colorTwo group-hover:text-purple-600 group-hover:scale-110 transition-all ease-in" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
