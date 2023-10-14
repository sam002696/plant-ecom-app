import { View, Text, ScrollView } from "react-native";
import React from "react";
import ProductCard from "../../components/Product/ProductCard";

const SpecialOffer = () => {
  return (
    <View className="mt-5">
      <View className="flex-row justify-between items-center">
        <Text className="text-neutral-800 text-xl font-bold leading-normal">
          Special Offers
        </Text>
        <Text className="text-right text-emerald-500 text-base font-bold leading-snug tracking-tight">
          See All
        </Text>
      </View>
      {/* Products */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        <ProductCard />
      </ScrollView>
    </View>
  );
};

export default SpecialOffer;
