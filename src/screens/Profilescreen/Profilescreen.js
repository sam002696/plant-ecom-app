import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { EllipsisHorizontalCircleIcon } from "react-native-heroicons/outline";

const Profilescreen = () => {
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

        <View className="text-center justify-center flex-col mt-5 items-center space-y-2">
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

        <View className="w-[380px] h-[0px] justify-center items-center inline-flex mt-5 mx-3">
          <View className="w-[380px] h-[0px] border border-zinc-100"></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profilescreen;
