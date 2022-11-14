import React from "react";

const AppointmentOptions = ({ appointment, setTreatment }) => {
   const { name, slots } = appointment;
   return (
      <div className="card bg-white" style={{ boxShadow: "3px 4px 10px 2px rgba(0, 0, 0, 0.05)" }}>
         <div className="card-body items-center text-center">
            <h2 className="text-xl font-bold text-secondary">{name}</h2>
            <p className="text-primary">{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
            <p className="text-primary">
               {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
            </p>
            <div className="card-actions justify-end">
               <label
                  htmlFor="booking-modal"
                  className="btn text-white gradient border-none"
                  onClick={() => setTreatment(appointment)}
               >
                  Book Appointment
               </label>
            </div>
         </div>
      </div>
   );
};

export default AppointmentOptions;
