import { useFormik } from "formik";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { send } from "emailjs-com";

const useSentMail = () => {
  const { state } = useLocation();
  // console.log(state);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    firstname: "",
    lastname: "",
    cv: "",
  };

  const validationSchema = yup.object({
    email: yup.string().email().required("Email is required"),
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
  });

  const onSubmit = (e) => {
    const data = {
      email: e.email,
      message: value,
      to_email: state?.data?.company?.email,
      firstname: e.firstname,
      lastname: e.lastname,
      // cv: e.cv,
      title: state?.data?.title,
      description: state?.data?.description,
      offerId: state?.data?.id,
    };
    // console.log("Onsubmit values", data);

    setLoading(true);
    send("service_vidqd2e", "template_q053268", data, "bVggAlqK4wNLbS9fQ")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert(response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      })
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
    value,
    setValue,
  };
};
export default useSentMail;
