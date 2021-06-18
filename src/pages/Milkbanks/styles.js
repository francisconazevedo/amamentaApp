import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#ff8879",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    fontSize: 20,
    color: "#000",
  },

  headerTextBold: {
    fontWeight: "bold",
  },

  title: {
    fontSize: 36,
    marginBottom: 15,
    marginTop: 40,
    color: "#13131a",
    fontWeight: "bold",
  },

  description: {
    fontSize: 15,
    lineHeight: 24,
    color: "#737380",
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
  button: {
    marginBottom: 0,
    borderRadius: 20,
    padding: 7,
    elevation: 0,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  textCard: {
    padding: 10,
    fontSize: 12,
  },
});
