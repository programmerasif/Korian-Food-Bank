// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjVOOTxunDNo-Y-2lj6YqQf9qRA01VSSY",
  authDomain: "assignment10-e21db.firebaseapp.com",
  projectId: "assignment10-e21db",
  storageBucket: "assignment10-e21db.appspot.com",
  messagingSenderId: "84744905373",
  appId: "1:84744905373:web:8f41049d71a2a53c44ea74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app