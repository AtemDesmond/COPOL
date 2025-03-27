import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import * as yup from "yup";

import styles from "./ReportStyles";

// Validation schema
const reportSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  date: yup.string().required("Date is required"),
  streetAddress: yup.string().required("Street address is required"),
  description: yup.string().required("Description is required"),
  // Other fields are optional
});

const PoliceReportForm = () => {
  const incidentTypes = ["Collision", "Theft", "Fraud", "Crime", "Other"];

  const pickImage = async (setFieldValue) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFieldValue("image", result.assets[0].uri);
    }
  };

  const pickDocument = async (values, setFieldValue) => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
      });

      if (result.type === "success") {
        setFieldValue("files", [...values.files, result]);
      }
    } catch (err) {
      Alert.alert("Error", "Failed to pick document");
    }
  };

  const removeFile = (values, setFieldValue, index) => {
    const updatedFiles = [...values.files];
    updatedFiles.splice(index, 1);
    setFieldValue("files", updatedFiles);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        date: "",
        streetAddress: "",
        city: "",
        state: "",
        country: "",
        incidentType: "Collision",
        description: "",
        image: null,
        files: [],
      }}
      validationSchema={reportSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form submitted:", values);
        Alert.alert("Success", "Report submitted successfully");
        resetForm();
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.header}>Police Report Form</Text>
          <Text style={styles.subHeader}>
            Fields marked with * are required. All other fields are optional.
          </Text>

          {/* Required Fields Section */}
          <Text style={styles.sectionHeader}>Required Information*</Text>

          {/* First Name */}
          <View style={styles.nameContainer}>
            <TextInput
              style={[
                styles.input,
                styles.halfInput,
                touched.firstName && errors.firstName && styles.errorInput,
              ]}
              placeholder="First Name*"
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
              value={values.firstName}
            />
            <TextInput
              style={[
                styles.input,
                styles.halfInput,
                touched.lastName && errors.lastName && styles.errorInput,
              ]}
              placeholder="Last Name*"
              onChangeText={handleChange("lastName")}
              onBlur={handleBlur("lastName")}
              value={values.lastName}
            />
          </View>
          {touched.firstName && errors.firstName && (
            <Text style={styles.errorText}>{errors.firstName}</Text>
          )}
          {touched.lastName && errors.lastName && (
            <Text style={styles.errorText}>{errors.lastName}</Text>
          )}

          {/* Date */}
          <TextInput
            style={[
              styles.input,
              touched.date && errors.date && styles.errorInput,
            ]}
            placeholder="Date (MM/DD/YYYY)*"
            onChangeText={handleChange("date")}
            onBlur={handleBlur("date")}
            value={values.date}
          />
          {touched.date && errors.date && (
            <Text style={styles.errorText}>{errors.date}</Text>
          )}

          {/* Incident Type */}
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={values.incidentType}
              onValueChange={handleChange("incidentType")}
            >
              {incidentTypes.map((type, index) => (
                <Picker.Item key={index} label={type} value={type} />
              ))}
            </Picker>
          </View>

          {/* Street Address */}
          <TextInput
            style={[
              styles.input,
              touched.streetAddress &&
                errors.streetAddress &&
                styles.errorInput,
            ]}
            placeholder="Street Address*"
            onChangeText={handleChange("streetAddress")}
            onBlur={handleBlur("streetAddress")}
            value={values.streetAddress}
          />
          {touched.streetAddress && errors.streetAddress && (
            <Text style={styles.errorText}>{errors.streetAddress}</Text>
          )}

          {/* Description */}
          <TextInput
            style={[
              styles.input,
              styles.multilineInput,
              touched.description && errors.description && styles.errorInput,
            ]}
            placeholder="Description of Incident*"
            multiline
            numberOfLines={4}
            onChangeText={handleChange("description")}
            onBlur={handleBlur("description")}
            value={values.description}
          />
          {touched.description && errors.description && (
            <Text style={styles.errorText}>{errors.description}</Text>
          )}

          {/* Optional Fields Section */}
          <Text style={styles.sectionHeader}>
            Additional Information (Optional)
          </Text>

          {/* Location */}
          <View style={styles.locationContainer}>
            <TextInput
              style={[styles.input, styles.thirdInput]}
              placeholder="City"
              onChangeText={handleChange("city")}
              value={values.city}
            />
            <TextInput
              style={[styles.input, styles.thirdInput]}
              placeholder="State"
              onChangeText={handleChange("state")}
              value={values.state}
            />
            <TextInput
              style={[styles.input, styles.thirdInput]}
              placeholder="Country"
              onChangeText={handleChange("country")}
              value={values.country}
            />
          </View>

          {/* Optional Image Upload */}
          <Text style={styles.optionalLabel}>Photo Evidence (Optional)</Text>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => pickImage(setFieldValue)}
          >
            <Text style={styles.buttonText}>Select Photo</Text>
          </TouchableOpacity>
          {values.image && (
            <View style={styles.previewContainer}>
              <Image
                source={{ uri: values.image }}
                style={styles.imagePreview}
              />
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => setFieldValue("image", null)}
              >
                <Text style={styles.removeButtonText}>×</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Optional File Upload */}
          <Text style={styles.optionalLabel}>
            Supporting Documents (Optional)
          </Text>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => pickDocument(values, setFieldValue)}
          >
            <Text style={styles.buttonText}>Select Files</Text>
          </TouchableOpacity>

          {values.files.map((file, index) => (
            <View key={index} style={styles.fileItem}>
              <Text style={styles.fileName} numberOfLines={1}>
                {file.name}
              </Text>
              <TouchableOpacity
                style={styles.fileRemoveButton}
                onPress={() => removeFile(values, setFieldValue, index)}
              >
                <Text style={styles.removeButtonText}>×</Text>
              </TouchableOpacity>
            </View>
          ))}

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit Report</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Formik>
  );
};
export default PoliceReportForm;
