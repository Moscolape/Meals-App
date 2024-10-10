import React, { useLayoutEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/icon-button";

const MealDetails = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const [color, setColor] = useState("#ededed");

  const pressButton = () => {
    setColor((prevColor) => (prevColor === "#ededed" ? "gold" : "#ededed"));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal?.title,
      headerRight: () => {
        return <IconButton icon="star" onPress={pressButton} color={color} />;
      },
    });
  }, [navigation, pressButton]);

  return (
    <ScrollView
      style={styles.screen}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>About the Meal</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>
            Duration: {selectedMeal?.duration} minutes
          </Text>
          <Text style={styles.detailText}>
            Complexity:{" "}
            {selectedMeal?.complexity.charAt(0).toUpperCase() +
              selectedMeal?.complexity.slice(1)}{" "}
            to cook
          </Text>
          <Text style={styles.detailText}>
            Affordability:{" "}
            {selectedMeal?.affordability.charAt(0).toUpperCase() +
              selectedMeal?.affordability.slice(1)}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <View style={styles.list}>
            {selectedMeal?.ingredients.map((ing, index) => (
              <Text style={styles.listItem} key={index}>
                {ing}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Steps</Text>
          <View style={styles.list}>
            {selectedMeal?.steps.map((step, index) => (
              <Text style={styles.listItem} key={index}>
                {step}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  innerContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  detailsContainer: {
    marginBottom: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#e2e2e2",
    padding: 15,
  },
  detailText: {
    fontSize: 16,
    marginVertical: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
    paddingVertical: 3,
    paddingLeft: 15,
    borderLeftWidth: 4,
    borderLeftColor: "#ff6347",
    backgroundColor: "#ffffff",
    borderRadius: 5,
  },
});
