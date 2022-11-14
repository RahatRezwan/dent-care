import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
   const [selectedDate, setSelectedDate] = useState(new Date());
   return (
      <div className="max-w-[1440px] mx-auto">
         <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
         <AvailableAppointments selectedDate={selectedDate} />
      </div>
   );
};

export default Appointment;
