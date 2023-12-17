// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV1yONQ4ERux9y_xIJKhwqPLjunF5i2Sg",
  authDomain: "netflix-clone-b56e0.firebaseapp.com",
  projectId: "netflix-clone-b56e0",
  storageBucket: "netflix-clone-b56e0.appspot.com",
  messagingSenderId: "162109403090",
  appId: "1:162109403090:web:48a6e62da45eb8d415620b",
  measurementId: "G-C5P9E3R18B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
