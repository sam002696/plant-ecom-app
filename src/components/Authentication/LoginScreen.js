import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { theme } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { callApi, clearState, selectApi } from "../../reducers/apiSlice";
import { UrlBuilder } from "../../helpers/UrlBuilder";
import { AuthUser } from "../../helpers/AuthUser";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {
    authData = {
      data: {},
    },
  } = useSelector(selectApi);

  console.log("login authdata", authData.data);

  useEffect(() => {
    const handleAuthData = async () => {
      // If the user logs in successfully (based on accessToken), save the login data
      if (authData?.data?.accessToken) {
        try {
          await AuthUser.saveLoginData(authData); // Save data to AuthUser
          console.log("User data saved:", authData.data);
          dispatch(
            clearState({
              output: "authData",
            })
          );
          navigation.navigate("Main");
        } catch (error) {
          console.error("Error saving login data:", error);
        }
      }
    };

    handleAuthData();
  }, [authData]);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password should be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <View
      className="flex-1 bg-green-50"
      // style={{ backgroundColor: theme.indigo.base(0.8) }}
    >
      <ImageBackground
        source={require("../../images/signup_bg.jpg")}
        className="absolute w-full h-full"
      >
        <View className=" bottom-0 top-32 inset-0 justify-center items-center">
          <Text className="text-gray-500 text-2xl font-bold">
            Login to your <Text className="text-green-500">account</Text>
          </Text>
        </View>
      </ImageBackground>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-green-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        {/* <View className="flex-row justify-center">
          <Image
            className="shadow-sm"
            source={require("../../images/login_image.png")}
            // style={{ width: 200, height: 200 }}
          />
        </View>
        <View className="items-center justify-center mt-5">
          <Text className="text-xl font-bold">Login to your account</Text>
        </View> */}
      </SafeAreaView>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);

          dispatch(
            callApi({
              operationId: UrlBuilder.plantApiLocalhost("auth/login"),
              output: "authData",
              parameters: {
                method: "POST",
                body: JSON.stringify(values),
              },
            })
          );
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View
            className="flex-1 bg-white px-8 pt-8 mt-40"
            style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
          >
            <View className="form space-y-2">
              <Text className="text-gray-700 ml-4">Email Address</Text>
              <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Enter your email"
                autoCapitalize="none"
              />
              {touched.email && errors.email && (
                <Text style={{ color: "red", marginLeft: 16 }}>
                  {errors.email}
                </Text>
              )}

              <Text className="text-gray-700 ml-4">Password</Text>
              <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="Enter your password"
              />
              {touched.password && errors.password && (
                <Text style={{ color: "red", marginLeft: 16 }}>
                  {errors.password}
                </Text>
              )}

              <TouchableOpacity className="flex items-end mb-5">
                <Text className="text-gray-700">Forgot password?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="py-3 bg-green-400 rounded-xl"
                onPress={handleSubmit}
              >
                <Text className="font-xl font-bold text-center text-gray-700">
                  Login
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold">
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text className="font-semibold text-green-500"> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
