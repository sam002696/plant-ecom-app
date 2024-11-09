import { Image, Text, View } from "react-native";
import React from "react";
import { BellIcon, HeartIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Banner = ({ user }) => {
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good Morning 👋";
    if (currentHour < 18) return "Good Afternoon 👋";
    return "Good Evening 👋";
  };

  return (
    <View className="flex-row justify-between items-center mb-2 mt-4">
      <View className="flex-row items-center space-x-3">
        <Image
          className="w-14 h-14 rounded-full"
          source={require("../../../assets/images/user/user.png")}
        />
        <View className="space-y-2">
          <Text className="text-neutral-500 text-base font-medium leading-snug tracking-tight">
            {getGreeting()}
          </Text>
          <Text className="text-neutral-800 text-xl font-bold leading-normal">
            {user}
          </Text>
        </View>
      </View>

      <View className="flex-row space-x-3 items-center">
        <HeartIcon size={hp(3)} color="gray" />
        <BellIcon size={hp(3)} color="gray" />
      </View>
    </View>
  );
};

export default Banner;
