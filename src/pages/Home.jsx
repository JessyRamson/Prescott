import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { fakeOffers } from "../fakers/index";
import JobOfferItem from "../components/Header/JobOfferItem";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import WorkWithUs from "../components/Header/WorkWithUs";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      {/* Header */}
      <Header />

      {/* why work with us */}
      <WorkWithUs />

      {/* section 2 */}
      <div className="max-w-[1500px] h-full mx-auto  gap-6  py-6  px-[15%]  flex flex-col items-center space-y-8 bg-white my-10">
        <div
          className="text-center font-medium border-b-2 border-b-gray-600 w-fit text-xl text-gray-600 "
          data-aos="fade-down"
          data-aos-duration="600"
        >
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
