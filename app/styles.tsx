import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  heading: {
    color: "#212121",
    fontSize: 32,
    fontWeight: "bold",
    padding: 8,
  },
  container: {
    flex: 1,
    flexDirection: "row",
  },
  cardOne: { backgroundColor: "#EF5354" },

  card: {
    flex: 1,
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 4,
    marginHorizontal: 10,
    marginVertical: 6,
    alignItems: "center",
  },
  cardImage: {
    height: 180,
    width: "100%",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "#212121",
    marginTop: 4,
    paddingHorizontal: 8,
  },
  label: {
    fontWeight: "400",
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 4,
    paddingHorizontal: 8,
  },
  content: {
    fontSize: 12,
    padding: 10,
    fontWeight: "bold",
  },
  fancyCard: {
    margin: 10,
    borderRadius: 4,
    backgroundColor: "#fff7ed",
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  profile: {
    height: 50,
    width: 50,
  },
  Contact: {
    backgroundColor: "#EC4849",
    padding: 16,
    marginHorizontal: 10,
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 4,
  },
  spacer: {
    alignItems: "center",
  },
});

export default Styles;
