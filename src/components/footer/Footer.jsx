import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1500px] mx-auto  gap-6  py-6 lg:py-0  px-[15%]  flex flex-col items-center bg-[#384D62] h-60 justify-center text-white">
      <div className="font-bold text-3xl ">Banaaf</div>
      <div>
        All Right Reserved. Developed with ❤❤ and passion by{" "}
        <span className="text-red-400 font-medium">Prescott</span>
      </div>
    </div>
  );
};

export default Footer;
