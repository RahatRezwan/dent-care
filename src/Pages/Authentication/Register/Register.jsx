import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../../hooks/useToken";

const Register = () => {
   const { createNewUser, updateAUser } = useContext(AuthContext);
   const [signUpError, setSignUpError] = useState("");
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();

   const [createdUserEmail, setCreatedUserEmail] = useState("");
   const [token] = useToken(createdUserEmail);
   const navigate = useNavigate();

   if (token) {
      toast.success("User Created Successfully");
      navigate("/");
   }

   const handleRegister = (data) => {
      console.log(data);
      setSignUpError("");
      createNewUser(data.email, data.password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            const userInfo = { displayName: data.name };
            updateAUser(userInfo)
               .then(() => {
                  saveUserInDB(data.name, data.email);
               })
               .catch((e) => console.log(e));
         })
         .catch((e) => {
            setSignUpError(e.code.slice(5));
         });
   };

   /* save user in database */
   const saveUserInDB = (name, email) => {
      const user = { name, email };
      fetch("http://localhost:5000/users", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(user),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.acknowledged) {
               setCreatedUserEmail(email);
            }
         });
   };

   return (
      <div className="h-[600px] flex justify-center items-center">
         <div>
            <h2 className="text-2xl text-center">Sign Up</h2>
            <form onSubmit={handleSubmit(handleRegister)}>
               <div className="form-control w-full">
                  <label className="label">
                     <span className={`${errors?.name && "text-error"} label-text`}>Name *</span>
                  </label>
                  <input
                     type="text"
                     {...register("name", { required: "Name is required" })}
                     className={`${errors?.name && "input-error"} input input-bordered w-full`}
                  />
                  {errors.name && (
                     <p className="text-error" role="alert">
                        {errors.name?.message}
                     </p>
                  )}
               </div>
               <div className="form-control w-full">
                  <label className="label">
                     <span className={`${errors?.email && "text-error"} label-text`}>Email *</span>
                  </label>
                  <input
                     type="email"
                     {...register("email", { required: "Email Address is required" })}
                     className={`${errors?.email && "input-error"} input input-bordered w-full`}
                  />
                  {errors.email && (
                     <p className="text-error" role="alert">
                        {errors.email?.message}
                     </p>
                  )}
               </div>

               <div className="form-control w-full">
                  <label className="label">
                     <span className={`${errors?.password && "text-error"} label-text`}>
                        Password *
                     </span>
                  </label>
                  <input
                     type="password"
                     {...register("password", {
                        required: "Password is required",
                        pattern: {
                           value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                           message:
                              "Your password must be combination of capital letter, small letter, special character and digits.",
                        },
                     })}
                     className={`${errors?.password && "input-error"} input input-bordered w-full`}
                  />
                  {errors.password && (
                     <p className="text-error" role="alert">
                        {errors.password?.message}
                     </p>
                  )}
               </div>
               {signUpError && <p className="text-error capitalize">{signUpError}</p>}
               <input
                  type="submit"
                  className="btn text-white btn-primary hover:btn-secondary  w-full"
                  value="Sign Up"
               />
            </form>
            <p className="">
               Already have an account?{" "}
               <Link to="/login" className="text-secondary hover:text-accent">
                  Login
               </Link>
            </p>
            <div className="divider">OR</div>
            <button className="btn btn-outline btn-primary w-full">Login with google</button>
         </div>
      </div>
   );
};

export default Register;
