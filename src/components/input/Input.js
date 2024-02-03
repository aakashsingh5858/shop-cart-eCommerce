import React from "react";
import "./input.css";

const Input = ({
  placeholder,
  onChange,
  className,
  value,
  suffix,
  onclick,
}) => {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
      />
      <span className="icon-suffix" onClick={onclick}>
        {suffix}
      </span>
    </div>
  );
};

export default Input;
