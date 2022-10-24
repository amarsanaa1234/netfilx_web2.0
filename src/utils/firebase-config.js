
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDGOTRXSBcloljebHCeuisCkp67eYkNJHo",
  authDomain: "react-netflix-clone-66fa8.firebaseapp.com",
  projectId: "react-netflix-clone-66fa8",
  storageBucket: "react-netflix-clone-66fa8.appspot.com",
  messagingSenderId: "272564613821",
  appId: "1:272564613821:web:91a9565c6b60811e113dd4",
  measurementId: "G-VEK578221Q"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);