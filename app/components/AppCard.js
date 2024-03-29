import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "../components/AppText";
import DataManager from "../config/DataManager";

function AppCard({ category, title, subtitle, image, navigation }) {
  return (
    <View style={styles.container}>
      {isFinite(image) ? (
        <Image source={image} style={styles.image} />
      ) : (
        <Image source={{ uri: image }} style={styles.image} />
      )}
      <AppText style={styles.title}> {title} </AppText>
      <AppText style={styles.subtitle}> {category} </AppText>
      <Button
        onPress={() => {
          let commonData = DataManager.getInstance();
          commonData.setCharityDetails(title, subtitle);
          navigation.navigate("Description");
        }}
        title="See Description"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.otherColorLite,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 25,
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default AppCard;
