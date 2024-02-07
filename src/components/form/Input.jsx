import React from "react";

const Input = (props) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${props.className}`}>
      <label>
        {props.label} {props.require && <span className="text-primary">*</span>}
      </label>
      <input {...props} />
    </div>
  );
};

export default Input;
