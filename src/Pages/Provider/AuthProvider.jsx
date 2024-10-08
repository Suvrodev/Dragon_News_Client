import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext("");
const AuthProvider = ({ children }) => {
  const baseUrl = "https://news-dragon-server-inpqy58dk-suvrodev.vercel.app";

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  // Google Login start
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Google Login End

  // Github Login start
  // Github Login End
  // Email and Password Login start
  const mailLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Email and Password Login End

  // Email and Password Registration start
  const mailRegistration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Email and Password Registration End

  // Logout Login start
  const Logout_ = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  // Logout Login End

  // Check User start
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User: ", currentUser);
      setLoading(false);
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);
  // Check User End

  ///SuccessFully Toast Start
  const successfullToast = (write) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: write,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  ///UnSuccessfull Toast Start
  const unSuccessfullToast = (write) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: write,
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };

  const authInfo = {
    baseUrl,
    user,
    googleLogin,
    mailLogin,
    mailRegistration,
    Logout_,
    loading,
    successfullToast,
    unSuccessfullToast,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
