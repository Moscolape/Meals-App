import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const SelectedMeal = ({title, duration, imageUrl, complexity, affordability}) => {
  return (
    <View style={styles.innerContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.extras}>
        <Text style={styles.extra}>{duration}m</Text>
        <Text style={styles.extra}>{complexity.toUpperCase()}</Text>
        <Text style={styles.extra}>{affordability.toUpperCase()}</Text>
      </View>
    </View>
  );
};

export default SelectedMeal;

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  extras: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  extra: {
    paddingHorizontal: 8,
    fontSize: 12,
  },
  innerContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
});
