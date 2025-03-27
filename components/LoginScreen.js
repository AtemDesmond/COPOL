import React from "react";
import { ScrollView, ImageBackground } from "react-native";

import styles from "../components/StyleAuth";
import LoginAuth from "../components/LoginAuth";
import Login from "../assets/images/Login.jpg";

export default function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      source={Login} // Replace with your image URL
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <LoginAuth navigation={navigation} />
      </ScrollView>
    </ImageBackground>
  );
}
