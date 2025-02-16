import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const name = "Ewa";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.textStyle2}>My name is {name}</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />

      {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}

      <Button
        title="Go to Images Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to Box Demo"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  textStyle2: {
    fontSize: 20,
  },
});

export default HomeScreen;
