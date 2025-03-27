import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  FloatContainer: {
    flex: 1,
    justifyContent: "right",
    alignItems: "flex-end",
  },
  statusBarBackground: {
    position: "absolute",
    width: "100%",
    height: 20,
    top: 0,
    zIndex: 1,
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    height: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 25,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#333",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  button: {
    backgroundColor: "#800080",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  account: {
    color: "#800080",
    margin: 10,
    textAlign: "center",
    fontSize: 14,
  },
  forgot: {
    color: "#800080",
    margin: 10,
    textAlign: "center",
    fontSize: 14,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  contain: {
    flex: 1,
    marginBottom: 40,
    margin: "auto",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  welcomeContainer: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: "#800080",
    opacity: 0.8,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 30,
    margin: 5,
  },
  filterText: {
    color: "#fff",
    fontSize: 14,
  },
  carouselItem: {
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5, // For shadow on Android
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  services: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    borderRadius: 18,
    bottom: 0,
    padding: 8,
    backgroundColor: "#993399",
    opacity: 0.7,
  },
  bottomBarItem: {
    alignItems: "center",
  },
  bottomBarText: {
    fontSize: 12,
    marginTop: 5,
    color: "white",
    fontWeight: "bold",
  },
  activeText: {
    color: "white", // WhatsApp green
    fontWeight: "bold",
  },
  activeBackground: {
    backgroundColor: "white",
    paddingHorizontal: 18,
    paddingVertical: 5,
    borderRadius: 16,
    opacity: 0.5,
  },
});
export default styles;
