import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Platform,
  Image,
  Text,
} from "react-native";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppButton from "../components/AppButton";

const blurRadiusValue = Platform.OS === "android" ? 8 : 5.5;

//generate welcome screen
export default function WelcomeScreen({ navigation }) {
  return (
    //uses custom component AppScreen to display data
    <AppScreen>
      <ImageBackground
        source={require("../assets/welcome.jpg")}
        style={styles.background}
        blurRadius={blurRadiusValue}
      >
        <View style={styles.welcomeContainer}>
          <Image source={require("../assets/logo.png")}></Image>
          <Text style={styles.title}>SAVETHEWORLD</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton
            title="Login"
            onPress={() => navigation.navigate("Login")}
          />
          <AppButton
            title="Register"
            color="otherColor"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </ImageBackground>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  buttonsContainer: {
    marginTop: 100,
    marginEnd: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 150,
    alignSelf: "center",
    width: "50%",
  },
  title: {
    fontSize: 30,
    fontFamily:
      Platform.OS === "android" ? "sans-serif-medium" : "Avenir-Roman",
    color: AppColors.white,
    fontWeight: "bold",
  },
});
