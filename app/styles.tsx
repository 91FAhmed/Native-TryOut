import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: "#212121",
    fontSize: 32,
    fontWeight: "bold",
    padding: 8,
  },
  darkMode: {
    backgroundColor: "#212121",
  },
  lightMode: {
    backgroundColor: "#CFCFCF",
  },
  cardContainer: {
    width: 100,
    height: 100,
    borderRadius: 4,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  cardOne: {
    backgroundColor: "#EF5354",
  },
  textStyles: {
    fontSize: 24,
    fontWeight: "400",
    fontStyle: "italic",
    color: "#212121",
  },
});

export default Styles;
