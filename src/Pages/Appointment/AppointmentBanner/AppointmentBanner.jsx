import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ setSelectedDate, selectedDate }) => {
   return (
      <div>
         <div
            className="hero py-[142px] mt-[10px] max-w-[1398px] mx-auto bg-cover bg-left bg-no-repeat"
            style={{
               backgroundImage: `
            url(${bg})`,
            }}
         >
            <div className="hero-content flex-col lg:flex-row-reverse gap-[121px]">
               <img
                  src={chair}
                  className="w-full lg:w-1/2 rounded-lg shadow-2xl"
                  alt="dentist chair"
               />
               <div className="">
                  <DayPicker mode="single" select={selectedDate} onSelect={setSelectedDate} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default AppointmentBanner;
