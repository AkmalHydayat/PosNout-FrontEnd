/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import AlertShow from "../../components/ui/Alert";

const RegisterForm = () => {
  const [viewPass, setViewPass] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();
  const AlertMessage = (message, width, icon) => {
    AlertShow(message, width, icon);
  };
  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/register", {
        username,
        email,
        role,
        password,
        confPassword,
      });
      AlertMessage("Registrasi Berhasil", 310, "success");
      navigate("/Karyawan");
    } catch (error) {
      if (error.response) {
        AlertMessage(error.response.data.msg, 470, "error");
      }
    }
  };
  return (
    <div>
      <div className="relative">
        <div className="text-2xl font-semibold">
          <div className="text-purple-600">SignUp</div>
        </div>
      </div>
      <form action="" className="space-y-5 mt-5 " onSubmit={Register}>
        <div className="relative z-0 mt-8 mb-6">
          <input
            type="text"
            className="block py-2.5 font-semibold font-acme text-md px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-purple-900 peer"
            placeholder=" "
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label className="absolute text-sm   text-purple-600  duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:font-bold peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
            Username
          </label>
        </div>
        <div className="relative z-0 mt-8 mb-6">
          <select
            size={1}
            name=""
            id=""
            className={`block py-2.5 ${
              role
                ? "font-semibold text-sm font-acme"
                : "font-light text-xs text-purple-600"
            } px-0 w-full  bg-transparent border-0 border-b-2 border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-purple-900 peer`}
            value={role}
            onChange={(e) => {
              setRole(e.target.value.toLowerCase());
            }}
          >
            <option
              className="font-semibold font-acme text-sm ms-10 text-gray-500"
              defaultValue={"Pilih"}
              hidden
            >
              -- Pilih --
            </option>
            <option
              value="user"
              className="font-semibold font-acme text-sm ms-10 text-black"
            >
              User
            </option>
            <option
              value="admin"
              className="font-semibold font-acme text-sm ms-10 text-black"
            >
              Admin
            </option>
          </select>

          <label className="absolute text-sm   text-purple-600  duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:font-bold peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
            Role
          </label>
        </div>
        <div className="relative z-0 mt-8 mb-6">
          <input
            type="text"
            className="block py-2.5 font-semibold font-acme text-md px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-purple-900 peer"
            placeholder=" "
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className="absolute text-sm   text-purple-600  duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:font-bold peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
            Email
          </label>
        </div>

        <div className="relative z-0 mt-8">
          <input
            type={viewPass ? "text" : "password"}
            className="block py-2.5 font-semibold font-acme text-md px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-purple-900 peer"
            placeholder=" "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="button"
            className="absolute end-1 top-4"
            onClick={() => setViewPass(!viewPass)}
          >
            {viewPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
          <label className="absolute text-sm text-purple-600  duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
            Password
          </label>
        </div>
        <div className="relative z-0 mt-8">
          <input
            type={viewPass ? "text" : "password"}
            className="block py-2.5 font-semibold font-acme text-md px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-purple-600 appearance-none focus:outline-none focus:ring-0 focus:border-purple-900 peer"
            placeholder=" "
            value={confPassword}
            onChange={(e) => {
              setConfPassword(e.target.value);
            }}
          />
          <button
            type="button"
            className="absolute end-1 top-4"
            onClick={() => setViewPass(!viewPass)}
          >
            {viewPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
          <label className="absolute text-sm text-purple-600  duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
            Confirm Password
          </label>
        </div>
        <div className="pt-5">
          <button
            type="submit"
            className="  px-4 py-2 mx-auto font-semibold bg-gradient-to-r from-teal-600 to-fuchsia-600 hover:bg-gradient-to-r hover:from-teal-700 hover:to-fuchsia-700 transition-all ease-in-out rounded-sm text-colorTwo w-full "
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
