import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOptions from "./AppointmentOptions";

const AvailableAppointments = ({ selectedDate }) => {
   const [appointmentOptions, setAppointmentOptions] = useState([]);
   const [treatment, setTreatment] = useState(null);
   useEffect(() => {
      fetch("appointmentOptions.json")
         .then((res) => res.json())
         .then((data) => setAppointmentOptions(data));
   }, []);

   return (
      <section className="mt-4 max-w-[1345px] w-[90%] mx-auto">
         <p className="text-secondary text-center font-bold mb-[100px]">
            Available Appointments on {format(selectedDate, "PP")}
         </p>

         <div className="grid gap-[35px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {appointmentOptions.map((appointment, index) => (
               <AppointmentOptions
                  key={appointment.name + index}
                  appointment={appointment}
                  setTreatment={setTreatment}
               />
            ))}
         </div>

         {treatment && (
            <BookingModal
               setTreatment={setTreatment}
               treatment={treatment}
               selectedDate={selectedDate}
            />
         )}
      </section>
   );
};

export default AvailableAppointments;
