// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnHK8p-k5nP-ikZdagJH2-pWtWjlBRvvA",
  authDomain: "realtor-clone-react-48643.firebaseapp.com",
  projectId: "realtor-clone-react-48643",
  storageBucket: "realtor-clone-react-48643.appspot.com",
  messagingSenderId: "613695981184",
  appId: "1:613695981184:web:8a349699762a8b2eea0865"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()