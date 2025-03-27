import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";

import HomeBackground from "../assets/images/HomeBackground.jpg";
import ReportList from "./ReportList";

const ReportCase = (navigation) => {
  return (
    <ImageBackground source={HomeBackground} style={styles.backgroundImage}>
      <ScrollView>
        <View>
          <Text style={styles.title}>Report A Case</Text>
          <ReportList />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default ReportCase;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
});
