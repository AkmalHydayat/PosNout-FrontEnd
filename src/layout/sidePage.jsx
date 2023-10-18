/* eslint-disable react/prop-types */

import React, { useState } from "react";
import ButtonSide from "../components/ButtonSide";
import PopUpModalUser from "../components/PopUpModalUser";

import NavTop from "./NavTop";
import SidebarNew from "./SidebarNew";

const LayoutPage = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [
    iconToggle,
    sideWidth,
    widthUserImg,
    inlineHiden,
    contentWidth,
    fontSize,
    textCenter,
    fontSize6xl,
    mSDrop,
    me4,
    sideActive,
    rounded,
    w45,
    pb,
  ] = ButtonSide();

  return (
    <React.Fragment>
      <div className="flex ">
        {/* Sidebar */}
        <div className={`${sideWidth}`}>
          <div
            className={`${sideWidth} bg-colorTwo shadow-cus shadow-gray-400 h-screen fixed`}
          >
            <SidebarNew
              iconToggle={iconToggle}
              sideWidth={sideWidth}
              widthUserImg={widthUserImg}
              inlineHiden={inlineHiden}
              fontSize={fontSize}
              textCenter={textCenter}
              fontSize6xl={fontSize6xl}
              mSDrop={mSDrop}
              setShowModal={setShowModal}
              me4={me4}
              sideActive={sideActive}
              rounded={rounded}
              w45={w45}
              pb={pb}
            />
            <div>{iconToggle}</div>
          </div>
        </div>
        <div className={`${contentWidth} `}>
          {/* NavTop */}
          <NavTop sideWidth={sideWidth} contentWidth={contentWidth} />
          {/* Page */}
          <main className="">{children}</main>
        </div>
      </div>

      {/* PopUpModalUser */}
      <PopUpModalUser
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </React.Fragment>
  );
};

export default LayoutPage;
