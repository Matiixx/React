import React, { useContext, useState, useEffect } from 'react';
import { firebaseApp } from '../firebase';

const AuthContext = React.createContext();

export function useAuth(){
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState();

  function signUp(email, password) {
    //return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, [])

 

  const value = {
    currentUser,
    signUp,
  }

  return (
    <AuthContext.Provider value={ value }>
      { children }
    </AuthContext.Provider>
  );
}
