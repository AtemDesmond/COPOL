import { auth } from "../Firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const registerUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered successfully!");
    return true;
  } catch (error) {
    console.error("Registration error:", error.message);
    return false;
  }
};
export default registerUser;
