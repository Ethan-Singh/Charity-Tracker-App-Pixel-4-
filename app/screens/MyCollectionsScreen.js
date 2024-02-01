import React, { useState } from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppListItem from "../components/AppListItem";
import AppIcon from "../components/AppIcon";
import DataManager from "../config/DataManager";

//Collections screen
//Shows current users collections (can delete)
function MyAuthorsScreen(props) {
  const categoryData = DataManager.getInstance();
  const [refreshing, setRefreshing] = useState(false);
  const [authors, setAuthors] = useState(categoryData.categories);

  const handleDelete = (author) => {
    const newAuthorList = authors.filter((item) => item.value !== author.value);
    setAuthors(newAuthorList);
    categoryData.categories = newAuthorList;
  };

  return (
    <AppScreen style={styles.container}>
      <FlatList
        data={authors}
        keyExtractor={(author) => author.value.toString()}
        refreshing={refreshing}
        onRefresh={() => setAuthors(categoryData.categories)}
        renderItem={({ item }) => (
          <AppListItem
            title={item.label}
            IconComponent={
              <AppIcon
                name={item.icon}
                size={50}
                iconColor={AppColors.secondaryColor}
                backgroundColor={AppColors.white}
              />
            }
            onPress={() => console.log(item)}
            onSwipeLeft={() => (
              <View style={styles.deleteView}>
                <TouchableOpacity onPress={() => handleDelete(item)}>
                  <AppIcon
                    name="trash-can"
                    iconColor={AppColors.secondaryColor}
                    backgroundColor={AppColors.otherColorLite}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.otherColor,
    flex: 1,
  },
  seperator: {
    width: "100%",
    height: 2,
    backgroundColor: AppColors.white,
  },
  deleteView: {
    backgroundColor: AppColors.secondaryColor,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyAuthorsScreen;
