import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" max-w-[1500px] mx-auto w-full flex justify-between items-center px-[15%] py-5 bg-primary text-white">
      <Link to={"/"} className="font-bold text-2xl">
        Banaaf
      </Link>
      <div className="flex items-center gap-3 text-sm font-semibold">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/all_offers"}>Job Offers</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
