import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const MyAppointments = () => {
   const { user } = useContext(AuthContext);

   const url = `http://localhost:5000/bookings?email=${user?.email}`;

   const { data: bookings = [] } = useQuery({
      queryKey: ["bookings", user?.email],
      queryFn: () =>
         fetch(url, {
            headers: {
               authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
         }).then((res) => res.json()),
   });

   return (
      <div>
         <h3 className="text-3xl mb-5">My Appointments</h3>

         <div className="overflow-x-auto">
            <table className="table w-[95%]">
               <thead>
                  <tr>
                     <th></th>
                     <th>Patient</th>
                     <th>Treatment</th>
                     <th>Appointment Date</th>
                     <th>Appointment Slot</th>
                  </tr>
               </thead>
               <tbody>
                  {bookings.map((book, i) => (
                     <tr key={book._id} className="hover">
                        <th>{i + 1}</th>
                        <td>{book.Patient}</td>
                        <td>{book.treatment}</td>
                        <td>{book.appointmentDate}</td>
                        <td>{book.slot}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default MyAppointments;
