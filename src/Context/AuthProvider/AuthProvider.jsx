import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
   updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loader, setLoader] = useState(true);

   /* Sign up with email and password */
   const createNewUser = (email, password) => {
      setLoader(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   /* Login a user */
   const loginAUser = (email, password) => {
      setLoader(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   /* Update a user profile */
   const updateAUser = (userInfo) => {
      setLoader(true);
      return updateProfile(auth.currentUser, userInfo);
   };

   /* Logout a user */
   const logoutAUser = () => {
      setLoader(true);
      localStorage.removeItem("accessToken");
      return signOut(auth);
   };

   /* get current user */
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoader(false);
         console.log("Current User: ", currentUser);
      });
      return () => unsubscribe();
   }, []);

   const authInfo = { user, createNewUser, loader, loginAUser, logoutAUser, updateAUser };
   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
