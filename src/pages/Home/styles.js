import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#f7efef",
    flex: 1,
  },
  stretch: {
    width: 120,
    height: 120,
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
  card: {
    flex: 1,
    flexDirection: "row",
    margin: 0,
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textCard: {
    padding: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
});
