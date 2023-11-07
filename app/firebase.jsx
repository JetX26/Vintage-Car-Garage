// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoGrLc06aP1ojmy9G2jUfIxHE6DZ28Fms",
  authDomain: "vintage-garage-3f328.firebaseapp.com",
  projectId: "vintage-garage-3f328",
  storageBucket: "vintage-garage-3f328.appspot.com",
  messagingSenderId: "794758146804",
  appId: "1:794758146804:web:3329c9491bd35041134ca1",
  measurementId: "G-TG5N33TEV7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
