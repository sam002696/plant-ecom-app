import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";
import { theme } from "../../theme";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      className="flex-1"
      // style={{ backgroundColor: theme.indigo.base(0.8) }}
    >
      <ImageBackground
        source={require("../../images/plant_bg_image.jpg")}
        resizeMode="cover"
        style={{
          // flex: 1,
          width: "100%",
          height: "110%",
          justifyContent: "center",
        }}
        className="absolute opacity-90"
      />

      <View className="flex-1 justify-between my-1">
        <Text className="text-white font-bold text-4xl text-center mt-12">
          Welcome to <Text className="text-yellow-400"> Potea! </Text>
        </Text>
        <View className="space-y-4">
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            className="py-3 bg-yellow-400 mx-7 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-gray-700">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center ">
            <Text className="text-white font-semibold text-lg ">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="font-semibold text-yellow-400 text-lg">
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
