import { auth } from "../Firebase/FirebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

export const forgotPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent!");
    return { success: true, message: "Check your email for reset link!" };
  } catch (error) {
    console.error("Error sending password reset email:", error.message);
    return { success: false, message: error.message };
  }
};
export default forgotPassword;
