import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
  ImageBackground,
} from "react-native";
import * as Location from "expo-location";

import TopNavigationBar from "./TopNavigationBar";
import BottomNavigationBar from "./BottomNavigationBar";
import HomeBackground from "../assets/images/HomeBackground.jpg";

const CallPoliceScreen = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission denied", "Location permission is required.");
        return;
      }

      status = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg(
          "Permission to access location in the background was denied"
        );
        return;
      }

      // Start location tracking in the background
      await Location.startLocationUpdatesAsync("EmergencyLocationUpdates", {
        accuracy: Location.Accuracy.High,
        timeInterval: 1000, // Update every second (adjust as needed)
        distanceInterval: 0, // Update on every location change
      });

      // Subscribe to location updates
      const locationSubscription = Location.addLocationChangeListener(
        (location) => {
          setLocation(location);
        }
      );

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    };

    fetchLocation();
  }, []);

  const sendLocationToDatabase = async () => {
    if (location) {
      // Replace with your database integration logic
      console.log("Location sent to database:", location.coords);
      Alert.alert("Location Sent", "Your location has been shared.");
    } else {
      Alert.alert("Error", "Failed to fetch location.");
    }
  };

  const callPolice = () => {
    Linking.openURL("tel:911");
  };

  return (
    <ImageBackground source={HomeBackground} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TopNavigationBar />
        <ScrollView>
          <Text style={styles.title}>Emergency Actions</Text>
          <TouchableOpacity
            style={styles.ButtonBackground}
            onPress={callPolice}
          >
            <Text style={styles.text}>Call</Text>
          </TouchableOpacity>

          <View style={styles.spacing} />
          <TouchableOpacity
            style={styles.LocationBackground}
            onPress={sendLocationToDatabase}
          >
            <Text style={styles.text}>Send Location</Text>
          </TouchableOpacity>
        </ScrollView>
        <BottomNavigationBar />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  ButtonBackground: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0000",
    borderRadius: 100, // Half of height for perfect circle
    width: 200, // Increased width
    height: 200, // Increased height
    padding: 20, // Reduced padding
  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center", // Ensure text is centered
  },
  spacing: {
    height: 90,
  },
  LocationBackground: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0000",
    borderRadius: 40, // Half of height for perfect circle
    padding: 20, // Reduced padding
  },
  title: {
    height: 50,
    color: "white",
    marginBottom: 50,
    fontSize: 20,
    textAlign: "center",
  },
});

export default CallPoliceScreen;
