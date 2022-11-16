import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const BookingModal = ({ setTreatment, treatment, selectedDate, refetch }) => {
   const { name: treatmentName, slots } = treatment;
   const date = format(selectedDate, "PP");

   const { user } = useContext(AuthContext);

   const handleBooking = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const phone = form.phone.value;
      const email = form.email.value;
      const slot = form.slot.value;

      const booking = {
         appointmentDate: date,
         treatment: treatmentName,
         Patient: name,
         phone,
         email,
         slot,
      };

      /* ToDo: send data to the server and once data is saved then
      close the modal and display success toast */
      fetch("http://localhost:5000/bookings", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(booking),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.acknowledged) {
               setTreatment(null);
               toast.success("Your booking is confirmed");
               refetch();
            } else {
               toast.error(data.message);
            }
         });
   };
   return (
      <>
         <input type="checkbox" id="booking-modal" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box relative">
               <div className="flex justify-between items-center">
                  <label
                     htmlFor="booking-modal"
                     className="btn btn-sm btn-primary btn-circle absolute right-2 top-2"
                  >
                     ✕
                  </label>
                  <h3 className="text-lg font-bold">{treatmentName}</h3>
               </div>

               <form onSubmit={handleBooking} className="mt-6 grid grid-cols-1 gap-3">
                  <input
                     type="text"
                     value={date}
                     className="input input-bordered w-full"
                     disabled
                  />
                  <select name="slot" className="select select-bordered w-full">
                     {slots?.map((slot, i) => (
                        <option key={i} value={slot}>
                           {slot}
                        </option>
                     ))}
                  </select>
                  <input
                     type="text"
                     placeholder="Full Name"
                     name="name"
                     defaultValue={user?.displayName}
                     className="input input-bordered w-full"
                  />
                  <input
                     type="text"
                     placeholder="Phone Number"
                     name="phone"
                     className="input input-bordered w-full"
                  />
                  <input
                     type="text"
                     placeholder="Email"
                     name="email"
                     defaultValue={user?.email}
                     disabled
                     className="input input-bordered w-full"
                  />
                  <input
                     type="submit"
                     className="input w-full btn-primary flex justify-center items-center text-md uppercase"
                     value="Submit"
                  />
               </form>
            </div>
         </div>
      </>
   );
};

export default BookingModal;
