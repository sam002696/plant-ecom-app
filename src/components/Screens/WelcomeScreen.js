import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../theme";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const naviagtion = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: theme.bgWhite }}>
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-white font-bold text-4xl text-center">
          Let's get started!
        </Text>
        <View className="flex-row justify-center">
          <Image
            source={require("")}
            style={{ width: 350, height: 350 }}
          ></Image>
        </View>
        <View className="space-y-4">
          <TouchableOpacity className="py-3 bg-yellow-400 mx-7 rounded-xl">
            <Text className="text-xl font-bold text-center text-gray-700">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-white font-semibold ">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => naviagtion.navigate("Login")}>
              <Text className="font-semibold text-yellow-400">Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
