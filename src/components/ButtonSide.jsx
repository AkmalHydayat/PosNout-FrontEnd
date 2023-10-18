import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ButtonSide = () => {
  const [sideActive, setSideActive] = useState(false);

  const iconToggle = (
    <button
      onClick={() => {
        setSideActive(!sideActive);
      }}
      className="absolute -right-4 bottom-10 text-xl px-3 py-2 rounded-full bg-purple-600 flex  text-white hover:shadow-sm2 hover:shadow-gray-400"
    >
      <FontAwesomeIcon icon={sideActive ? faAngleLeft : faAngleRight} />
    </button>
  );

  const sideWidth = sideActive ? "w-2/12" : "w-[65px]";
  const widthUserImg = sideActive ? "w-24 h-24" : "w-10 h-10";
  const inlineHiden = sideActive ? "inline" : "hidden";
  const hidenBlock = sideActive
    ? "hidden"
    : "absolute  hidden group-hover:inline text-purple-600 shadow-lg bg-colorTwo text-base rounded font-semibold px-2 py-1";
  const contentWidth = sideActive ? "w-10/12 " : "w-full ";
  const fontSize = sideActive
    ? "text-base font-semibold"
    : "text-xl font-normal";
  const textCenter = sideActive ? "text-start ms-8 " : "text-center p-1 ms-0 ";
  const fontSize6xl = sideActive ? "text-6xl" : "text-2xl";
  const mSDrop = sideActive ? "ms-8" : "ms-0";
  const me4 = sideActive ? "ms-0.5" : "ms-0";
  const rounded = sideActive
    ? "rounded-s-xl "
    : "rounded-xl border-none before:content-[''] before:absolute before:right-1 before:w-1 before:rounded-xl before:mt-0.5 before:h-6 before:bg-purple-600";
  const w45 = sideActive ? "w-4" : "w-5";
  const pb = sideActive ? "pb-[18px]" : "pb-7";
  const ps = sideActive ? "ms-[228px] " : "ps-16";

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
  ];
};

export default ButtonSide;
