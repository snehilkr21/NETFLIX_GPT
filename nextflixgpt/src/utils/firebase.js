// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA8gnJqRLo5dZsbJja708mjGgtoQCky2U",
  authDomain: "netflix-gpt-edd9d.firebaseapp.com",
  projectId: "netflix-gpt-edd9d",
  storageBucket: "netflix-gpt-edd9d.appspot.com",
  messagingSenderId: "278459742850",
  appId: "1:278459742850:web:1d8e64c45e1d81429d129b",
  measurementId: "G-21FYZFK7YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();