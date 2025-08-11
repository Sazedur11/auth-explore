// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOOOwKdNlUCYOJnKqMpcwZAgo-WcYJUGs",
  authDomain: "auth-explore-8747a.firebaseapp.com",
  projectId: "auth-explore-8747a",
  storageBucket: "auth-explore-8747a.firebasestorage.app",
  messagingSenderId: "215688455603",
  appId: "1:215688455603:web:9fb050921a60f90cf897c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

 
