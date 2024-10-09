import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SelectedMeal from "./selected-meal-item";

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  const mealItemProps = {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
  };

  return (
    <View style={styles.mealContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={onPress}
      >
        {/* innerContainer for iOS so that borderRadius can reflect */}
        <SelectedMeal {...mealItemProps} />
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
  pressed: {
    opacity: 0.5,
  },
});
