import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Alert, Linking } from "react-native";
import * as Location from "expo-location";

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
    <View style={styles.container}>
      <Text style={styles.text}>Emergency Actions</Text>
      <Button title="Call Police" onPress={callPolice} />
      <View style={styles.spacing} />
      <Button
        title="Send Location to Database"
        onPress={sendLocationToDatabase}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  spacing: {
    height: 20,
  },
});

export default CallPoliceScreen;
