import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TabNavigator from "./TabNavigator";
import MyCollectionsScreen from "../screens/MyCollectionsScreen";
import CharityInfoScreen from "../screens/CharityInfoScreen";

const AppStack = createStackNavigator();

//The main navigator, stores and renders all the screens
//"Home" leads to the Tab Navigator

const AuthNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Login"
      component={LoginScreen}
      options={{ title: "Login Screen" }}
    />
    <AppStack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ title: "Register Screen" }}
    />
    <AppStack.Screen
      name="Home"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Collections"
      component={MyCollectionsScreen}
      options={{ headerShown: true }}
    />
    <AppStack.Screen
      name="Description"
      component={CharityInfoScreen}
      options={{ headerShown: true }}
    />
  </AppStack.Navigator>
);

export default AuthNavigator;
