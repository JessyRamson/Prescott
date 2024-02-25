import React from "react";
import Navbar from "../components/global/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Input from "../components/form/Input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Delete } from "@mui/icons-material";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import usePublishOffer from "../hooks/usePublishOffer";
import { BeatLoader } from "react-spinners";

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
    formik,
    loading,
  } = usePublishOffer();

  return (
    <div className="bg-gray-100/20 w-full h-full">
      {/* navbar */}
      <Navbar />

      {/* job offer form */}
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4 md:px-[15%] px-[5%] py-5">
          {/* left side */}
          <div className="bg-white rounded-sm py-5 px-3 space-y-4 w-full md:w-2/3 shadow-sm">
            {/* title */}
            <div>
              <Input
                require={true}
                label={"Job title"}
                type={"theme"}
                name={"title"}
                placeholder={"Enter job title"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
              {formik.touched.title && formik.errors.title && (
                <span className="text-sm text-red-500">
                  {formik.errors.title}
                </span>
              )}
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
                  value={formik.values.minRate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.minRate && formik.errors.minRate && (
                  <span className="text-sm text-red-500">
                    {formik.errors.minRate}
                  </span>
                )}
              </div>
              {/* max salary */}
              <div>
                <Input
                  require={true}
                  label={"Maximum salary"}
                  type={"number"}
                  name={"maxRate"}
                  placeholder={"Enter maximum salary"}
                  value={formik.values.maxRate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.maxRate && formik.errors.maxRate && (
                  <span className="text-sm text-red-500">
                    {formik.errors.maxRate}
                  </span>
                )}
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
              <div
                className="w-fit flex justify-center items-center border border-primary outline-none bg-transparent text-primary py-2 px-4 rounded-md shadow-sm hover:shadow-md hover:bg-primary/10 cursor-pointer"
                onClick={addSkill}
              >
                Add
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {skills?.map((item, index) => (
                <div
                  className="py-1 px-2 flex justify-between items-center rounded-sm text-sm shadow-sm text-black bg-gray-200 gap-5"
                  key={index}
                >
                  <span>{item}</span>
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
          <div className="bg-white rounded-sm py-5 px-3 space-y-4 w-full md:w-1/3 shadow-sm">
            {/* expiration date */}
            <div>
              <Input
                require={true}
                label={"Expiration date"}
                type={"date"}
                name={"expirationDate"}
                placeholder={"Enter job title"}
                value={formik.values.expirationDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.expirationDate &&
                formik.errors.expirationDate && (
                  <span className="text-sm text-red-500">
                    {formik.errors.expirationDate}
                  </span>
                )}
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

            {/* button */}
            <button
              type="submit"
              className="w-fit flex justify-center items-center border border-none outline-none bg-primary py-2 px-4 rounded-sm shadow-sm hover:shadow-md hover:bg-primary/75 cursor-pointer text-white"
            >
              {loading ? (
                <BeatLoader size={12} className="" color="white" />
              ) : (
                "Publish"
              )}
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
