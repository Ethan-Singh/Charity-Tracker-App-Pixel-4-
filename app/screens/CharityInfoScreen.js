import { StyleSheet, Text, View } from "react-native";
import React from "react";

import DataManager from "../config/DataManager";
import AppText from "../components/AppText";
import AppColors from "../config/AppColors";

//More Information Screen
//Shows the description of a charity when you select it
export default function CharityInfoScreen() {
  let commonData = DataManager.getInstance();
  const title = commonData.getCurrCharityName();
  const desc = commonData.getCurrCharityDesc();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}> {title} </Text>
      </View>
      <AppText style={styles.subtitle}>{desc}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 20,
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
    color: AppColors.secondaryColor,
  },
  container: {
    backgroundColor: AppColors.otherColor,
  },
});
