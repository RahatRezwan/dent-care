import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOptions from "./AppointmentOptions";

const AvailableAppointments = ({ selectedDate }) => {
   // const [appointmentOptions, setAppointmentOptions] = useState([]);
   const [treatment, setTreatment] = useState(null);

   const date = format(selectedDate, "PP");

   /* Load data using react/tanStack query */
   const {
      data: appointmentOptions = [],
      refetch,
      isLoading,
   } = useQuery({
      queryKey: ["appointmentOptions", date],
      queryFn: () =>
         fetch(`http://localhost:5000/appointmentoptions?date=${date}`).then((res) => res.json()),
   });
   /* useEffect(() => {
      fetch("http://localhost:5000/appointmentoptions")
         .then((res) => res.json())
         .then((data) => setAppointmentOptions(data));
   }, []); */

   if (isLoading) {
      return <Loading />;
   }

   return (
      <section className="mt-4 max-w-[1345px] w-[90%] mx-auto">
         <p className="text-secondary text-center font-bold mb-[100px]">
            Available Appointments on {format(selectedDate, "PP")}
         </p>

         <div className="grid gap-[35px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {appointmentOptions.map((appointment, index) => (
               <AppointmentOptions
                  key={appointment._id}
                  appointment={appointment}
                  setTreatment={setTreatment}
               />
            ))}
         </div>

         {treatment && (
            <BookingModal
               setTreatment={setTreatment}
               treatment={treatment}
               refetch={refetch}
               selectedDate={selectedDate}
            />
         )}
      </section>
   );
};

export default AvailableAppointments;
