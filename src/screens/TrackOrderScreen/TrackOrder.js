import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

const TrackOrder = () => {
  return (
    <SafeAreaView className="bg-gray-50 flex-1">
      <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
        <View>
          <Text>Track Order</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrackOrder;
