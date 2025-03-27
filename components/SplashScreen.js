import React, { useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, Animated } from "react-native";

export default function SplashScreen({ navigation }) {
  const fadeAnim = new Animated.Value(0); // Initial opacity value

  useEffect(() => {
    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Navigate to the next screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate("ReportCase"); // Replace with your Login screen
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0056D2" />
      <Animated.View style={{ ...styles.logoContainer, opacity: fadeAnim }}>
        <Text style={styles.logo}>COPOL</Text>
        <Text style={styles.subtitle}>Fight against Crime with us</Text>
        <Text style={styles.footer}>Police</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0056D2",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
    fontFamily: "Cursive",
  },
  subtitle: {
    fontSize: 18,
    color: "#FFFFFF",
    marginTop: 10,
    fontFamily: "Cursive",
  },
  footer: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: "100%",
    fontFamily: "Cursive",
    alignItems: "end",
  },
});
