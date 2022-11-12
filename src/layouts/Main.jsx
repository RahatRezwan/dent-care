import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../Pages";

const Main = () => {
   return (
      <div>
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Main;
