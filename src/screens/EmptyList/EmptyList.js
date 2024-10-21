import { Image, Text, View } from "react-native";
import React from "react";

const EmptyList = ({ text, detailedText }) => {
  return (
    <View className="flex-1 justify-center items-center mt-20 p-5">
      <Image source={require("../../../assets/empty_list.png")} />
      <Text className="text-lg font-bold mt-4">{text}</Text>
      <Text className="text-sm font-normal mt-2 text-gray-500 text-center">
        {detailedText}
      </Text>
    </View>
  );
};

export default EmptyList;
