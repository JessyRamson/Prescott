import { Cancel, CancelOutlined, Menu } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className=" max-w-[1500px] mx-auto w-full flex justify-between items-center py-6 bg-white text-gray-500 md:px-[15%] px-[5%]"
      data-aos="fade-down"
      data-aos-duration="600"
    >
      <Link to={"/"} className="font-bold text-2xl text-primary">
        Banaaf
      </Link>
      <div className=" sm:block hidden">
        <div className="flex items-center gap-3 text-sm font-semibold">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/all_offers"}>Job Offers</NavLink>
          {(localStorage.getItem("isAuth") !== null || false) && (
            <NavLink to={"/"} onClick={() => localStorage.clear()}>
              Logout
            </NavLink>
          )}
        </div>
      </div>
      <div
        className="block sm:hidden cursor-pointer hover:text-primary"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu />
      </div>

      {/* mobile navbar */}
      <div
        className={`h-screen block sm:hidden absolute ${
          !isSidebarOpen ? "-right-[200px]" : "right-0"
        } w-[200px] top-0  bg-white shadow-md text-sm font-semibold px-6 transition-all`}
      >
        <div
          className="my-3 flex justify-end cursor-pointer hover:text-primary"
          onClick={() => setIsSidebarOpen(false)}
        >
          <CancelOutlined />
        </div>
        <div className="flex flex-col items-start justify-center gap-3 my-5 ">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/all_offers"}>Job Offers</NavLink>
          {(localStorage.getItem("isAuth") !== null || false) && (
            <NavLink to={"/"} onClick={() => localStorage.clear()}>
              Logout
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
