// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-MdYs2r2LwhlrYz4A-hczDevEbMatUFA",
  authDomain: "netflixgpt-bc9d2.firebaseapp.com",
  projectId: "netflixgpt-bc9d2",
  storageBucket: "netflixgpt-bc9d2.appspot.com",
  messagingSenderId: "199683261134",
  appId: "1:199683261134:web:314dd7b086eef3e518469f",
  measurementId: "G-JWB7EPBRPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();