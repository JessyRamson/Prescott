import React from "react";
import Input from "../../components/form/Input";
import AppButton from "../../components/global/navbar/AppButton";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { formik, loading } = useLogin();

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 px-[5%]">
      <div className="rounded-md shadow-sm py-4 px-6 flex flex-col gap-3 bg-white w-full sm:w-[400px]">
        <div className="text-primary text-lg font-semibold text-center">
          SignIn
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
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
            <AppButton type="submit" disabled={loading} title={"Login"} />
          </div>
        </form>

        <div className="text-sm text-center">
          Don't have an account ?{" "}
          <Link to={"/register"} className="text-primary">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
