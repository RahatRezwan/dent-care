import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
   const { loader, user } = useContext(AuthContext);
   const [isAdmin, isAdminLoading] = useAdmin(user?.email);
   const location = useLocation();
   if (loader || isAdminLoading) {
      return <div>Loading...</div>;
   }
   if (user && isAdmin) {
      return children;
   }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
