import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  stretch: {
    width: 250,
    height: 250,
    resizeMode: "stretch",
  },
  textTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitle: {
    padding: 5,
    fontSize: 16,
    margin: 20,
    textAlign: "center",
  },
});
