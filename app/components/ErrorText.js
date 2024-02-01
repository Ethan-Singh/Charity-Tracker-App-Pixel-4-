import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppColors from "../config/AppColors";

function ErrorText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: AppColors.red,
    fontWeight: "600",
  },
});

export default ErrorText;
