import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";

const Home = () => {
   return (
      <div className="max-w-[1440px] mx-auto">
         <Banner />
         <InfoCards />
      </div>
   );
};

export default Home;
