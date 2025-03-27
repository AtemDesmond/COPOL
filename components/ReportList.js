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
import { cases } from "./Cards";

const { width } = Dimensions.get("screen");

const Cards = ({ cases, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground style={styles.cardImage} source={cases.image}>
        <Text style={styles.cardText}>{cases.name}</Text>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.cardText}>{cases.updated}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.cardText}>{cases.time}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const ReportList = () => {
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
        data={cases}
        keyExtractor={(item) => item.id}
        vertical
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Cards cases={item} onPress={() => handleCardPress(item)} />
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
    width: width - 60,
    height: 200,
    marginHorizontal: 20,
    marginVertical: 10,
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

export default ReportList;
