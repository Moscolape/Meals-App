import React, { useContext } from "react";
import MealsList from "../components/meals-list";
import { FavouriteContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
// import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  const faveMealCtx = useContext(FavouriteContext);
  // @ts-ignore
  // const favoriteMealIds = useSelector((state) => state.faveMealsReducer);

  const FavoriteMeals = MEALS.filter(
    (meal) =>
      // @ts-ignore
    faveMealCtx.ids.includes(meal.id)
      // favoriteMealIds.ids.includes(meal.id)
  );

  if (FavoriteMeals.length === 0) {
    return (
      <View style={styles.noFave}>
        <Text style={styles.noFaveText}>You currently have no favorite meals!</Text>
      </View>
    );
  }

  return <MealsList displayedMeals={FavoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  noFave: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noFaveText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
});
