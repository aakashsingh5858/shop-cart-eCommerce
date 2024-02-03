import React from "react";
import "./input.css";

const Input = ({ placeholder, onChange, value }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
