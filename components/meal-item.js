import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.mealContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
      >
        {/* innerContainer for iOS so that borderRadius can reflect */}
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
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    marginBottom: 50,
    elevation: 3,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
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
  pressed: {
    opacity: 0.5,
  },
});
