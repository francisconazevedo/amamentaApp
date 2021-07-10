import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff8879",
  },
  button: {},
});

export const Register = ({ navigation }) => {
  return (
  <View style={styles.container}>
    <Text> {children} </Text>
  </View>
  )
};

