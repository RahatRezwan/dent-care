import React from "react";

const ServiceCard = ({ service }) => {
   const { icon, name, details } = service;
   return (
      <div
         className="rounded-[18px] text-center py-[34px] px-[56px]"
         style={{ boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)" }}
      >
         <div className="flex justify-center mt-[10px] mb-[34px]">
            <img src={icon} alt="" />
         </div>
         <div>
            <h3 className="text-[20px] font-semibold mb-[13px]">{name}</h3>
            <h4>{details}</h4>
         </div>
      </div>
   );
};

export default ServiceCard;
