import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const name = "Ewa"
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.textStyle2}>My name is {name}</Text>
      <Button title="Go to Components Demo" onPress={() => navigation.navigate('Components') } />
      <Button title="Go to List Demo" onPress={() => navigation.navigate('List')} />

      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>

      <Button title="Go to Images Demo" onPress={() => navigation.navigate('Image')} />

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
