import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Color from "color";

const CategoryCard = ({ title, color, onPress }) => {
  const rippleColor = Color(color).darken(0.3).hex();

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: rippleColor }}
        style={({ pressed }) =>
          pressed ? [styles.pressable, styles.pressed] : styles.pressable
        }
        onPress={onPress}
      >
        <View style={styles.innerView}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 14,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  innerView: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  pressable: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});