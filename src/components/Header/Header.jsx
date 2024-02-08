import React from "react";
import Navbar from "../global/navbar/Navbar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Image1 from "../../assets/res/456287.jpg";
import Image2 from "../../assets/res/Ecommerce-Website.webp";
import Image3 from "../../assets/res/iStock-1194783078.jpg";
import Image4 from "../../assets/res/og-devs.jpg";

// icons
import { MdOutlineArrowForward } from "react-icons/md";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full md:h-[100vh] bg-white max-w-[1500px] mx-auto ">
      {/* navbar */}
      <Navbar />

      {/* banner */}
      <div className="flex flex-col flex-1 justify-between items-center gap-10 md:px-[15%]">
        <div className="flex flex-col gap-3 items-center justify-center mt-8">
          <p className="text-3xl font-medium text-gray-700">Working with us</p>
          <p className="text-lg font-light text-gray-700 text-center">
            Discover what it's like to work with one of the fastest growing
            groups of companies in the world
          </p>
          <Link
            to="/addOffer"
            className="w-fit bg-primary hover:bg-primary/75 text-white rounded-lg flex flex-row justify-center items-center border-none px-8 py-3"
          >
            <span>{t("Publish a job offer")}</span>
            <MdOutlineArrowForward className="ml-2 w-4 h-4 text-white" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 md:row-span-2 rounded-md overflow-hidden ">
            <img
              src={Image1}
              alt=""
              className="object-cover w-full h-full hover:scale-125 transition ease-in-out delay-100 duration-300 cursor-pointer"
            />
          </div>
          <div className=" rounded-md overflow-hidden ">
            <img
              src={Image2}
              alt=""
              className="object-cover w-full h-full hover:scale-125 transition ease-in-out delay-100 duration-300 cursor-pointer"
            />
          </div>
          <div className="md:row-span-2 rounded-md overflow-hidden ">
            <img
              src={Image3}
              alt=""
              className="object-cover w-full h-full hover:scale-125 transition ease-in-out delay-100 duration-300 cursor-pointer"
            />
          </div>
          <div className=" rounded-md overflow-hidden ">
            <img
              src={Image4}
              alt=""
              className="object-cover w-full h-full hover:scale-125 transition ease-in-out delay-100 duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
