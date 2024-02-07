import React from "react";
import Input from "../../components/form/Input";
import AppButton from "../../components/global/navbar/AppButton";
import { Link } from "react-router-dom";
import useRegister from "../../hooks/useRegister";

const Register = () => {
  const { formik, loading } = useRegister();

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="rounded-md shadow-sm py-4 px-6 flex flex-col gap-3 bg-white w-full sm:w-[400px]">
        <div className="text-primary text-lg font-semibold text-center">
          SignUp
        </div>

        <form className="space-y-3" onSubmit={formik.handleSubmit}>
          <Input
            require={true}
            label={"Firstname"}
            type={"theme"}
            placeholder={"Enter your first name"}
            name={"firstname"}
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstname && formik.errors.firstname && (
            <span className="text-sm text-red-500">
              {formik.errors.firstname}
            </span>
          )}
          <Input
            require={true}
            label={"Lastname"}
            type={"theme"}
            placeholder={"Enter your last name"}
            name={"lastname"}
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastname && formik.errors.lastname && (
            <span className="text-sm text-red-500">
              {formik.errors.lastname}
            </span>
          )}
          <Input
            require={true}
            label={"Email"}
            type={"email"}
            placeholder={"Enter your email address"}
            name={"email"}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-sm text-red-500">{formik.errors.email}</span>
          )}
          <Input
            require={true}
            label={"Password"}
            type={"password"}
            placeholder={"Enter your password"}
            name={"password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <span className="text-sm text-red-500">
              {formik.errors.password}
            </span>
          )}
          <div className="mb-3">
            <AppButton type="submit" disabled={loading} title={"Register"} />
          </div>
        </form>

        <div className="text-sm text-center">
          Already have an account ?{" "}
          <Link to={"/login"} className="text-primary">
            SignIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
