import React, { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { Formik } from "formik";
import * as Yup from "yup"; // For validation schema

import LoginInputs from "./LoginInputs";
import styles from "../components/StyleAuth";
import loginUser from "../components/Firebase/Login";
import registerUser from "./Firebase/Register";

const LoginAuth = ({ navigation }) => {
  useEffect(() => {
    if (Name === "Login") {
      Toast.show({
        type: "success",
        text1: "Welcome Back",
        text2: "We Are Happy To See You Again",
        position: "top", // position can be 'top', 'bottom', or 'center'
        visibilityTime: 4000, // time in milliseconds
        autoHide: true, // whether the toast should automatically disappear
        topOffset: 5, // distance from the top for the 'top' position
        //bottomOffset: 50, // distance from the bottom for the 'bottom' position
        props: {
          style: {
            backgroundColor: "#FF6347", // change background color
            borderRadius: 10, // rounded corners
          },
        },
      });
    } else {
      Toast.show({
        type: "success",
        text1: "Welcome",
        text2: "Together We Can Make Our Community Safer",
        position: "top", // position can be 'top', 'bottom', or 'center'
        visibilityTime: 4000, // time in milliseconds
        autoHide: true, // whether the toast should automatically disappear
        topOffset: 5, // distance from the top for the 'top' position
        //bottomOffset: 50, // distance from the bottom for the 'bottom' position
        props: {
          style: {
            backgroundColor: "#FF6347", // change background color
            borderRadius: 10, // rounded corners
          },
        },
      });
    }
  });
  const route = useRoute(); // Get the current route
  const Name = route.name;
  let buttonName = "";
  let welcomeTag = "";
  let account = "";
  if (Name === "Login") {
    buttonName = "Login";
    welcomeTag = "Welcome Back";
    account = "Do not have an account? Register";
  } else {
    buttonName = "Register";
    welcomeTag = "Welcome";
    account = "Already have an account? Login";
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Required"),
      })}
      onSubmit={async (values) => {
        if (buttonName === "Login") {
          const success = await loginUser(values.email, values.password);
          if (success) {
            Toast.show({ type: "success", text1: "Login Successful" });
            navigation.navigate("Home");
          } else {
            Toast.show({ type: "error", text1: "Wrong Credentials!" });
          }
        } else {
          const success = await registerUser(values.email, values.password);
          if (success) {
            Toast.show({ type: "success", text1: "Registered Successfully!" });
            navigation.navigate("Login");
          } else {
            Toast.show({
              type: "error",
              text1: "Registration Failed!",
              text2: "Email Already Exists",
            });
          }
        }
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View
          colors={["#4c004c", "#800080", "#ff00ff"]}
          style={styles.container}
        >
          <Text style={styles.title}>{welcomeTag}</Text>

          <StatusBar barStyle="light-content" backgroundColor="#4c004c" />
          <LoginInputs
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
            values={values}
            errors={errors}
            touched={touched}
            //navigation={navigation}
            buttonName={buttonName}
            account={account}
          />
          <Toast />
        </View>
      )}
    </Formik>
  );
};
export default LoginAuth;
