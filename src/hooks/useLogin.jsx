import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const onSubmit = (e) => {
    console.log("Onsubmit values", e);
    setLoading(false);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return {
    formik,
    loading,
  };
};
export default useLogin;
