// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  REACT_APP_apiKey: "AIzaSyB-VYai0vcNBRSLijrDr6SRI8Sp4w0tWLw",
  REACT_APP_authDomain: "tutor-finder-761f7.firebaseapp.com",
  REACT_APP_projectId: "tutor-finder-761f7",
  REACT_APP_storageBucket: "tutor-finder-761f7.appspot.com",
  REACT_APP_messagingSenderId: "1084289760617",
  REACT_APP_appId: "1:1084289760617:web:a7df9c02520dc5b27ed1f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
