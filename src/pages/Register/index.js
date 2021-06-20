import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff8879",
  },
  button: {},
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>
    <Text> {children} </Text>
  </View>
);

export const Informations = () => <ScreenContainer />;
