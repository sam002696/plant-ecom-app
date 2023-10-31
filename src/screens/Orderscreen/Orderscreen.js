import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

const Orderscreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <Text>Orderscreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orderscreen;
