import axios from "axios";
import { useFormik } from "formik";
import moment from "moment";
import { useEffect, useState } from "react";
import * as yup from "yup";

const usePublishOffer = () => {
  const [value, setValue] = useState("");
  const [skill, setSkill] = useState("");
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [offerTypes, setOfferTypes] = useState([]);
  const [workingTime, setWorkingTime] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const addSkill = () => {
    setSkills([...skills, skill]);
    setSkill("");
  };

  const deleteSkill = (val) =>
    setSkills(skills.filter((item) => item.title !== val.title));

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/period")
      .then((res) => {
        setWorkingTime(res?.data);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  const handleOfferTypesChange = (event) => {
    const index = offerTypes.indexOf(event.target.value);
    if (index === -1) {
      setOfferTypes([...offerTypes, event.target.value]);
    } else {
      setOfferTypes(offerTypes.filter((item) => item !== event.target.value));
    }
  };

  const initialValues = {
    title: "",
    minRate: "",
    maxRate: "",
    expirationDate: "",
  };
  const validationSchema = yup.object({
    title: yup.string().required(),
    minRate: yup.number().required(),
    maxRate: yup.number().required(),
    expirationDate: yup.date().required(),
  });
  const onSubmit = (e) => {
    setLoading(true);
    const data = {
      title: formik.values.title,
      description: value,
      minRate: formik.values.minRate,
      maxRate: formik.values.maxRate,
      expirationDate: moment(formik.values.expirationDate).toISOString(),
      skills: skills,
      workingTimeId: offerTypes,
      companyId: userInfo?.company?.id,
    };
    console.log("Data", data);
    axios
      .post("http://localhost:5000/api/offer", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return {
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
  };
};

export default usePublishOffer;
