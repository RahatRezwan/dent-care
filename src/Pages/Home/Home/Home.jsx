import React from "react";
import Banner from "../Banner/Banner";
import HomeAppointment from "../HomeAppointment/HomeAppointment";
import InfoCards from "../InfoCards/InfoCards";
import Services from "./Services/Services";

const Home = () => {
   return (
      <div className="max-w-[1440px] mx-auto">
         <Banner />
         <InfoCards />
         <Services />
         <HomeAppointment />
      </div>
   );
};

export default Home;
