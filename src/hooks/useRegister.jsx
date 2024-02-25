import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  };

  const validationSchema = yup.object({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
  });

  const onSubmit = (e) => {
    console.log("Onsubmit values", e);
    setLoading(true);
    axios
      .post("http://localhost:5000/api/company/", e)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log("Error", err))
      .finally(() => setLoading(false));
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
export default useRegister;
