import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
   const { user } = useContext(AuthContext);
   const [isAdmin] = useAdmin(user?.email);

   return (
      <div>
         <Navbar />
         <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
               <Outlet />
               <label
                  htmlFor="dashboard-drawer"
                  className="btn btn-primary drawer-button lg:hidden"
               >
                  Open drawer
               </label>
            </div>
            <div className="drawer-side">
               <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
               <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                  <li>
                     <Link to="/dashboard">My Appointments</Link>
                  </li>
                  {isAdmin ? (
                     <>
                        <li>
                           <Link to="/dashboard/allUsers">All Users</Link>
                        </li>
                        <li>
                           <Link to="/dashboard/add-doctor">Add A Doctor</Link>
                        </li>
                        <li>
                           <Link to="/dashboard/managedoctors">Manage Doctors</Link>
                        </li>
                     </>
                  ) : null}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default DashboardLayout;
