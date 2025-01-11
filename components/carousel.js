import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel-v4";

const { width } = Dimensions.get("window");

const MyCarousel = ({ data = [] }) => {
  if (!Array.isArray(data)) {
    console.error("The `data` prop must be an array.");
    return null;
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.image ? (
        <Image source={item.image} style={styles.image} />
      ) : (
        <Text>No Image</Text>
      )}
      <Text style={styles.caption}>{item.caption || "No Caption"}</Text>
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width * 0.75}
      inactiveSlideScale={0.3}
      inactiveSlideOpacity={0.2}
      autoplay={true} // Enable auto-slide
      autoplayDelay={1000} // Delay before auto-slide starts (in ms)
      autoplayInterval={3000} // Time between slides (in ms)
      loop={true} // Enables infinite looping
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    resizeMode: "cover",
  },
  caption: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default MyCarousel;
