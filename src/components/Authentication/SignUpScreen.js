import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { AuthUser } from "../../helpers/AuthUser";
import { Formik } from "formik";
import * as Yup from "yup";
import { UrlBuilder } from "../../helpers/UrlBuilder";
import { callApi, clearState, selectApi } from "../../reducers/apiSlice";
import { useDispatch, useSelector } from "react-redux";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    regData = {
      data: {},
    },
  } = useSelector(selectApi);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AuthUser.getUser(); // Await for user data
        console.log("User data: ", userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Full Name should be at least 3 characters")
      .required("Full Name is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),

    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "Phone Number should only contain digits")
      .min(10, "Phone Number should be at least 10 digits")
      .max(15, "Phone Number should not exceed 15 digits")
      .required("Phone Number is required"),

    password: Yup.string()
      .min(6, "Password should be at least 6 characters")
      .required("Password is required"),
  });

  useEffect(() => {
    if (regData?.status === "success") {
      navigation.navigate("Login");
    }
  }, [regData?.status]);

  // useEffect(() => {
  //   dispatch(
  //     clearState({
  //       output: "regData",
  //     })
  //   );
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      const clearRegData = () => {
        dispatch(
          clearState({
            output: "regData",
          })
        );
      };
      clearRegData();
    }, [])
  );

  return (
    <View className="flex-1 bg-green-50">
      <ImageBackground
        source={require("../../images/signup_bg.jpg")}
        className="absolute w-full h-full"
      >
        <View className=" bottom-0 top-32 inset-0 justify-center items-center">
          <Text className="text-gray-500 text-2xl font-bold">
            Create your <Text className="text-green-500">account</Text>
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
      </SafeAreaView>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phoneNumber: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);

          dispatch(
            callApi({
              operationId: UrlBuilder.plantApiLocalhost("auth/register"),
              output: "regData",
              parameters: {
                method: "POST",
                body: JSON.stringify({
                  name: values.fullName,
                  email: values.email,
                  phoneNumber: values.phoneNumber,
                  password: values.password,
                  role: "USER",
                }),
              },
            })
          );

          dispatch(
            clearState({
              output: "regData",
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
            className="flex-1 bg-white px-8 pt-8 mt-36"
            style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
          >
            <View className="form space-y-2">
              <Text className="text-gray-700 ml-4">Full Name</Text>
              <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
                placeholder="Enter your full name"
              />
              {touched.fullName && errors.fullName && (
                <Text style={{ color: "red", marginLeft: 16 }}>
                  {errors.fullName}
                </Text>
              )}

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

              <Text className="text-gray-700 ml-4">Phone Number</Text>
              <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                placeholder="Enter your phone number"
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <Text style={{ color: "red", marginLeft: 16 }}>
                  {errors.phoneNumber}
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
            </View>

            <TouchableOpacity
              className="py-3 bg-green-400 rounded-xl mt-10"
              onPress={handleSubmit}
            >
              <Text className="font-xl font-bold text-center text-gray-700">
                Sign Up
              </Text>
            </TouchableOpacity>

            <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold">
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text className="font-semibold text-green-500">Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
