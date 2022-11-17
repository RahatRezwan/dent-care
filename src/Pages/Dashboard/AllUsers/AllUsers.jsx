import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
   const { data: users = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: () => fetch("http://localhost:5000/users").then((res) => res.json()),
   });

   const handleMakeAdmin = (user) => {
      fetch(`http://localhost:5000/users/admin/${user._id}`, {
         method: "PUT",
         headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
         },
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.matchedCount > 0) {
               toast.success(`${user.name} is selected as Admin`);
               refetch();
            }
         });
   };
   return (
      <div>
         <h3 className="text-3xl">All Users</h3>

         <div className="overflow-x-auto">
            <table className="table w-[95%]">
               <thead>
                  <tr>
                     <th></th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Admin</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user, i) => (
                     <tr key={user._id} className="hover">
                        <th>{i + 1}</th>
                        <td>
                           {user.name}{" "}
                           {user?.role === "admin" && (
                              <div className="badge badge-success badge-sm text-white font-bold">
                                 Admin
                              </div>
                           )}
                        </td>
                        <td>{user.email}</td>
                        <td>
                           {user?.role !== "admin" && (
                              <button
                                 onClick={() => handleMakeAdmin(user)}
                                 className="btn btn-primary btn-xs text-white"
                              >
                                 Make Admin
                              </button>
                           )}
                        </td>
                        <td>
                           <button className="btn btn-error btn-xs text-white">Delete</button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default AllUsers;
