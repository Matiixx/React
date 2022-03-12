import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC0_qqp0YZT8IrRAEtCAG35gPYF7BRTQiU",
  authDomain: "crud-25715.firebaseapp.com",
  projectId: "crud-25715",
  storageBucket: "crud-25715.appspot.com",
  messagingSenderId: "1049760194810",
  appId: "1:1049760194810:web:f9ffdca2e43a688fffa943"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);