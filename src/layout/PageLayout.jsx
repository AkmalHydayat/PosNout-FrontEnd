/* eslint-disable react/prop-types */
import React from "react";
import NavTop from "./NavTop";

const LayoutPage = ({ children }) => {
  return (
    <React.Fragment>
      <div className="">
        <div className="">
          {/* NavTop */}
          <NavTop />
          {/* Page */}
          <main className="">{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LayoutPage;
