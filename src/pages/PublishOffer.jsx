import React from "react";
import Navbar from "../components/global/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Input from "../components/form/Input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Delete } from "@mui/icons-material";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import usePublishOffer from "../hooks/usePublishOffer";

const PublishOffer = () => {
  const {
    value,
    setValue,
    workingTime,
    addSkill,
    deleteSkill,
    handleOfferTypesChange,
    skill,
    setSkill,
    skills,
    offerTypes,
  } = usePublishOffer();

  return (
    <div className="bg-gray-100 w-full h-full">
      {/* navbar */}
      <Navbar />

      {/* job offer form */}
      <form>
        <div className="flex flex-col md:flex-row gap-4 px-[15%] py-5">
          {/* left side */}
          <div className="bg-white rounded-sm py-5 px-3 space-y-4 w-full md:w-2/3">
            {/* title */}
            <div>
              <Input
                require={true}
                label={"Job title"}
                type={"theme"}
                name={"title"}
                placeholder={"Enter job title"}
              />
            </div>

            {/* Description */}
            <div className={`flex flex-col gap-2 w-full h-60 overflow-hidden`}>
              <label>
                Description
                <span className="text-primary"> *</span>
              </label>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                placeholder={"Enter job description"}
                className="w-full h-40 focus:outline-primary focus:bg-primary/10 transition-all delay-75 duration-200 "
              />
            </div>

            {/* salary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* min salary */}
              <div>
                <Input
                  require={true}
                  label={"Minimum salary"}
                  type={"number"}
                  name={"minRate"}
                  placeholder={"Enter minimum salary"}
                />
              </div>
              {/* max salary */}
              <div>
                <Input
                  require={true}
                  label={"Maximum salary"}
                  type={"number"}
                  name={"maxRate"}
                  placeholder={"Enter maximum salary"}
                />
              </div>
            </div>

            {/* skills */}
            <div className="flex gap-2 items-end">
              <div className={"flex-1"}>
                <Input
                  require={true}
                  label={"Skills"}
                  type={"theme"}
                  name={"skills"}
                  placeholder={"Enter required skills"}
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                />
              </div>
              <button
                className="w-fit flex justify-center items-center border border-primary outline-none bg-transparent text-primary py-2 px-4 rounded-md shadow-sm hover:shadow-md hover:bg-primary/10 cursor-pointer"
                onClick={addSkill}
              >
                Add
              </button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {skills?.map((item, index) => (
                <div
                  className="py-1 px-2 flex justify-between items-center rounded-sm text-sm shadow-sm text-black bg-gray-200 gap-5"
                  key={index}
                >
                  <span>{item.title}</span>
                  <div>
                    <Delete
                      fontSize="small"
                      color="error"
                      className="cursor-pointer"
                      onClick={() => deleteSkill(item)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right side */}
          <div className="bg-white rounded-sm py-5 px-3 space-y-4 w-full md:w-1/3">
            {/* title */}
            <div>
              <Input
                require={true}
                label={"Expiration date"}
                type={"date"}
                name={"expirationDate"}
                placeholder={"Enter job title"}
              />
            </div>

            {/* working time */}
            <div className="space-y-3">
              <label>
                Working Time
                <span className="text-primary">*</span>
              </label>
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

            {/* button */}
            <button className="w-fit flex justify-center items-center border border-none outline-none bg-primary py-2 px-4 rounded-sm shadow-sm hover:shadow-md hover:bg-primary/75 cursor-pointer text-white">
              Publish
            </button>
          </div>
        </div>
      </form>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default PublishOffer;
