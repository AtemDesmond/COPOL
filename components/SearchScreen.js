import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Icons from Expo
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Left - Search Icon */}
      <Ionicons
        name="arrow-back"
        size={20}
        color="#6A5F7D"
        style={styles.icon}
        onPress={() => navigation.goBack()}
      />

      {/* Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Search COPOL"
        placeholderTextColor="#6A5F7D" 
        value={searchText}
        onChangeText={setSearchText}
        onPress={() => {
          navigation.navigate("Search");
        }}
      />

      {/* Right - Clear Button */}
      {searchText.length > 0 && (
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => setSearchText("")}
        >
          <Ionicons name="close-outline" size={20} color="#6A5F7D" />
        </TouchableOpacity>
      )}
    </View>
  );
};

// Styles
const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white", // Soft purple background
    opacity: 0.8,
    paddingVertical: 2,
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 25, // Rounded edges
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // For Android shadow
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#6A5F7D",
  },
  clearButton: {
    backgroundColor: "#E6D6FF", // Lighter purple for button
    padding: 8,
    borderRadius: 15, // Fully rounded button
  },
};

export default SearchBar;
