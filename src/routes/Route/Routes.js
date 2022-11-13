import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import { Appointment, Home, Login, Register } from "../../Pages";

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
]);
