import React from "react";
import fluoride from "../../../../assets/images/fluoride.png";
import cavity from "../../../../assets/images/cavity.png";
import whitening from "../../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

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
         <div className="grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-primary mt-6 mx-[25px] lg:mx-[21px] mb-[82px] lg:mb-[131px]">
            {services.map((service, index) => (
               <ServiceCard key={service.name + index} service={service} />
            ))}
         </div>
      </div>
   );
};

export default Services;
