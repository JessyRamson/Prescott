import React from "react";
import Navbar from "../components/global/navbar/Navbar";
import { fakeOffers } from "../fakers";
import { MdMail, MdTimer } from "react-icons/md";
import moment from "moment";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

const OfferDetail = () => {
  return (
    <div className="bg-gray-100 h-full w-full">
      {/* navbar */}
      <Navbar />

      {/* offer detail */}
      <div className="max-w-[1500px] mx-auto  gap-6  my-6 pb-6 lg:py-0  px-[15%]  flex flex-col items-start space-y-4">
        <div className="bg-white rounded-sm py-5 px-3 space-y-4">
          <div className="text-lg font-semibold">{fakeOffers[0].title}</div>
          <div className="flex gap-2 items-center">
            <MdTimer className="text-gray-400" />
            <span className="text-sm text-gray-400">
              {moment(fakeOffers[0].createdDate).fromNow()}
            </span>
          </div>
          <div className="text-md font-body">About</div>
          <div className="text-base">{fakeOffers[0].description}</div>
          <div className="text-md font-body">Skills</div>
          <div className="text-base  flex items-center gap-3">
            {fakeOffers[0].skills.map((item, index) => (
              <span>{item.title} ,</span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-sm py-5 px-3 space-y-4 flex-1 border-b-2 border-b-primary">
          <div className="text-lg font-semibold">Job offer details</div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <MdTimer className="text-gray-400" />
              <span className=" text-gray-400">Working Time</span>
            </div>
            <div className="text-base  flex items-center gap-3">
              {fakeOffers[0].workingTime.map((item, index) => (
                <span>{item.title} ,</span>
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <MdTimer className="text-gray-400" />
              <span className=" text-gray-400">Salary Range</span>
            </div>
            <div className="text-base  flex items-center gap-3">
              {`${fakeOffers[0].maxRate}$ - ${fakeOffers[0].minRate}$`}
            </div>
          </div>
          <Link
            to="/apply"
            className="w-fit bg-orange-500 hover:bg-orange-600/75 hover:shadow-md text-white rounded-sm flex flex-row justify-center items-center px-4 py-2 gap-2"
          >
            <MdMail className="ml-2 w-5 h-5 text-white" />
            <span>Apply now</span>
          </Link>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default OfferDetail;
