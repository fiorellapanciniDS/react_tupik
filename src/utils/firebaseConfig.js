// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn1Vm9SOYeECtFMRU5lLmqNt0vnZSaxVM",
  authDomain: "tupik-4cdb2.firebaseapp.com",
  projectId: "tupik-4cdb2",
  storageBucket: "tupik-4cdb2.appspot.com",
  messagingSenderId: "670444010893",
  appId: "1:670444010893:web:d84f8159a77690750b51c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;