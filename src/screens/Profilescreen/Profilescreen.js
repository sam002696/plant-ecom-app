import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  ChevronRightIcon,
  EllipsisHorizontalCircleIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { AuthUser } from "../../helpers/AuthUser";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profilescreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AuthUser.removeLoginData();
  };

  return (
    <SafeAreaView className="bg-gray-50 flex-1">
      <ScrollView showsVerticalScrollIndicator={false} className="mt-10">
        {/* Header Section */}
        <View className="flex-row  justify-between items-center mx-3">
          <View className="flex-row space-x-2 items-center">
            <Image
              className="w-8 h-8 rounded-full"
              source={require("../../../assets/images/logo/plantlogo.jpg")}
            />
            <Text className="text-neutral-800 text-2xl font-bold leading-[28.80px]">
              Profile
            </Text>
          </View>
          <View>
            <EllipsisHorizontalCircleIcon size={30} font="bold" color="black" />
          </View>
        </View>
        {/* User Info */}
        <View className="text-center justify-center flex-col  items-center space-y-2 mt-10">
          <Image
            className="w-[120px] h-[120px] rounded-full"
            source={require("../../../assets/images/user/user.png")}
          />
          <Text className="text-center text-neutral-800 text-2xl font-bold leading-[28.80px]">
            Andrew Ainsley
          </Text>
          <Text className="text-center text-neutral-800 text-sm font-semibold leading-tight tracking-tight">
            +1 111 467 378 399
          </Text>
        </View>
        {/* Border */}
        <View className="w-[380px] h-[0px] justify-center items-center inline-flex mt-5  mx-auto">
          <View className="w-[380px] h-[0px] border border-zinc-100"></View>
        </View>
        {/* Links */}
        {/* Edit Profile */}
        <View className="flex-row justify-between mx-3 mt-8 items-center">
          <View className=" flex-row space-x-2 items-center">
            <UserIcon size={20} font="bold" color="black" />
            <Text>Edit Profile</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
            <ChevronRightIcon size={20} font="bold" color="black" />
          </TouchableOpacity>
        </View>

        {/*  log out   */}
        <TouchableOpacity onPress={handleLogout} className="mx-3 mt-5">
          <View className="bg-red-50 p-3 shadow-sm rounded-sm">
            <Text className="text-red-500">Log out</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profilescreen;
