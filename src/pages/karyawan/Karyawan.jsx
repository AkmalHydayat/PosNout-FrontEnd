/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LayoutPage from "../../layout/PageLayout";
import { faGrip, faGripLines } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { PiUserThin } from "react-icons/pi";
import ButtonDeleteAkun from "./ButtonDeleteAkun";
import ButtonEditAkun from "./ButtonEditAkun";

const Karyawan = () => {
  const [grid, setGrid] = useState(true);
  const [table, setTable] = useState(false);
  const [idUser, setId] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:3000/token");

      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setExpire(decoded.exp);
      setId(decoded.userId);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:3000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getUsers = async () => {
    const response = await axiosJWT.get("http://localhost:3000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);

  return (
    <LayoutPage>
      <div className={` p-6  font-pt_Sans`}>
        <div className="font-medium text-3xl  mb-3 text-gray-900 dark:text-colorTwo transition-colors ease-in">
          Karyawan
        </div>
        <div className="rounded bg-colorTwo transition-all ease-in shadow-md border-[1px] border-gray-200 shadow-gray-300 dark:shadow-black dark:border-colorDarkOne dark:bg-colorDarkTwo ">
          <div className="px-6 py-[15px] border-b-[1px] space-x-5  transition-all ease-in  border-gray-300  dark:border-colorDarkOne text-colorDarkOne dark:text-colorTwo flex justify-between">
            <div>
              <button
                onClick={() => navigate("/register")}
                className="flex items-center space-x-2 bg-purple-600 dark:shadow-black text-colorTwo shadow-cus2 hover:shadow-sm2 hover:shadow-gray-400 shadow-gray-400  transition-all ease-in  hover:text-white  hover:bg-purple-700 rounded  group px-3 py-1 font-semibold text-md"
              >
                <FiPlusCircle className="text-lg" />
                <div className="text-base font-semibold font-pt_Sans">Add</div>
              </button>
            </div>
            <div className="space-x-5 transition-all ease-in">
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
          </div>
          {grid ? (
            <div className="bg-colorTwo dark:bg-colorDarkTwo transition-all ease-in rounded-b w-full py-10 px-8 flex gap-y-6 flex-wrap">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="py-8 px-8 min-w-[320px] max-w-[320px]  mx-auto bg-colorTwo dark:bg-colorDarkTwo transition-all ease-in dark:border-colorDarkOne dark:shadow-black/70  border-[1px] border-gray-200 rounded-xl shadow-md shadow-black/20 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
                >
                  {user.url ? (
                    <img
                      className="block object-cover w-[90px] h-[90px] mx-auto rounded-full sm:mx-0 sm:shrink-0"
                      src={user.url}
                      alt="photo"
                    />
                  ) : (
                    <PiUserThin className="bg-gray-200 dark:bg-colorDarkOne/40  text-gray-900 dark:text-colorTwo transition-all ease-in block object-cover w-[90px] h-[90px] mx-auto rounded-full sm:mx-0 sm:shrink-0 p-2" />
                  )}

                  <div className="text-center space-y-2 sm:text-left">
                    <div className="">
                      <p className="text-lg text-black dark:text-colorTwo transition-all ease-in font-semibold">
                        {user.username}
                      </p>
                      <p className="text-gray-400 font-medium">{user.role}</p>
                    </div>
                    <div className="flex justify-center space-x-1">
                      <ButtonEditAkun
                        username={user.username}
                        id={user.id}
                        role={user.role}
                        email={user.email}
                        getUsers={getUsers}
                      />
                      <ButtonDeleteAkun
                        akun={user.username}
                        id={user.id}
                        idUserLogin={idUser}
                        getUsers={getUsers}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {table ? (
            <div className="px-5 py-2 font-pt_Sans">
              <table className="w-full  my-5 text-gray-900">
                <thead className="border-[1px]  border-gray-300 bg-colorTwo text-colorDarkOne dark:text-colorTwo dark:bg-colorDarkTwo transition-colors ease-in">
                  <tr className="text-center font-bold text-lg ">
                    <td className="border-s-[1px] border-gray-300  w-10 py-2">
                      No
                    </td>
                    <td className="border-s-[1px] border-gray-300  w-72">
                      Nama
                    </td>
                    <td className="border-s-[1px] border-gray-300  w-52">
                      Role
                    </td>
                    <td className="border-s-[1px] border-gray-300 ">Email</td>
                    <td className="border-x-[1px] border-gray-300  w-56">
                      Action
                    </td>
                  </tr>
                </thead>
                <tbody className="border-[1px] border-gray-300">
                  {users.map((user, index) => (
                    <tr
                      key={user.id}
                      className={` ${
                        index % 2
                          ? `bg-colorTwo dark:bg-colorDarkTwo text-colorDarkOne dark:text-colorTwo transition-all ease-in`
                          : `bg-gray-100 dark:bg-colorDarkOne/50 text-colorDarkOne dark:text-colorTwo transition-all ease-in`
                      }   border-gray-300  text-center `}
                    >
                      <td className="border-s-[1px] border-gray-300 w-10 py-1">
                        {index + 1}
                      </td>
                      <td className="border-s-[1px] border-gray-300  w-72 ">
                        {user.username}
                      </td>
                      <td className="border-s-[1px] border-gray-300  w-52 ">
                        {user.role}
                      </td>
                      <td className="border-x-[1px] border-gray-300  ">
                        {user.email}
                      </td>
                      <td className=" w-56 flex justify-center items-center  space-x-2">
                        <ButtonEditAkun
                          username={user.username}
                          id={user.id}
                          role={user.role}
                          email={user.email}
                          getUsers={getUsers}
                        />
                        <ButtonDeleteAkun
                          akun={user.username}
                          id={user.id}
                          idUserLogin={idUser}
                          getUsers={getUsers}
                        />
                      </td>
                    </tr>
                  ))}
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
