import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../../hooks/useToken";

const Login = () => {
   const { loginAUser } = useContext(AuthContext);
   const [loginError, setLoginError] = useState("");
   const {
      register,
      formState: { errors },
      handleSubmit,
   } = useForm();

   const [loginUserEmail, setLoginUserEmail] = useState("");
   const [token] = useToken(loginUserEmail);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   if (token) {
      toast.success("Login successfully");
      navigate(from, { replace: true });
   }

   const handleLogin = (data) => {
      console.log(data);
      setLoginError("");
      loginAUser(data.email, data.password)
         .then((result) => {
            setLoginUserEmail(data.email);
         })
         .catch((e) => {
            console.log(e);
            setLoginError(e.code.slice(5));
         });
   };
   return (
      <div className="h-[600px] flex justify-center items-center">
         <div>
            <h2 className="text-2xl text-center">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
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
                     type="text"
                     {...register("password", { required: "Password is required" })}
                     className={`${errors?.password && "input-error"} input input-bordered w-full`}
                  />
                  {errors.password && (
                     <p className="text-error" role="alert">
                        {errors.password?.message}
                     </p>
                  )}
                  <label className="label">
                     <span className="label-text-alt">
                        <Link>forget Password?</Link>
                     </span>
                  </label>
               </div>
               {loginError && <p className="text-error capitalize">{loginError}</p>}
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
