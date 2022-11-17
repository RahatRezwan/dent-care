import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Main from "../../layouts/Main";
import { Appointment, Home, Login, Register } from "../../Pages";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyAppointments from "../../Pages/Dashboard/MyAppointments/MyAppointments";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/home",
            element: <Home />,
         },
         {
            path: "/appointment",
            element: <Appointment />,
         },
         {
            path: "/Login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
      ],
   },
   {
      path: "/dashboard",
      element: (
         <PrivateRoute>
            <DashboardLayout />
         </PrivateRoute>
      ),
      children: [
         {
            path: "/dashboard",
            element: <MyAppointments />,
         },
         {
            path: "/dashboard/allUsers",
            element: (
               <AdminRoute>
                  <AllUsers />
               </AdminRoute>
            ),
         },
      ],
   },
]);
