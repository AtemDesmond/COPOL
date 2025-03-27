import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";
import axios from "axios"; // For fetching images from your database

import TopNavigationBar from "./TopNavigationBar";
import BottomNavigationBar from "./BottomNavigationBar";
import styles from "../components/StyleAuth";
import SearchBar from "./SearchBar";
import MyCarousel from "../components/carousel";
import HomeBackground from "../assets/images/HomeBackground.jpg";
import TestFlatList from "./TestFlatList";
import FloatingButton from "./FloatinBotton";

export default function HomeScreen({ navigation }) {
  const carouselData = [
    {
      image: require("../assets/images/id card.jpg"),
      caption: "Missing ID Card",
    },
    {
      image: require("../assets/images/id card_1.jpg"),
      caption: "Missing ID Card",
    },
    {
      image: require("../assets/images/missing Bike.jpg"),
      caption: "Missing Bike",
    },
    {
      image: require("../assets/images/missing Bike_1.jpg"),
      caption: "Missing Bike",
    },
    {
      image: require("../assets/images/missing car.jpg"),
      caption: "Missing Car",
    },
    { image: require("../assets/images/wanted.jpg"), caption: "wanted person" },
    {
      image: require("../assets/images/wanted_1.jpg"),
      caption: "wanted person",
    },
    {
      image: require("../assets/images/wanted_2.jpg"),
      caption: "wanted person",
    },
  ];
  const { width } = Dimensions.get("screen");

  return (
    <ImageBackground
      source={HomeBackground} // Replace with your image URL
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <TopNavigationBar />

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <SearchBar />
          <View>
            Nearby and Latest Section
            <View style={styles.filterContainer}>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterText}>Nearby</Text>{" "}
                {/*should provide a
                list of nearby police stations and hospitals*/}
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterText}>Latest</Text>
                {/*should talk about
                the types of crimes that are happening in the area and the
                latest news*/}
              </TouchableOpacity>
            </View>
            {/* Carousel for displaying images from the database */}
            <SafeAreaView style={styles.contain}>
              <Text style={styles.heading}>What's New</Text>

              <MyCarousel data={carouselData} />
            </SafeAreaView>
            {/* Feature Cards */}
            <Text style={styles.services}>Public Services</Text>
            <View style={{ height: 300 }}>
              <TestFlatList />
            </View>
          </View>
        </ScrollView>
        <View style={styles.FloatContainer}>
          <Text style={styles.title}>Welcome to My App</Text>
          <FloatingButton />
        </View>
      </View>
      {/* Bottom Tab Navigation Placeholder */}
      <BottomNavigationBar />
    </ImageBackground>
  );
}
