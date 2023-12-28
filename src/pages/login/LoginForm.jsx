/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import AlertShow from "../../components/ui/Alert";

const LoginForm = () => {
  const [viewPass, setViewPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const AlertMessage = (message, width, icon) => {
    AlertShow(message, width, icon);
  };
  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      AlertMessage("Login Berhasil", 310, "success");
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        AlertMessage(error.response.data.msg, 390, "error");
      }
    }
  };

  
  return (
    <div>
      {" "}
      <div className="relative">
        <div className="text-2xl font-semibold ">
          <div className="text-purple-600">Login</div>
        </div>
      </div>
      <form action="" className="space-y-5 mt-5 " onSubmit={Auth}>
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
            placeholder=""
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="absolute end-1 top-4"
            onClick={() => setViewPass(!viewPass)}
            type="button"
          >
            {viewPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
          <label className="absolute text-sm text-purple-600  duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">
            Password
          </label>
        </div>

        <div className="pt-5">
          <button
            type="submit"
            className="  px-4 py-2 mx-auto font-semibold bg-gradient-to-r from-teal-600 to-fuchsia-600 hover:bg-gradient-to-r hover:from-teal-700 hover:to-fuchsia-700 transition-all ease-in-out rounded-sm text-colorTwo w-full "
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
