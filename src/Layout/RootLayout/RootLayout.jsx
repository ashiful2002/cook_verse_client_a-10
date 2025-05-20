import React from "react";
import Navabar from "../Header/Navabar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <div>
        <Navabar />
        <div className="md:w-11/12 mx-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
