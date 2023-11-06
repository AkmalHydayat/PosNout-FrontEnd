/* eslint-disable react/prop-types */

import React, { useState } from "react";
import PopUpModalUser from "../components/PopUpModalUser";

import NavTop from "./NavTop";

const LayoutPage = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState("light");

 
  return (
    <React.Fragment>
      <div className="">
        <div className="">
          {/* NavTop */}
          <NavTop setTheme={setTheme} theme={theme} />
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
