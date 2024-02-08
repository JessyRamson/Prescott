import { Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1500px] mx-auto  gap-6  py-6 lg:py-0  px-[15%]  flex flex-col items-center bg-[#f2f2f2] h-60 justify-center text-gray-600">
      <div className="font-bold text-3xl text-primary">Banaaf</div>
      <div className="text-center">
        All Right Reserved. Developed with passion by{" "}
        <span className="text-primary font-medium">Prescott</span>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
          <Twitter
            className=" hover:text-primary cursor-pointer"
            fontSize="small"
          />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
          <WhatsApp
            className=" hover:text-primary cursor-pointer"
            fontSize="small"
          />
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
          <Instagram
            className=" hover:text-primary cursor-pointer"
            fontSize="small"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
