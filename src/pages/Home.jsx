import React from "react";
import Header from "../components/Header/Header";
import { fakeOffers } from "../fakers/index";
import JobOfferItem from "../components/Header/JobOfferItem";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* section 2 */}
      <div className="max-w-[1500px] h-full mx-auto  gap-6  py-6  px-[15%]  flex flex-col items-center space-y-8 bg-gray-100">
        <div className="text-center font-bold border-b-2 border-b-black w-fit text-xl ">
          Recent Offers
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {fakeOffers?.slice(0, 9)?.map((item, index) => (
            <JobOfferItem item={item} key={index} />
          ))}
        </div>

        <Link
          to={"/all_offers"}
          className="w-fit flex justify-center items-center border border-primary outline-none bg-transparent text-primary py-2 px-4 rounded-md shadow-sm hover:shadow-md hover:bg-primary/10 cursor-pointer"
        >
          View all
        </Link>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
