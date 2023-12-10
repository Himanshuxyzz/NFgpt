// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQBU1Cr_mAk7MOEutu6ku1qpqdCFK2dv0",
  authDomain: "nf-clone-d553d.firebaseapp.com",
  projectId: "nf-clone-d553d",
  storageBucket: "nf-clone-d553d.appspot.com",
  messagingSenderId: "410215582040",
  appId: "1:410215582040:web:bd12a8a5e1881d2337bd2d",
  measurementId: "G-D7PKJBTH8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();