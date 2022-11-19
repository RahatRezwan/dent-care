import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctors = () => {
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();

   const imgHostKey = process.env.REACT_APP_imgbb_key;

   const navigate = useNavigate();

   const { data: specialties = [] } = useQuery({
      queryKey: ["specialty"],
      queryFn: () => fetch("http://localhost:5000/appointmentSpecialty").then((res) => res.json()),
   });

   /* handle add doctor */
   const handleAddDoctor = (data) => {
      console.log(data.photo[0]);
      const image = data.photo[0];
      const formData = new FormData();
      formData.append("image", image);

      fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
         method: "POST",
         body: formData,
      })
         .then((res) => res.json())
         .then((imgData) => {
            if (imgData.success) {
               console.log(imgData.data.url);
               const doctor = {
                  name: data.name,
                  email: data.email,
                  specialty: data.specialty,
                  image: imgData.data.url,
               };

               /* save doctor info to the db */
               fetch("http://localhost:5000/doctors", {
                  method: "POST",
                  headers: {
                     "content-type": "application/json",
                     authorization: `bearer ${localStorage.getItem("accessToken")}`,
                  },
                  body: JSON.stringify(doctor),
               })
                  .then((res) => res.json())
                  .then((data) => {
                     if (data.acknowledged) {
                        toast.success(`${data.name} added successfully`);
                        navigate("/dashboard/managedoctors");
                     }
                     console.log(data);
                  });
            }
         });
   };
   return (
      <div>
         <h1 className="text-4xl">Add Doctor</h1>

         <form
            onSubmit={handleSubmit(handleAddDoctor)}
            className="max-w-[50%] border p-10 rounded-md mt-4"
         >
            <div className="form-control w-full">
               <label className="label">
                  <span className={`${errors?.name && "text-error"} label-text`}>Name</span>
               </label>
               <input type="text" {...register("name")} className={`input input-bordered w-full`} />
            </div>
            <div className="form-control w-full">
               <label className="label">
                  <span className={`label-text`}>Email</span>
               </label>
               <input
                  type="email"
                  {...register("email")}
                  className={`input input-bordered w-full`}
               />
            </div>
            <div className="form-control w-full">
               <label className="label">
                  <span className={`label-text`}>Specialty</span>
               </label>
               <select {...register("specialty")} className="select select-bordered w-full">
                  {specialties.map((specialty) => (
                     <option key={specialty._id}>{specialty.name}</option>
                  ))}
               </select>
            </div>

            <div className="form-control w-full">
               <label className="label">
                  <span className={`${errors?.name && "text-error"} label-text`}>Photo</span>
               </label>
               <input
                  type="file"
                  {...register("photo")}
                  className={`input input-bordered w-full`}
               />
            </div>

            <input
               type="submit"
               className="btn text-white btn-primary hover:btn-secondary  w-full mt-5"
               value="ADD"
            />
         </form>
      </div>
   );
};

export default AddDoctors;
