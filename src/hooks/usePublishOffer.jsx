import { useState } from "react";

const usePublishOffer = () => {
  const [value, setValue] = useState("");
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [offerTypes, setOfferTypes] = useState([]);

  const addSkill = () => {
    setSkills([...skills, { title: skill }]);
    setSkill("");
  };

  const deleteSkill = (val) =>
    setSkills(skills.filter((item) => item.title !== val.title));

  const workingTime = [
    {
      title: "Part time",
    },
    {
      title: "Full time",
    },
    {
      title: "Internship",
    },
    {
      title: "Remote",
    },
  ];

  const handleOfferTypesChange = (event) => {
    const index = offerTypes.indexOf(event.target.value);
    if (index === -1) {
      setOfferTypes([...offerTypes, event.target.value]);
    } else {
      setOfferTypes(offerTypes.filter((item) => item !== event.target.value));
    }
  };

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
  };
};

export default usePublishOffer;
