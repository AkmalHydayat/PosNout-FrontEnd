/* eslint-disable react/no-unescaped-entities */
import { BsRobot } from "react-icons/bs";

const PageNotFound = () => {
//   const [translate, setTranslate] = useState(false);
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
              Page
            </span>
            <span className="font-mouse absolute -rotate-[10deg] mt-10 -right-16 text-[200px] text-white">
              NotFound
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
