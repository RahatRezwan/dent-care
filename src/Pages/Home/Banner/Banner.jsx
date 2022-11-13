import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import ButtonGradient from "../../../components/ButtonGradient/ButtonGradient";

const Banner = () => {
   return (
      <div>
         <div
            className="hero min-h-screen mt-[10px] max-w-[1398px] mx-auto bg-cover bg-left bg-no-repeat"
            style={{
               backgroundImage: `
            url(${bg})`,
            }}
         >
            <div className="hero-content flex-col lg:flex-row-reverse">
               <img src={chair} className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt="" />
               <div>
                  <h1 className="text-[48px] text-primary font-bold mb-[14px]">
                     Your New Smile Starts Here
                  </h1>
                  <p className="text-[16px] text-primary mb-[30px]">
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the
                  </p>
                  <ButtonGradient>Get Started</ButtonGradient>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
