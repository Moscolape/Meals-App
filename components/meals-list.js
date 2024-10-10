import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./meal-items";
import { useNavigation } from "@react-navigation/native";


const MealsList = ({displayedMeals}) => {
  const navigation  = useNavigation();
  
  const pressHandler = (mealId) => {
    // @ts-ignore
    navigation.navigate("MealsDetails", {
      mealId: mealId,
    });
  };
  
  const renderMealItems = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      onPress: () => pressHandler(item.id),
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.mealContainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  mealContainer: {
    flex: 1,
    padding: 20,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
});