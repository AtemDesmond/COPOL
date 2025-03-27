import React from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { services } from "./Cards";

const { width } = Dimensions.get("screen");

const Cards = ({ service, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground style={styles.cardImage} source={service.image}>
        <Text style={styles.cardText}>{service.name}</Text>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.cardText}>{service.updated}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.cardText}>{service.time}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const TestFlatList = () => {
  const navigation = useNavigation(); // Initialize navigation

  // Function to handle card press
  const handleCardPress = (item) => {
    // Determine the destination screen based on the item's name or ID
    let screenName;
    switch (item.name) {
      case "Emergency Call":
        screenName = "Call";
        break;
      case "Missing Person":
        screenName = "Person";
        break;
      case "Missing Property":
        screenName = "Property";
        break;
      default:
        screenName = "Home"; // Fallback screen
    }

    // Navigate to the determined screen and pass data if needed
    navigation.navigate(screenName, { item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Cards service={item} onPress={() => handleCardPress(item)} />
        )}
        contentContainerStyle={{ paddingLeft: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  cardImage: {
    width: width,
    height: 250,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 18,
  },
  cardText: {
    color: "#800080",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TestFlatList;
