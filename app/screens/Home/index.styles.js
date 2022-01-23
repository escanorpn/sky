import { StyleSheet } from "react-native";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../app.config";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(248, 249, 250)"
  },
  content: {
    flex: 1,
    backgroundColor: "rgb(248, 249, 250)"
    // marginBottom: 53
  },
  //
  logoContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PRIMARY_COLOR
  },
  loginContainer: {
    flexGrow: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    minHeight: 150
  },
  logo: {
    marginTop: 30,
    width: 50,
    height: 50
  },
  logo_text: {
    height: 40
  },
  btn: {
    marginTop: 20,
    alignSelf: "flex-end",
    backgroundColor: SECONDARY_COLOR,
    width: 120,
    alignContent: "center"
  },
  input: {
    height: 40,
    backgroundColor: "rgba(225,225,225,0.2)",
    marginBottom: 10,
    padding: 10,
    color: "#fff"
  },
  buttonContainer: {
    backgroundColor: "#2980b6",
    paddingVertical: 15
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  },
  bg: {
    flexGrow: 1,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    minHeight: 150
  },
});
export default styles;
