import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import AppColors from "../config/AppColors";
import AppIcon from "../components/AppIcon";
import HomeNavigator from "./HomeNavigator";
import NewCharityScreen from "../screens/NewCharityScreen";
import NewCollectionScreen from "../screens/NewCollectionScreen";

//Bottom Tab Navigation
//Provides Navigation to 'Home', 'New Charity, and 'New Collection' Screens

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: AppColors.secondaryColor,
      inactiveTintColor: AppColors.secondaryColor,
      activeBackgroundColor: AppColors.primaryColor,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: () => (
          <AppIcon size={50} name="home" iconColor={AppColors.secondaryColor} />
        ),
      }}
    />
    <Tab.Screen
      name="New Charity"
      component={NewCharityScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={50}
            name="plus-circle"
            iconColor={AppColors.secondaryColor}
          />
        ),
      }}
    />
    <Tab.Screen
      name="New Collection"
      component={NewCollectionScreen}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={50}
            name="plus-circle"
            iconColor={AppColors.secondaryColor}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
