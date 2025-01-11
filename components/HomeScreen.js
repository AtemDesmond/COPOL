import React from "react";
import { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios"; // For fetching images from your database
import MyCarousel from "../components/carousel";

import HomeBackground from "../images/HomeBackground.jpg";

export default function HomeScreen({ navigation }) {
  const carouselData = [
    { image: require("../images/id card.jpg"), caption: "Missing ID Card" },
    { image: require("../images/id card_1.jpg"), caption: "Missing ID Card" },
    { image: require("../images/missing Bike.jpg"), caption: "Missing Bike" },
    { image: require("../images/missing Bike_1.jpg"), caption: "Missing Bike" },
    { image: require("../images/missing car.jpg"), caption: "Missing Car" },
    { image: require("../images/wanted.jpg"), caption: "wanted person" },
    { image: require("../images/wanted_1.jpg"), caption: "wanted person" },
    { image: require("../images/wanted_2.jpg"), caption: "wanted person" },
  ];
  return (
    <ImageBackground
      source={HomeBackground} // Replace with your image URL
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Header Section */}
          <View style={styles.header}>
            <TouchableOpacity>
              <Text style={styles.menuIcon}>☰</Text>
            </TouchableOpacity>
            <Text style={styles.appTitle}>CopOnCloud</Text>
            <TouchableOpacity>
              <Image
                source={{ uri: "https://via.placeholder.com/40" }} // Replace with avatar image
                style={styles.avatar}
              />
            </TouchableOpacity>
          </View>

          {/* Welcome Section */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>
              Hi, Mike 👋{"\n"}
              Welcome
            </Text>
          </View>

          {/* Search Section */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#aaa"
            />
            <TouchableOpacity>
              <Text style={styles.searchIcon}>🔍</Text>
            </TouchableOpacity>
          </View>

          {/* Nearby and Latest Section */}
          <View style={styles.filterContainer}>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Nearby</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Latest</Text>
            </TouchableOpacity>
          </View>

          {/* Carousel for displaying images from the database */}
          <SafeAreaView style={styles.contain}>
            <Text style={styles.heading}>What's New</Text>
            <MyCarousel data={carouselData} />
          </SafeAreaView>

          {/* Feature Cards */}
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Report")}
            >
              <Text style={styles.cardTitle}>Report a Crime</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Call")}
            >
              <Text style={styles.cardTitle}>Emergency Call</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* Bottom Tab Navigation Placeholder */}

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem}>
          <FontAwesome5 name="map-marker-alt" size={24} color="black" />
          <Text style={styles.bottomBarText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <FontAwesome5 name="home" size={24} color="black" />
          <Text style={styles.bottomBarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <FontAwesome5 name="bell" size={24} color="black" />
          <Text style={styles.bottomBarText}>Updates</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  contain: {
    flex: 1,
    marginBottom: "40",
    margin: "auto",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  menuIcon: {
    fontSize: 24,
    color: "#fff",
  },
  appTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  welcomeContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: "#fff",
  },
  searchIcon: {
    fontSize: 20,
    color: "#fff",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: "#333",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  filterText: {
    color: "#fff",
    fontSize: 14,
  },
  carouselItem: {
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5, // For shadow on Android
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    marginBottom: "70",
    backgroundColor: "#ffd700",
    borderRadius: 10,
    width: "45%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "white",
  },
  bottomBarItem: {
    alignItems: "center",
  },
  bottomBarText: {
    fontSize: 12,
    marginTop: 5,
  },
});
