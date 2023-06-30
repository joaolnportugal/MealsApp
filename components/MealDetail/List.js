import { Text, View, StyleSheet } from "react-native";
import React from "react";

function List({ data }) {
  return data.map(dataPoint => (
    <View style={styles.lisItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}
export default List;
const styles = StyleSheet.create({
  lisItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#fcc047",
  },
  itemText: { color: "#947200", textAlign: "center" },
});
