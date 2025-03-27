import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Text,
  Dimensions,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
const { width } = Dimensions.get("screen");

const FloatingButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setModalVisible(false);
    switch (option) {
      case "Fill Form":
        console.log("Fill Form selected");
        break;
      case "Upload File":
        console.log("Upload File selected");
        break;
      case "Take Photo":
        console.log("Take Photo selected");
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome5 name="plus" size={24} color="#FFF" />
      </TouchableOpacity>

      {/* Custom Modal for Action Sheet */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleOptionSelect("Fill Form")}
            >
              <FontAwesome5 name="file" solid size={24} color="#000" />
              <Text style={styles.modalOptionText}>Report A Case</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleOptionSelect("Upload File")}
            >
              <FontAwesome5 name="upload" solid size={24} color="#000" />
              <Text style={styles.modalOptionText}>Upload File</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleOptionSelect("Take Photo")}
            >
              <FontAwesome5 name="camera" solid size={24} color="#000" />
              <Text style={styles.modalOptionText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => setModalVisible(false)}
            >
              <FontAwesome5 name="times-circle" solid size={24} color="#000" />
              <Text style={styles.modalOptionText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    bottom: 30,
    right: width / width - 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#993399",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#F2E6F2",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  modalOptionText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default FloatingButton;
