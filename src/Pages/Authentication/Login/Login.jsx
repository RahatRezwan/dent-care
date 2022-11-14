import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
   const { register, handleSubmit } = useForm();

   const handleLogin = (data) => {
      console.log(data);
   };
   return (
      <div className="h-[600px] flex justify-center items-center">
         <div>
            <h2 className="text-2xl text-center">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input
                     type="text"
                     {...register("email")}
                     className="input input-bordered w-full"
                  />
               </div>

               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text">Password</span>
                  </label>
                  <input
                     type="password"
                     {...register("password")}
                     className="input input-bordered w-full"
                  />
                  <label className="label">
                     <span className="label-text-alt">
                        <Link>forget Password?</Link>
                     </span>
                  </label>
               </div>

               <input
                  type="submit"
                  className="btn text-white btn-primary hover:btn-secondary  w-full"
                  value="Login"
               />
            </form>
            <p className="">
               New to DentCare?{" "}
               <Link to="/register" className="text-secondary hover:text-accent">
                  Create new account
               </Link>
            </p>
            <div className="divider">OR</div>
            <button className="btn btn-outline btn-primary w-full">Login with google</button>
         </div>
      </div>
   );
};

export default Login;
