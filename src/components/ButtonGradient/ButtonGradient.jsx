import React from "react";
import "./ButtonGradient.css";
const ButtonGradient = ({ children }) => {
   return <button className="btn text-white border-none gradient">{children}</button>;
};

export default ButtonGradient;
