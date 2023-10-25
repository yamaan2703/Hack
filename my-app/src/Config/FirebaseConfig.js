// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXMFqKnZ3cgNJtGrUeIFFRydCGfe6jdA8",
  authDomain: "hack-983fb.firebaseapp.com",
  databaseURL: "https://hack-983fb-default-rtdb.firebaseio.com",
  projectId: "hack-983fb",
  storageBucket: "hack-983fb.appspot.com",
  messagingSenderId: "331273040463",
  appId: "1:331273040463:web:5dd132bb534cbdf5b7f03a",
  measurementId: "G-Q3Z91X5FBG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);