import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import ButtonGradient from "../../../components/ButtonGradient/ButtonGradient";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import logoLight from "../../../LogoLight.svg";

const menuItems = [
   { menu: "Home", link: "/home" },
   { menu: "About", link: "/about" },
   { menu: "AppointMent", link: "/appointment" },
   { menu: "Reviews", link: "/reviews" },
   { menu: "Contact Us", link: "/contact" },
];

const Navbar = () => {
   const { logoutAUser, user } = useContext(AuthContext);
   const handleLogout = () => {
      logoutAUser()
         .then(() => {})
         .catch((e) => console.log(e));
   };
   return (
      <div className="shadow-md w-full">
         <div className="navbar flex justify-between items-center max-w-[1251px] mx-auto my-[10px]">
            <div className="flex-1">
               <Link className="max-w-[30%] md:max-w-[170px] lg:max-w-[190px]">
                  <img src={logoLight} alt="" className="w-100" />
               </Link>
            </div>
            <div className="hidden lg:block flex-none">
               <ul className="menu menu-horizontal p-0">
                  {menuItems.map((menu, i) => (
                     <li key={menu.menu + i}>
                        <NavLink
                           className={({ isActive }) =>
                              isActive
                                 ? "btn btn-active text-white rounded-md"
                                 : "btn btn-ghost rounded-md"
                           }
                           to={menu.link}
                        >
                           {menu.menu}
                        </NavLink>
                     </li>
                  ))}

                  {user?.uid ? (
                     <>
                        <div className="flex items-center gap-4">
                           <li className="avatar">
                              <Link className="w-12 h-12 rounded-full ring ring-secondary">
                                 <img src="" alt="profile" className="w-full" />
                              </Link>
                           </li>

                           <Link onClick={handleLogout} className="">
                              <ButtonGradient>Logout</ButtonGradient>
                           </Link>
                        </div>
                     </>
                  ) : (
                     <>
                        <Link to="/login" className="">
                           <ButtonGradient>Login</ButtonGradient>
                        </Link>
                     </>
                  )}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
