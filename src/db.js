// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt8jIzIIX0HTf2RKYF3RJfsJc6_xW_HOw",
  authDomain: "reddit-clone-c260c.firebaseapp.com",
  projectId: "reddit-clone-c260c",
  storageBucket: "reddit-clone-c260c.appspot.com",
  messagingSenderId: "344954113823",
  appId: "1:344954113823:web:c0730adde293fa2e902a2a",
  measurementId: "G-QNSL2ZXM1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);