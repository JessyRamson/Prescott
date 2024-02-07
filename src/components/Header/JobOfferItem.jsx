import React from "react";
import { MdEditLocation, MdMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const JobOfferItem = ({ item }) => {
  return (
    <div className="flex flex-col gap-5 w-full rounded-md shadow-md hover:shadow-lg py-4 px-3">
      <div className="space-y-3">
        <Link
          to={`/offer/${item.title}`}
          className="text-lg font-semibold cursor-pointer"
        >
          {item.title}
        </Link>
        <div className="text-sm text-gray-400 flex items-center gap-3 flex-wrap">
          {item.workingTime.map((item, index) => (
            <span>{item.title}</span>
          ))}
        </div>
        <div className="text-base">
          {item.description.slice(0, 100) + "..."}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex gap-2 items-center">
          <MdEditLocation className="text-primary" />
          <span className="text-sm text-gray-400">Douala</span>
        </div>
        <div className="flex gap-2 items-center">
          <MdMoney className="text-primary" />
          <span className="text-sm text-gray-400">
            {item.minRate}$ - {item.maxRate}$
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobOfferItem;
