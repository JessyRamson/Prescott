import React, { useEffect } from "react";
import Navbar from "../components/global/navbar/Navbar";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import usePublishOffer from "../hooks/usePublishOffer";
import JobOfferItem from "../components/Header/JobOfferItem";
import { fakeOffers } from "../fakers";
import Footer from "../components/footer/Footer";

const JobOffers = () => {
  const { workingTime, handleOfferTypesChange, offerTypes } = usePublishOffer();

  useEffect(() => {
    // offerTypes.map((item) => {
    //   fakeOffers.filter((val) => val.workingTime.title === item);
    // });
  }, [offerTypes]);

  return (
    <div className="w-full h-full bg-gray-100/20">
      {/* navbar */}
      <Navbar />

      <div className="flex flex-col md:flex-row gap-4 px-[15%] py-5 items-baseline">
        {/* left side */}
        <div className="bg-white rounded-sm py-5 px-3 space-y-4 w-full md:w-1/3 shadow-sm">
          <div className="space-y-3">
            <div className="font-semibold text-lg">Working time</div>
            <div className="p-2 flex gap-3 flex-wrap text-sm">
              <FormGroup>
                {workingTime?.map((item) => (
                  <FormControlLabel
                    key={item.id}
                    control={
                      <Checkbox
                        checked={offerTypes.includes(String(item.title))}
                        onChange={handleOfferTypesChange}
                        size="small"
                      />
                    }
                    label={item.title}
                    value={item.title}
                  />
                ))}
              </FormGroup>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="bg-white rounded-sm py-5 px-3 space-y-4 w-full md:w-2/3">
          <div className="font-semibold text-lg">All Offers</div>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
            {fakeOffers?.map((item, index) => (
              <JobOfferItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default JobOffers;
