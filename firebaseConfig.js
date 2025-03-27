// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   query,
//   where,
//   getDocs,
//   doc,
//   setDoc,
// } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBnKqkqrw8uySYHKKzptQUDILXsfrQZ4fI",
//   authDomain: "cloud-cop-1.firebaseapp.com",
//   projectId: "cloud-cop-1",
//   storageBucket: "cloud-cop-1.appspot.com", // Fixed storageBucket
//   messagingSenderId: "773093429951",
//   appId: "1:773093429951:web:9d1218802826a7cb686c0a",
// };

// // Initialize Firebase app
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db };

// // Function to register a user
// export const registerUser = async (email, password) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;

//     // Add user to Firestore
//     await setDoc(doc(db, "users", user.uid), {
//       email, password
//     });

//     console.log("User registered successfully!");

//   } catch (error) {
//     console.error("Error registering user:", error.message);
//   }
// };

// // Function to log in a user
// export const loginUser = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//       console.log("User logged in successfully!");
//       return user;

//   } catch (error) {
//     console.error("Error logging in user:", error.message);
//     return null;
//   }
// };
// // Function to report a crime
// export const reportCrime = async (userId, reportData) => {
//   try {
//     await addDoc(collection(db, "users", userId, "reports"), reportData);
//     console.log("Crime report submitted successfully!");
//   } catch (error) {
//     console.error("Error reporting crime:", error.message);
//   }
// };
