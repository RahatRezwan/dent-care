import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
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

   /* Logout a user */
   const logoutAUser = () => {
      setLoader(true);
      return signOut(auth);
   };

   /* get current user */
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         console.log("Current User: ", currentUser);
      });
      return () => unsubscribe();
   }, []);

   const authInfo = { user, createNewUser, loader, loginAUser, logoutAUser };
   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
