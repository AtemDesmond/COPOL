import React from "react";
import { View, Text, TextInput, StyleSheet, StatusBar } from "react-native";
import CheckBox from "react-native-checkbox";

export default function InputsLoginRegister() {
  return (
    <View colors={["#4c004c", "#800080", "#ff00ff"]} style={styles.container}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
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
  button: {
    backgroundColor: "#800080",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
