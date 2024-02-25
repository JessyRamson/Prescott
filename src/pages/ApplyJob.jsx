import React from "react";
import Navbar from "../components/global/navbar/Navbar";
import Input from "../components/form/Input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Footer from "../components/footer/Footer";
import useSentMail from "../hooks/useSentMail";
import { BeatLoader } from "react-spinners";

const ApplyJob = () => {
  const { formik, loading, value, setValue } = useSentMail();

  return (
    <div className="bg-gray-100 w-full h-full">
      {/* navbar */}
      <Navbar />

      {/* form */}
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <div className="flex flex-col md:flex-row gap-4 px-[5%] md:px-[15%] py-5">
          {/* left side */}
          <div className="bg-white rounded-sm py-5 px-3 space-y-4 w-full md:w-2/3">
            {/* name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* fname */}
              <div>
                <Input
                  require={true}
                  label={"First name"}
                  type={"theme"}
                  name={"firstname"}
                  placeholder={"Enter first name"}
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstname && formik.errors.firstname && (
                  <span className="text-sm text-red-500">
                    {formik.errors.firstname}
                  </span>
                )}
              </div>
              {/* lname */}
              <div>
                <Input
                  require={true}
                  label={"Last name"}
                  type={"theme"}
                  name={"lastname"}
                  placeholder={"Enter last name"}
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastname && formik.errors.lastname && (
                  <span className="text-sm text-red-500">
                    {formik.errors.lastname}
                  </span>
                )}
              </div>
            </div>

            {/* email */}
            <div>
              <Input
                require={true}
                label={"Email"}
                type={"email"}
                name={"email"}
                placeholder={"Enter your email"}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <span className="text-sm text-red-500">
                {formik.errors.email}
              </span>
            )}

            {/* Message */}
            <div className={`flex flex-col gap-2 w-full h-60 overflow-hidden`}>
              <label>
                Message
                <span className="text-primary"> *</span>
              </label>
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                placeholder={"Enter your message"}
                className="w-full h-40 focus:outline-primary focus:bg-primary/10 transition-all delay-75 duration-200 "
              />
            </div>

            {/* cv */}
            {/* <div>
              <Input
                label={"Drop your CV"}
                type={"file"}
                className={"file-button"}
                name={"cv"}
                onChange={(e) => formik.setFieldValue("cv", e.target.files[0])}
                onBlur={formik.handleBlur}
              />
              {formik.touched.cv && formik.errors.cv ? (
                <span className="text-sm text-red-500">{formik.errors.cv}</span>
              ) : null}
            </div> */}

            <div className="flex items-center justify-end ">
              {/* button */}
              <button
                type="submit"
                className="w-fit flex justify-center items-center border border-none outline-none bg-primary py-2 px-4  rounded-sm shadow-sm hover:shadow-md hover:bg-primary/75 cursor-pointer text-white"
              >
                {loading ? (
                  <BeatLoader size={12} className="" color="white" />
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </div>

          {/* right side */}
          <div className="rounded-sm py-5 px-3 space-y-4 w-full md:w-1/3"></div>
        </div>
      </form>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default ApplyJob;
