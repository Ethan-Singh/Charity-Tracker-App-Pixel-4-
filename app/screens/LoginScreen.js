import React from "react";
import { View, StyleSheet, TextInput, Image, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import DataManager from "../config/DataManager";
import ErrorText from "../components/ErrorText";

//Login Screen

//uses Yup to validate login form
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is a required field"),
  password: Yup.string().required("Password is a required field"),
});

//gets data from DataManager and compares against inputted data to validation
const validateUser = (user) => {
  let registerData = DataManager.getInstance();
  if (
    registerData.getEmail() == user.email &&
    registerData.getPassword() == user.password
  ) {
    return true;
  }
  //Code for multiple users (sorta works)
  // for (let i = 0; i < registerData.users.length; i++) {
  //   if (
  //     registerData.users[i].email == user.email &&
  //     registerData.users[i].password == user.password
  //   ) {
  //     return true;
  //   }
  // }
  return false;
};

function LoginScreen({ navigation }) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Image source={require("../assets/logo.png")}></Image>
        <AppText>Login</AppText>
      </View>
      <Formik
        validationSchema={loginSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          if (validateUser(values)) {
            let registerData = DataManager.getInstance();
            resetForm();
            navigation.navigate("Home", {
              screen: "Home",
              params: {
                screen: "Home",
                params: {
                  paramEmail: registerData.getEmail(),
                  paramName: registerData.getName(),
                  paramImage: require("../assets/pfp.jpg"),
                },
              },
            });
          } else {
            resetForm();
            alert("Invalid Login Details");
          }
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          setFieldTouched,
          touched,
        }) => (
          <>
            <View style={styles.textInputContainer}>
              <AppTextInput
                name="emailField"
                autoCapitalize="none"
                autoCorrect={false}
                icon="email-outline"
                placeholder="Enter your email"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={values.email}
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
              />
              {touched.email && <ErrorText>{errors.email}</ErrorText>}
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock-outline"
                placeholder="Enter your password"
                secureTextEntry
                textContentType="password"
                value={values.password}
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
              />
              {touched.password && <ErrorText>{errors.password}</ErrorText>}
            </View>
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: AppColors.otherColor,
    marginTop: 0,
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

export default LoginScreen;
