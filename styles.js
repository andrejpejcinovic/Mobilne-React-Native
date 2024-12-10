import { StyleSheet } from "react-native-web";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginVertical: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "grey",
  },
  row: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  screen: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hover: {
    position: "absolute",
    bottom: 4,
    right: 2,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  questionText: {
      width: 200, // Set a fixed width (adjust this as needed)
      textAlign: 'center', // Optional: to center-align text within the fixed width
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
      marginBottom: 8, // Add some spacing if needed
    },
  rotateButton: {
    position: "absolute",
    top: 24,
    right: 12,
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  choiceButton: {
    backgroundColor: "#e0e0e0",
    padding: 8,
    borderRadius: 4,
    marginTop: 4,
    alignItems: "center",
  },
  choiceText: {
    fontSize: 14,
    color: "#333",
  },
});
export const screenColors = ["#ffd700", "#20b2aa", "#b22222", "#f4a460"];

