import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ selectedDate }) => {
   return (
      <section className="mt-4">
         <p className="text-secondary text-center font-bold">
            Available Appointments on {format(selectedDate, "PP")}
         </p>
      </section>
   );
};

export default AvailableAppointments;
