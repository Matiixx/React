import firebase, { initializeApp } from "firebase/app";
require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyBsif--Xt5MENVtPwSIsPhmPvZQ3CVDkHY",
  authDomain: "register-login-page-47729.firebaseapp.com",
  projectId: "register-login-page-47729",
  storageBucket: "register-login-page-47729.appspot.com",
  messagingSenderId: "358170289051",
  appId: "1:358170289051:web:3cbab017d510cf7fdd773e"
};

export const firebaseApp = initializeApp(firebaseConfig);