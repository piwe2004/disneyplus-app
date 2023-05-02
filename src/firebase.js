// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4wiBOEhJc1V9FMU02ai4Z-xzbMOzs7k8",
  authDomain: "reactdineyplusapp.firebaseapp.com",
  projectId: "reactdineyplusapp",
  storageBucket: "reactdineyplusapp.appspot.com",
  messagingSenderId: "1085839669649",
  appId: "1:1085839669649:web:c33d4d500df943f76bc230",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app