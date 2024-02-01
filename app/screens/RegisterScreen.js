import React, { useState } from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import ErrorText from "../components/ErrorText";
import DataManager from "../config/DataManager";

//Register screen
//uses Yup to validate register form
const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Passwords must be a minimum of 4 characters"),
});

const RegisterScreen = ({ navigation }) => {
  // For multiple users (sorta works)
  // const addUser = (name, email, password) => {
  //   let commonData = DataManager.getInstance();
  //   let userID = commonData.users.length + 1;
  //   const newUser = {
  //     id: userID,
  //     name: name,
  //     email: email,
  //     password: password,
  //   };

  //   console.log(newUser);
  //   commonData.addUser(newUser);
  // };
  return (
    <AppScreen style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image source={require("../assets/logo.png")}></Image>
        <AppText>Register</AppText>
      </View>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={registerSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="account-outline"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              placeholder="Your Full Name"
              textContentType="name"
            />
            {errors.name && touched.name && (
              <ErrorText>{errors.name}</ErrorText>
            )}

            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email-outline"
              placeholder="Your Email Address"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email && touched.email && (
              <ErrorText>{errors.email}</ErrorText>
            )}

            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock-outline"
              secureTextEntry
              placeholder="Password"
              textContentType="password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {errors.password && touched.password && (
              <ErrorText>{errors.password}</ErrorText>
            )}

            <View style={styles.container}></View>
            <AppButton
              title="Register"
              onPress={() => {
                let commonData = DataManager.getInstance();
                commonData.setDetails(
                  values.name,
                  values.email,
                  values.password
                );
                //For multiple users (sorta works)
                // addUser(values.name, values.email, values.password);
                alert(
                  "Registration Successful! Please enter your details to login"
                );
                navigation.navigate("Login");
              }}
            />
          </View>
        )}
      </Formik>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: AppColors.otherColor,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  textInputContainer: {
    marginVertical: 50,
  },
});

export default RegisterScreen;
