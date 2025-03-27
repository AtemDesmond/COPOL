import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import CheckBox from "react-native-checkbox";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

import styles from "../components/StyleAuth";

const LoginInputs = ({
  //navigation,
  handleBlur,
  handleChange,
  handleSubmit,
  values,
  errors,
  touched,
  buttonName,
  account,
}) => {
  const [isSelected, setSelection] = React.useState(false);
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          onChangeText={handleChange("password")}
          secureTextEntry={!passwordVisible}
          onBlur={handleBlur("password")}
          value={values.password}
        />
        <TouchableOpacity
          style={{ flex: 0.1, alignItems: "center" }}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Icon
            name={passwordVisible ? "eye-off" : "eye"}
            size={20}
            color="#333"
          />
        </TouchableOpacity>
        {touched.password && errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          label={"Remember Me"}
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{buttonName}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
        <Text style={styles.forgot}>
          {buttonName === "Login" ? "Forgot Password?" : ""}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (buttonName === "Login") {
            navigation.navigate("Register"); // Go to Register screen
          } else {
            navigation.navigate("Login"); // Go to Login screen
          }
        }}
      >
        <Text style={styles.account}>{account}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginInputs;
