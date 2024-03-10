// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVUR7znG9_TpUGCWeRueQDbiRRfpyaNXc",
  authDomain: "vite-contact-96916.firebaseapp.com",
  projectId: "vite-contact-96916",
  storageBucket: "vite-contact-96916.appspot.com",
  messagingSenderId: "882856681049",
  appId: "1:882856681049:web:47e7b0ba283711ae5bdb48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
