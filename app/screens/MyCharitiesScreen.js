import React, { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";

import AppCard from "../components/AppCard";
import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import DataManager from "../config/DataManager";

//Charities screen
//Shows current user's charities
const getBooks = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  return commonData.getBooks(user);
};

function MyBooksScreen({ navigation }) {
  const bookList = getBooks();
  console.log(bookList);
  const setAuthors = useState(bookList);

  return (
    <AppScreen style={styles.container}>
      <Button
        onPress={() => {
          console.log("Hello");
        }}
        title="Filter"
        color="#3b3137"
      />
      <FlatList
        data={bookList}
        keyExtractor={(book) => book.bookid.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            category={item.category}
            navigation={navigation}
          />
        )}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.otherColor,
    flex: 1,
    marginTop: 0,
  },
});

export default MyBooksScreen;
