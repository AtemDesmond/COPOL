import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  ImageBackground,
} from "react-native";
import CheckBox from "react-native-checkbox";
import { Formik } from "formik";
import * as Yup from "yup"; // For validation schema

import { loginUser } from "../firebaseConfig";

//import LinearGradient from "expo-linear-gradient";

import Login from "../images/Login.jpg";

export default function RegisterScreen({ navigation }) {
  const [isSelected, setSelection] = React.useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  return (
    <ImageBackground
      source={Login} // Replace with your image URL
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const success = await loginUser(values.email, values.password);
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
              <Text style={styles.title}>Welcome</Text>

              <StatusBar barStyle="light-content" backgroundColor="#4c004c" />
              <View style={styles.formContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                <View style={styles.checkboxContainer}>
                  <CheckBox
                    label={"Remember Me"}
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                  />
                </View>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                >
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginTop: "60",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#333",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  button: {
    backgroundColor: "#800080",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: "25",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
