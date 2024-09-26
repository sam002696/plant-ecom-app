import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { theme } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { callApi } from "../../reducers/apiSlice";
import { UrlBuilder } from "../../helpers/UrlBuilder";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password should be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: theme.indigo.base(0.8) }}
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../../images/welcome.jpg")}
            style={{ width: 200, height: 200 }}
          />
        </View>
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
            className="flex-1 bg-white px-8 pt-8 mt-5"
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
                className="py-3 bg-yellow-400 rounded-xl"
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
                <Text className="font-semibold text-yellow-500">Sign Up</Text>
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
