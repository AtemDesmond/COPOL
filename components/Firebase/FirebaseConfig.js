import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFLvOb8xTLWR1DCjnhtIGe1mnfVaPczSo",
  authDomain: "copol-a4ab0.firebaseapp.com",
  projectId: "copol-a4ab0",
  storageBucket: "copol-a4ab0.firebasestorage.app",
  messagingSenderId: "1055713904358",
  appId: "1:1055713904358:web:fb30619f47c804d7415d27",
  measurementId: "G-Q54BDXRF2W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
