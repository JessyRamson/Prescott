import React from "react";
import Image from "../../assets/res/brooke-cagle-_ihwcvahzRk-unsplash.jpg";

const WorkWithUs = () => {
  return (
    <div className="max-w-[1500px] h-full md:h-[100vh] mx-auto gap-5 md:gap-15  py-6  md:px-[15%] px-[5%] flex flex-col md:flex-row justify-between items-center my-10 bg-gray-50/75">
      <div className="flex flex-col gap-4">
        <p className="font-base text-xl text-gray-600">Why work with Banaaf</p>
        <p className="text-lg font-light text-gray-600">
          When you join the Banaaf, you’ll be working in a fast-paced
          environment and quickly develop alongside a team of professionals with
          diverse skills, expertise and knowledge from all over the world. As
          you grow your career with us, you also enjoy a comprehensive pay and
          benefits package with lots of opportunities for you to explore the
          world.
        </p>
      </div>
      <div>
        <img
          src={Image}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default WorkWithUs;
