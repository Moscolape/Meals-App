import React from "react";
import { Pressable, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const IconButton = ({ icon, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.onPressed : null)}
    >
      <AntDesign name={icon} color={color} size={24} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  onPressed: {
    opacity: 0.7,
  },
});
