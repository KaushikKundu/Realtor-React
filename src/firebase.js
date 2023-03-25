// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP8ZbviZ4hGZjVyab2ZNcAgqD1Y6JbZQM",
  authDomain: "realtor-clone-react-62a0b.firebaseapp.com",
  projectId: "realtor-clone-react-62a0b",
  storageBucket: "realtor-clone-react-62a0b.appspot.com",
  messagingSenderId: "879981479272",
  appId: "1:879981479272:web:5a1e189e5c23c48ad802dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()