import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { categories } from "../../constants";
import ProductCard from "../../components/Product/ProductCard";
import SmallProductCard from "../../components/Product/SmallProductCard";

const MostPopular = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View className="mt-5 pb-5">
      <View className="flex-row justify-between items-center">
        <Text className="text-neutral-800 text-xl font-bold leading-normal">
          Most Popular
        </Text>
        <Text className="text-right text-emerald-500 text-base font-bold leading-snug tracking-tight">
          See All
        </Text>
      </View>
      {/* categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-2 mt-8"
      >
        {categories.map((category, index) => {
          let isActive = category.name == activeCategory;
          let btnClass = isActive ? " bg-emerald-500 " : "bg-white";
          let textClass = isActive ? " text-white " : " text-emerald-500 ";
          return (
            <View>
              <TouchableOpacity
                onPress={() => setActiveCategory(category.name)}
                className={
                  "px-5 py-2 border-2 border-emerald-500 rounded-[100px] bg-emerald-500" +
                  btnClass
                }
              >
                <Text
                  className={
                    "text-center text-emerald-500 text-base font-semibold  leading-snug tracking-tight" +
                    textClass
                  }
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      <View className="flex-row justify-between flex-wrap">
        <SmallProductCard />
      </View>
    </View>
  );
};

export default MostPopular;
