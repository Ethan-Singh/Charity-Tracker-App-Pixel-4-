import React from "react";

import { Text, StyleSheet, Platform } from "react-native";

import AppColors from "../config/AppColors";

function AppText({ style, children }) {
  return <Text style={[styles.text, style]}> {children} </Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir-Roman",
    color: AppColors.secondaryColor,
  },
});

export default AppText;
