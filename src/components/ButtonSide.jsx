import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ButtonSide = () => {
  const [sideActive, setSideActive] = useState(
    localStorage.getItem("showSidebar") === "true"
  );

  useEffect(() => {
    localStorage.setItem("showSidebar", JSON.stringify(sideActive));
  }, [sideActive]);

  const handleSidebar = () => {
    setSideActive(!sideActive);
  };
  const iconToggle = (
    <button
      onClick={() => {
        // setSideActive(!sideActive);
        handleSidebar();
      }}
      className="absolute -right-4 bottom-10 text-2xl px-1 py-1 rounded-full bg-purple-600 flex  text-white hover:shadow-sm2 hover:shadow-black"
    >
      {sideActive ? <BiChevronLeft /> : <BiChevronRight />}
    </button>
  );
  const delay = sideActive ? "delay-200" : "delay-100";
  const sideWidth = sideActive ? "w-2/12" : "w-[65px]";
  const widthUserImg = sideActive ? "w-24 h-24" : "w-10 h-10";
  const inlineHiden = sideActive
    ? "visible opacity-100"
    : "invisible opacity-0";
  const hidenBlock = sideActive
    ? "hidden"
    : "absolute  hidden group-hover:inline text-purple-600 shadow-lg bg-colorTwo  text-base rounded font-semibold px-2 py-1";
  const contentWidth = sideActive ? "w-10/12 " : "w-full ";
  const fontSize = sideActive ? "text-base" : "text-xl";
  const textCenter = sideActive ? "text-start ms-8 " : "text-center p-1 ms-0 ";
  const fontSize6xl = sideActive ? "text-6xl" : "text-2xl";
  const mSDrop = sideActive ? "ms-[38px]" : "ms-0";
  const me4 = sideActive ? "ms-0.5" : "ms-0";
  const rounded = sideActive
    ? "rounded-s-xl"
    : "rounded-xl border-none before:content-[''] before:absolute before:justify-center before:right-[0.5px] before:w-1 before:rounded-xl before:-mt-[1.5px] before:h-6 before:bg-purple-600";
  const w45 = sideActive ? "text-xl" : "text-xl";
  const pb = sideActive ? "pb-[18px]" : "pb-0";
  const ps = sideActive ? "ms-[225px] " : "ps-16";

  return [
    iconToggle,
    sideWidth,
    widthUserImg,
    inlineHiden,
    contentWidth,
    fontSize,
    textCenter,
    fontSize6xl,
    mSDrop,
    sideActive,
    me4,
    rounded,
    w45,
    pb,
    ps,
    hidenBlock,
    delay,
  ];
};

export default ButtonSide;
