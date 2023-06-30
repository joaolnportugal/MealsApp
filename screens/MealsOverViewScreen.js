import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";

function MealsOverViewScreen() {
  return (
    <View style={styles.container}>
      <Text>MealsOverViewScreen</Text>
    </View>
  );
}
export default MealsOverViewScreen;

const styles = StyleSheet.create({ container: { flex: 1, padding: 16 } });
