import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import {Outlet} from "react-router-dom";
import {Toaster} from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="">
      <Toaster></Toaster>
      {/* Navbar */}
      <NavBar></NavBar>
      {/* Dynamic_Section */}
      <div className="min-h-[calc(100vh-358px)] py-12">
        {/* Came from router Dynamic*/}
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
