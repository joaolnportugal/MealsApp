import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import React from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import Meal from "../models/meal";
import MealItem from "../components/MealItem";

function MealsOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTile = CATEGORIES.find(
      category => category.id === catId
    ).title;

    navigation.setOptions({ title: categoryTile });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealsOverViewScreen;

const styles = StyleSheet.create({ container: { flex: 1, padding: 16 } });
