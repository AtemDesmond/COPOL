import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import icons
import { useNavigation } from "@react-navigation/native";

const TopNavigationBar = () => {
  const navigation = useNavigation();

  const [menuVisible, setMenuVisible] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [profilePosition, setProfilePosition] = useState({ top: 0, left: 0 });

  const menuRef = useRef(null);
  const profileRef = useRef(null);

  // Function to show the menu dropdown
  const showMenuDropdown = () => {
    menuRef.current?.measureInWindow((x, y, width) => {
      setMenuPosition({ top: y + 40, left: x });
      setMenuVisible(true);
    });
  };

  // Function to show the profile dropdown
  const showProfileDropdown = () => {
    profileRef.current?.measureInWindow((x, y, width) => {
      setProfilePosition({ top: y + 40, left: x - width * 3.3 });
      setProfileVisible(true);
    });
  };

  return (
    <ImageBackground source={require("../assets/images/Statusbar.jpg")}>
      <View style={styles.container}>
        {/* Left - Menu Icon */}
        <TouchableOpacity
          style={styles.iconButton}
          ref={menuRef}
          onPress={showMenuDropdown}
        >
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>

        {/* Center - Title */}
        <Text style={styles.title}>COPOL</Text>

        {/* Right - Profile Icon */}
        <TouchableOpacity
          style={styles.iconButton}
          ref={profileRef}
          onPress={showProfileDropdown}
        >
          <Ionicons name="person-circle-outline" size={24} color="white" />
        </TouchableOpacity>

        {/* Menu Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={menuVisible}
          onRequestClose={() => {
            setMenuVisible(!menuVisible);
          }}
        >
          <Pressable
            style={styles.overlay}
            onPress={() => {
              setMenuVisible(false);
            }}
          >
            <View
              style={[
                styles.dropdown,
                {
                  position: "absolute",
                  top: menuPosition.top,
                  left: menuPosition.left,
                },
              ]}
            >
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <Text style={styles.textStyle}>🏠 Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  navigation.navigate("Report");
                }}
              >
                <Text style={styles.textStyle}>📜 Reports</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  navigation.navigate("Settings");
                }}
              >
                <Text style={styles.textStyle}>⚙️ Settings</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>

        {/* Profile Modal */}
        <Modal
          visible={profileVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => {
            setMenuVisible(!menuVisible);
          }}
        >
          <Pressable
            style={styles.overlay}
            onPress={() => setProfileVisible(false)}
          >
            <View
              style={[
                styles.dropdown,
                {
                  position: "absolute",
                  top: profilePosition.top,
                  left: profilePosition.left,
                },
              ]}
            >
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  navigation.navigate("Profile");
                }}
              >
                <Text style={styles.textStyle}>👤 Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dropdownItem}>
                <Text style={styles.textStyle}>🌍 Language</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>
      </View>
    </ImageBackground>
  );
};

// Styles
const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    opacity: 0.7,
    width: "100%",
    height: 75,
    padding: 10,
    marginBottom: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // For Android shadow
  },
  iconButton: {
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  dropdown: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    width: 150,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 25,
    paddingHorizontal: 5,
  },
  textStyle: {
    fontSize: 17,
  },
};

export default TopNavigationBar;
