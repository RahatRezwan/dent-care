import React from "react";
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor-small.png";
import ButtonGradient from "../../../components/ButtonGradient/ButtonGradient";

const HomeAppointment = () => {
   return (
      <div
         className="bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url(${appointment})` }}
      >
         <div className="max-w-[1170px] w-[90%] mx-auto flex md:flex-col-reverse lg:flex-row items-center mt-[70px] lg:mt-[272px]">
            <div className="w-[85%] md:p-0 lg:w-1/2 hidden md:block">
               <img src={doctor} alt="" className="w-full lg:-mt-[103px] " />
            </div>
            <div className="w-[85%] lg:w-1/2 text-white py-[71px] lg:p-0">
               <h4 className="text-secondary text-xl font-bold mb-[22px]">Appointment</h4>
               <h1 className="text-4xl font-semibold mb-[22px]">Make an appointment Today</h1>
               <p className="mb-[30px]">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsumis
                  that it has a more-or-less normal distribution of letters,as opposed to using
                  'Content here, content here', making it look like readable English. Many desktop
                  publishing packages and web page
               </p>
               <ButtonGradient>Appointment</ButtonGradient>
            </div>
         </div>
      </div>
   );
};

export default HomeAppointment;
