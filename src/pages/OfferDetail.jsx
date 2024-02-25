import React, { useEffect, useState } from "react";
import Navbar from "../components/global/navbar/Navbar";
import { MdMail, MdTimer } from "react-icons/md";
import moment from "moment";
import Footer from "../components/footer/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const OfferDetail = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/offer/${id}`)
      .then((res) => {
        setOffer(res.data);
      })
      .catch((err) => console.log("Error", err));
  }, [id]);

  return (
    <div className="bg-gray-100/50 h-full w-full">
      {/* navbar */}
      <Navbar />

      {/* offer detail */}
      <div className="max-w-[1500px] mx-auto  gap-6  my-6 pb-6 lg:py-0  md:px-[15%] px-[5%] flex flex-col  space-y-4">
        <div className="bg-white rounded-sm py-5 px-3 space-y-4 shadow-sm flex-1">
          <div className="text-lg font-semibold">{offer?.title}</div>
          <div className="flex gap-2 items-center">
            <MdTimer className="text-gray-400" />
            <span className="text-sm text-gray-400">
              {moment(offer?.createdDate).fromNow()}
            </span>
          </div>
          <div className="text-md font-body">About</div>
          <div className="text-base">{offer?.description}</div>
          <div className="text-md font-body">Skills</div>
          <div className="text-base  flex items-center gap-3 flex-wrap">
            {/* {offer?.skills.map((item, index) => ( */}
            <span>{offer?.skills} </span>
            {/* ))} */}
          </div>
        </div>

        <div className="bg-white rounded-sm py-5 px-3 space-y-4  border-b-2 border-b-primary shadow-sm">
          <div className="text-lg font-semibold">Job offer details</div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <MdTimer className="text-gray-400" />
              <span className=" text-gray-400">Working Time</span>
            </div>
            <div className="text-base  flex items-center gap-3 flex-wrap">
              {/* {offer?.workingTime.map((item, index) => ( */}
              <span>{offer?.WorkingTime?.title} </span>
              {/* ))} */}
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <MdTimer className="text-gray-400" />
              <span className=" text-gray-400">Salary Range</span>
            </div>
            <div className="text-base  flex items-center gap-3 flex-wrap">
              {`${offer?.minRate}$ - ${offer?.maxRate}$`}
            </div>
          </div>
          <Link
            to="/apply"
            state={{ data: offer }}
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
