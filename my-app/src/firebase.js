import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcW_1ELpDm1wwiImajObLnzntnxaEvPm8",
  authDomain: "myfirstauth-32a49.firebaseapp.com",
  projectId: "myfirstauth-32a49",
  storageBucket: "myfirstauth-32a49.appspot.com",
  messagingSenderId: "221373031315",
  appId: "1:221373031315:web:ae7ec88a4bdf47102abe66",
  measurementId: "G-5EKHWLL62R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};