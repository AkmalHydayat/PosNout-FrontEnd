import { BsRobot } from "react-icons/bs";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center font-titilium  bg-gradient-to-br from-teal-600 to-fuchsia-600 h-screen ">
      <div className="mx-auto absolute bottom-7 right-1 w-32">
        <div className="flex flex-col justify-center">
          <div className=" relative -top-[3px] flex justify-center">
            <BsRobot className="text-[40px] relative animate-zoomInv rotate-6 text-black dark:text-colorTwo transition-all ease-in" />
          </div>
          <div className="flex flex-row relative leading-8  justify-center">
            <div className="relative -left-5  text-4xl leading-8 dark:text-colorTwo text-black font-mouse transition-all ease-in">
              Pos
            </div>
            <div className="font-mouse -rotate-12 absolute right-7 top-1 text-3xl  text-white">
              Nout
            </div>
          </div>
        </div>
      </div>
      <div className="absolute text-center top-12">
        <div className=" relative flex flex-col justify-center">
          <div className="flex justify-center">
            <BsRobot className=" text-[200px] relative rotate-3 text-center -top-8 text-black dark:text-colorTwo transition-all ease-in" />
          </div>
          <div className="flex flex-row">
            <span className="text-[300px] relative leading-10 mt-8  dark:text-colorTwo text-black font-mouse transition-all ease-in">
              Pos
            </span>
            <span className="font-mouse absolute -rotate-[10deg] -right-0 text-[200px] text-white">
              Nout
            </span>
          </div>
        </div>
      </div>
      <div
        className={`relative w-1/4 z-50 rounded flex transition-all ease-in  bg-colorTwo/70 backdrop-blur-md shadow-cus2 shadow-black/40 `}
      >
        <div className={`w-full px-6 py-10 transition-all ease-in-out  `}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
