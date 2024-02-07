import React from "react";
import Navbar from "../global/navbar/Navbar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import headerIllustration from "../../assets/res/header.png";

// icons
import { MdOutlineArrowForward } from "react-icons/md";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className=" h-[100vh] bg-primary">
      {/* navbar */}
      <Navbar />

      {/* banner */}
      <div className="max-w-[1500px] justify-center items-center mx-auto flex flex-col lg:flex-row gap-6 mt-4 lg:mt-0 pb-6 lg:pb-0  text-white px-[15%]">
        <div className="flex-1 flex flex-col gap-4">
          <p className="md:text-base lg:text-xl xl:text-2xl mt-4 font-medium">
            <span className="capitalize">{t("Job offers in Banaaf")}</span>{" "}
          </p>
          <p className="md:text-base lg:text-lg xl:text-xl mt-4 font-medium">
            {t(
              "Explore recent and most trending job opportunities in Banaaf to boost your international career and archieve your goals"
            )}
          </p>
          <p className="md:text-base lg:text-md xl:text-lg mt-4">
            {t("Do you have a job vacancy or looking for a job?")}
          </p>
          <div className="flex flex-row gap-4 mt-3 md:flex md:flex-row">
            <Link
              to="/addOffer"
              className="w-fit bg-white hover:bg-white/75 text-primary rounded-lg flex flex-row justify-center items-center border-white px-8 py-3"
            >
              <span>{t("Publish a job offer")}</span>
              <MdOutlineArrowForward className="ml-2 w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>
        <div className="flex-1 mt-8 mx-8 w-full">
          <img src={headerIllustration} alt="header illustration" />
        </div>
      </div>
    </div>
  );
};

export default Header;
