import React from "react";
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";
import treatment from "../../../../assets/images/treatment.png";
import ButtonGradient from "../../../../components/ButtonGradient/ButtonGradient";

const Services = () => {
   const services = [
      {
         name: "Fluoride Treatment",
         details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
         icon: fluoride,
      },
      {
         name: "Cavity Filling",
         details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
         icon: cavity,
      },
      {
         name: "Teeth Whitening",
         details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
         icon: whitening,
      },
   ];
   return (
      <div>
         <div className="mb-[50px] lg:mb-[70px]">
            <h3 className="text-secondary uppercase text-xl font-bold mb-[7px] text-center">
               Our Services
            </h3>
            <h1 className="text-primary text-3xl text-center">Services We Provide</h1>
         </div>

         <div className="grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-primary mt-6 mx-[25px] lg:mx-[21px] mb-[56px] lg:mb-[154px]">
            {services.map((service, index) => (
               <ServiceCard key={service.name + index} service={service} />
            ))}
         </div>

         {/* Treatment Example */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-[37px] lg:gap-[102px] justify-center items-center w-[95%] max-w-[1057px] mx-auto">
            <div>
               <img src={treatment} alt="" className="w-[90%] rounded-lg mx-auto" />
            </div>
            <div>
               <h1 className="text-5xl font-bold mb-[26px]">
                  Exceptional Dental Care, on Your Terms
               </h1>
               <p className="text-base mb-[45px]">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsumis
                  that it has a more-or-less normal <br /> distribution of letters,as opposed to
                  using 'Content here, content here', making it look like readable English. Many
                  desktop publishing packages and web page
               </p>
               <ButtonGradient>Get Started</ButtonGradient>
            </div>
         </div>
      </div>
   );
};

export default Services;
