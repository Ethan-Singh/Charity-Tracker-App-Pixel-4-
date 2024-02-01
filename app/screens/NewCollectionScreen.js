import React, { useState } from "react";

import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import DataManager from "../config/DataManager";
import AppColors from "../config/AppColors";

//New Collections Screen
//Allows users to make new collections
function NewBookScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const doErrorCheck = () => {
    setTitleError(title.length > 0 ? "" : "Please set a valid Book Title");
    return title.length > 0 ? true : false;
  };

  const addBook = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    const categories = commonData.getCategories(user);
    const categoryValue = commonData.categories.length + 1;
    const newCategory = {
      label: title,
      value: categoryValue,
    };

    console.log(newCategory);
    commonData.addCategory(newCategory);
  };

  return (
    <AppScreen style={{ backgroundColor: AppColors.otherColor }}>
      <AppTextInput
        icon="format-title"
        placeholder="Collection Title"
        value={title}
        onChangeText={(inputText) => setTitle(inputText)}
      />
      {titleError.length > 0 ? (
        <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
          {titleError}
        </AppText>
      ) : (
        <></>
      )}

      <AppButton
        title="Add Collection"
        onPress={() => {
          if (doErrorCheck()) {
            addBook();
            navigation.navigate("Collections");
          }
        }}
      />
    </AppScreen>
  );
}

export default NewBookScreen;
