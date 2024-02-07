import React from "react";
import { useTranslation } from "react-i18next";
import { PropagateLoader } from "react-spinners";

const AppButton = (props) => {
  const { t } = useTranslation();

  return (
    <button
      {...props}
      type={props.type}
      disabled={props.disabled}
      className={`btn-primary-4 ${props.className}`}
    >
      {props.disabled ? (
        <PropagateLoader size={10} className="mb-2" color="white" />
      ) : (
        <div>{t(`${props.title}`)}</div>
      )}
    </button>
  );
};

export default AppButton;
