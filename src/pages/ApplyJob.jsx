import React, { useState } from "react";
import Navbar from "../components/global/navbar/Navbar";
import Input from "../components/form/Input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Footer from "../components/footer/Footer";

const ApplyJob = () => {
  const [value, setValue] = useState("");

  return (
    <div className="bg-gray-100 w-full h-full">
      {/* navbar */}
      <Navbar />

      {/* form */}
      <form>
        <div className="flex flex-col md:flex-row gap-4 px-[15%] py-5">
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
                />
              </div>
              {/* lname */}
              <div>
                <Input
                  require={true}
                  label={"Last name"}
                  type={"theme"}
                  name={"lastname"}
                  placeholder={"Enter last name"}
                />
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
              />
            </div>

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
            <div>
              <Input
                label={"Drop your CV"}
                type={"file"}
                className={"file-button"}
                name={"logo"}
                // onChange={(e) =>
                //   formik.setFieldValue("logo", e.target.files[0])
                // }
                // onBlur={formik.handleBlur}
              />
              {/* {formik.touched.logo && formik.errors.logo ? (
                <ErrorForm message={formik.errors.logo} />
              ) : null} */}
            </div>

            <div className="flex justify-end">
              {/* button */}
              <button className="w-fit flex justify-center items-center border border-none outline-none bg-primary py-2 px-4 rounded-sm shadow-sm hover:shadow-md hover:bg-primary/75 cursor-pointer text-white">
                Send
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
