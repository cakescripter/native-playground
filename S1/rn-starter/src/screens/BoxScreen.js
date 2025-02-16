import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={(styles.textStyle, styles.child1)}>Child #1</Text>
      <Text style={(styles.textStyle, styles.child2)}>Child #2</Text>
      <Text style={(styles.textStyle, styles.child3)}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center",
    flexDirection: "row",
  },
  child1: {
    padding: 10,
    height: 100,
    top: 0,
    flex: 1,
    backgroundColor: "red",
    margin: 10,
  },
  child2: {
    padding: 10,
    height: 100,
    flex: 1,
    backgroundColor: "green",
    top: 150,
    margin: 10,
  },
  child3: {
    padding: 10,
    height: 100,
    flex: 1,
    backgroundColor: "blue",
    margin: 10,
  },
});

export default BoxScreen;
