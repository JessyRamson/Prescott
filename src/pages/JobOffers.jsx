import React, { useEffect, useState } from "react";
import Navbar from "../components/global/navbar/Navbar";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import usePublishOffer from "../hooks/usePublishOffer";
import JobOfferItem from "../components/Header/JobOfferItem";
import Footer from "../components/footer/Footer";
import axios from "axios";
import Input from "../components/form/Input";

const JobOffers = () => {
  const { workingTime, handleOfferTypesChange, offerTypes } = usePublishOffer();

  const [offers, setOffers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/offer")
      .then((res) => {
        setOffers(res.data);
      })
      .catch((err) => console.log("error", err));
  }, []);

  useEffect(() => {
    let data;
    offerTypes?.map((item) => {
      data = offers?.filter((val) => item === val.workingTimeId);
    });
    // const dat = offers?.filter((item) =>
    //   offerTypes.map((val) => val === item.workingTimeId)
    // );
    // console.log("Dat", dat);
    console.log("Data", data);
  }, [offerTypes]);
  console.log("Offer types", offers);

  return (
    <div className="w-full h-full bg-gray-100/20">
      {/* navbar */}
      <Navbar />

      <div className="flex flex-col md:flex-row gap-4 px-[5%] md:px-[15%] py-5 items-baseline">
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
                        checked={offerTypes.includes(String(item.id))}
                        onChange={handleOfferTypesChange}
                        size="small"
                      />
                    }
                    label={item.title}
                    value={item.id}
                  />
                ))}
              </FormGroup>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="bg-white rounded-sm py-5 px-3 space-y-4 w-full md:w-2/3">
          <div className="font-semibold text-lg">All Offers</div>
          <Input
            type="theme"
            placeholder="Search here"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
            {offers
              ?.filter((val) =>
                searchValue.toLowerCase() === ""
                  ? val
                  : val.title.toLowerCase().includes(searchValue)
              )
              ?.map((item, index) => (
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
