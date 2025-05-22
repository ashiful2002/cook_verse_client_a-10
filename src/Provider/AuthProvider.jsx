import React, { createContext, useState, useEffect } from "react";
import { auth } from "../Firebase/Firebse.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
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

  // sign in with email and password

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // forgot user password
  // forgotPassword
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // social log in
  // sign in with google
  const GoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // unsubscrive or track user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const authData = {
    createUser,
    GoogleLogin,
    user,
    setUser,
    loading,
    setLoading,
    signOutUser,
    forgotPassword,
    loginUser,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
