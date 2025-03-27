import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "../components/StyleAuth";

const BottomNavigationBar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const currentRoute = route.name;
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={styles.bottomBarItem}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <FontAwesome5
          name="home"
          solid
          size={20}
          style={[currentRoute === "Home" && styles.activeBackground]}
          color={currentRoute === "Home" ? "white" : "white"}
        />
        <Text
          style={[
            styles.bottomBarText,
            currentRoute === "Home" && styles.activeText,
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBarItem}
        onPress={() => {
          navigation.navigate("Explore");
        }}
      >
        <FontAwesome5
          name="map-marker-alt"
          solid
          size={20}
          style={[currentRoute === "Explore" && styles.activeBackground]}
          color={currentRoute === "Explore" ? "white" : "white"}
        />
        <Text
          style={[
            styles.bottomBarText,
            currentRoute === "Explore" && styles.activeText,
          ]}
        >
          Explore
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomBarItem}
        onPress={() => {
          navigation.navigate("Latest");
        }}
      >
        <FontAwesome5
          name="bell"
          solid
          size={20}
          style={[currentRoute === "Latest" && styles.activeBackground]}
          color={currentRoute === "Latest" ? "white" : "white"}
        />
        <Text
          style={[
            styles.bottomBarText,
            currentRoute === "Latest" && styles.activeText,
          ]}
        >
          Updates
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default BottomNavigationBar;
