import { auth } from "../Firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully!");
    return true;
  } catch (error) {
    console.error("Login error:", error.message);
    return false;
  }
};
export default loginUser;
