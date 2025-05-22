import React, { createContext, useState } from "react";
import { auth } from "../Firebase/Firebse.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  // create new user with email auth
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // social log in
  // sign in with popup
  const GoogleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  const signOutUser = () => {
   return signOut(auth);
  };
  const authData = {
    createUser,
    GoogleLogin,
    user,
    setUser,
    loading,
    setLoading,
    signOutUser
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
