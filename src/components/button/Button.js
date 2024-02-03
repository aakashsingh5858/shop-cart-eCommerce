import React from "react";
import "./button.css";

const Button = ({ value, className }) => {
  return (
    <button type="button" className={className}>
      {value}
    </button>
  );
};

export default Button;
