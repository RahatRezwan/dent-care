import React from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
   const {
      data: doctors = [],
      isLoading,
      refetch,
   } = useQuery({
      queryKey: ["doctors"],
      queryFn: () =>
         fetch("http://localhost:5000/doctors", {
            headers: {
               authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
         }).then((res) => res.json()),
   });

   const handleDelete = (doctor) => {
      fetch(`http://localhost:5000/doctors/${doctor._id}`, {
         method: "DELETE",
         headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
         },
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.deletedCount > 0) {
               toast.success(`${doctor.name} has successfully removed from list`);
               refetch();
            }
         });
   };

   if (isLoading) {
      return <Loading />;
   }
   return (
      <div>
         <h1 className="text-2xl">Manage Doctors</h1>

         <div className="overflow-x-auto">
            <table className="table w-[95%]">
               <thead>
                  <tr>
                     <th></th>
                     <th>Photo</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Specialty</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {doctors.map((doctor, i) => (
                     <tr key={doctor._id} className="hover">
                        <th>{i + 1}</th>
                        <td>
                           <div className="avatar ">
                              <div className="w-12 rounded-full">
                                 <img src={doctor.image} alt="" />
                              </div>
                           </div>
                        </td>
                        <td>{doctor.name} </td>
                        <td>{doctor.email}</td>
                        <td>{doctor.specialty}</td>
                        <td>
                           <label
                              htmlFor="confirmation-modal"
                              className="btn btn-error btn-xs text-white"
                           >
                              Delete
                           </label>
                        </td>

                        <ConfirmationModal
                           title="Delete Confirmation"
                           message={`Are you sure you want to remove ${doctor.name} from the list? Once you delete it cannot be undone.`}
                           confirmDelete={handleDelete}
                           deleteData={doctor}
                        ></ConfirmationModal>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ManageDoctors;
