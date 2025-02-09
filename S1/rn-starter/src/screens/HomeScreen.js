import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  const name = "Ewa"
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.textStyle2}>My name is {name}</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => console.log('Button pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  textStyle2: {
    fontSize: 20
  }
});

export default HomeScreen;
