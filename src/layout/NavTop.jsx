import Clock from "../components/FormatClock";
import DateNow from "../components/Date";
import { BsMoon, BsBoxArrowRight, BsRobot } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Setting from "./Setting";
/* eslint-disable react/prop-types */
const NavTop = ({ username, url, id, email, role, refreshToken }) => {
  const navigate = useNavigate();
  const { day, hari, month, year } = DateNow();
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

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:3000/logout");
      localStorage.removeItem("auth");
      localStorage.setItem("showProdukDropdown", "false");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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

            <Setting
              username={username}
              url={url}
              id={id}
              email={email}
              role={role}
              refreshToken={refreshToken}
            />
            <button className="group  p-2 rounded-xl" onClick={Logout}>
              <BsBoxArrowRight className="text-xl text-gray-900 dark:text-colorTwo group-hover:text-purple-600 group-hover:scale-110 transition-all ease-in" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
