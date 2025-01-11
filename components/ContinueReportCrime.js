import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup"; // For validation schema
import { FontAwesome5 } from "@expo/vector-icons";

import HomeBackground from "../images/HomeBackground.jpg";

const ContinueReportCrime = ({ navigation }) => {
  // Validation schema for Formik
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <ImageBackground
      source={HomeBackground} // Replace with your image URL
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form Values:", values);
            alert("Form submitted successfully!");
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
            <View style={styles.container}>
              {/* Header */}
              <Text style={styles.title}>Personal Info</Text>

              {/* Form Inputs */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Value"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                {touched.name && errors.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Surname</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Value"
                  onChangeText={handleChange("surname")}
                  onBlur={handleBlur("surname")}
                  value={values.surname}
                />
                {touched.surname && errors.surname && (
                  <Text style={styles.errorText}>{errors.surname}</Text>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>ID Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter ID Number"
                  onChangeText={handleChange("idNumber")}
                  onBlur={handleBlur("idNumber")}
                  value={values.idNumber}
                />
                {touched.idNumber && errors.idNumber && (
                  <Text style={styles.errorText}>{errors.idNumber}</Text>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Value"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Message</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder="Value"
                  multiline
                  numberOfLines={4}
                  onChangeText={handleChange("message")}
                  onBlur={handleBlur("message")}
                  value={values.message}
                />
                {touched.message && errors.message && (
                  <Text style={styles.errorText}>{errors.message}</Text>
                )}
              </View>

              {/* Submit Button */}
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>

      {/* Bottom Tab Navigation Placeholder */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem}>
          <FontAwesome5 name="map-marker-alt" size={24} color="black" />
          <Text style={styles.bottomBarText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <FontAwesome5 name="home" size={24} color="black" />
          <Text style={styles.bottomBarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <FontAwesome5 name="bell" size={24} color="black" />
          <Text style={styles.bottomBarText}>Updates</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  inputGroup: {
    width: "80%",
    margin: 20,
  },
  label: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  textArea: {
    textAlignVertical: "top",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "white",
  },
  bottomBarItem: {
    alignItems: "center",
  },
  bottomBarText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default ContinueReportCrime;
