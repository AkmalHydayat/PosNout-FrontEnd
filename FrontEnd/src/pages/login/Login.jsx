const LoginPage = () => {
  return (
    <div className="flex items-center justify-center font-titilium bg-login-bg-img bg-cover bg-top h-screen">
      <div className=" w-1/4 rounded-md bg-glass backdrop-blur shadow-glasses px-6 py-10">
        <div className="relative">
          <div className="text-2xl font-semibold ">
            <div className="text-purple-600">Login</div>
            <div className="absolute  h-1.5 w-1.5 rounded-full top-[4px] left-[45px] bg-purple-600"></div>
          </div>
        </div>
        <form action="" className="space-y-4 mt-5 ">
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
            <button className="  px-4 py-2 mx-auto font-semibold bg-purple-600 rounded-sm text-colorTwo w-full ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
