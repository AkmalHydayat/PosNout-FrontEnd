/* eslint-disable react/prop-types */

import React, { useState } from "react";
import ButtonSide from "../components/ButtonSide";
import PopUpModalUser from "../components/PopUpModalUser";

import NavTop from "./NavTop";

const LayoutPage = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [sideWidth, contentWidth] = ButtonSide();

  return (
    <React.Fragment>
      <div className="">
        <div className="">
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
