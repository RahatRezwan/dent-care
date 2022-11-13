import React from "react";

const ButtonGradient = ({ children }) => {
   return (
      <button
         className="btn text-white border-none"
         style={{
            background: `linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)`,
         }}
      >
         {children}
      </button>
   );
};

export default ButtonGradient;
