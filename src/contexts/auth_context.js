import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";

const AuthContext = createContext();

export default function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const api = {
    currentUser,
    signup,
  };

  return (
    <AuthContext.Provider value={api}>{props.children}</AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
