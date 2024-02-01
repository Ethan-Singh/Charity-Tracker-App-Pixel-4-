import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import MyCharitiesScreen from "../screens/MyCharitiesScreen";
import MyCollectionsScreen from "../screens/MyCollectionsScreen";

const AppStack = createStackNavigator();

//Provides stack navigation for the home screen
//Note: logout is not here (it is in Auth...)

const AuthNavigator = () => (
  <AppStack.Navigator mode="modal">
    <AppStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen name="Collections" component={MyCollectionsScreen} />
    <AppStack.Screen name="Charities" component={MyCharitiesScreen} />
  </AppStack.Navigator>
);

export default AuthNavigator;
