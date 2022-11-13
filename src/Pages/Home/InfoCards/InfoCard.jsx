import React from "react";

const InfoCard = ({ card }) => {
   const { name, details, icon, background } = card;
   return (
      <div>
         <div
            className="py-[52px] px-[32px] rounded-[14px] flex flex-col lg:flex-row lg:justify-start lg:items-center gap-[22px]"
            style={{ background: `${background}` }}
         >
            <div className="flex justify-center lg:justify-start">
               <img src={icon} alt="icon" className="" />
            </div>
            <div className="">
               <h2 className="text-xl font-bold">{name}</h2>
               <p className="text-base">{details}</p>
            </div>
         </div>
      </div>
   );
};

export default InfoCard;
