import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/meal-item";

const MealsOverview = ({ route }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  const renderMealItems = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.mealContainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  mealContainer: {
    flex: 1,
    padding: 20,
  },
});
