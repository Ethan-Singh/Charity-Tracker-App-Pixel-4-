import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import AppColors from "../config/AppColors";
import AppIcon from "../components/AppIcon";
import AppListItem from "../components/AppListItem";
import AppScreen from "../components/AppScreen";

//Home Screen
//Provides access to
//Collections screen, Charities screen and Logout button

function HomeScreen({ navigation, route }) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 100, height: 80 }}
        ></Image>
      </View>
      <View style={styles.profileContainer}>
        <Image source={route.params.paramImage} style={styles.image}></Image>
        <Text style={styles.name}>{route.params.paramName}</Text>
        <Text style={styles.email}>{route.params.paramEmail}</Text>
      </View>
      <View style={styles.linksContainer}>
        <AppListItem
          title="Collections"
          IconComponent={
            <AppIcon
              name="rhombus-split"
              size={50}
              iconColor={AppColors.white}
              backgroundColor={AppColors.primaryColor}
            />
          }
          onPress={() => navigation.navigate("Collections")}
        />
      </View>

      <View style={styles.linksContainer}>
        <AppListItem
          title="Charities"
          IconComponent={
            <AppIcon
              name="book-open-variant"
              size={50}
              iconColor={AppColors.white}
              backgroundColor={AppColors.primaryColor}
            />
          }
          onPress={() => navigation.navigate("Charities")}
        />
      </View>

      <View style={styles.linksContainer}>
        <AppListItem
          title="Log out"
          IconComponent={
            <AppIcon
              name="exit-to-app"
              size={50}
              iconColor={AppColors.white}
              backgroundColor={AppColors.primaryColor}
            />
          }
          onPress={() => navigation.navigate("Welcome")}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.otherColor,
    marginTop: 0,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  profileContainer: {
    marginTop: 0,
    height: 260,
    justifyContent: "center",
    alignItems: "center",
  },
  linksContainer: {
    marginTop: 15,
    backgroundColor: AppColors.otherColorLite,
    height: 80,
    justifyContent: "space-around",
    paddingLeft: 10,
    marginHorizontal: 15,
  },
  name: {
    marginTop: 15,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: "#0f0f10",
  },
  email: {
    fontSize: 15,
    color: "#0f0f10",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: AppColors.otherColorLite,
    marginLeft: 10,
  },
});

export default HomeScreen;
