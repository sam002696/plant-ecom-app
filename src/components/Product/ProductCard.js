import { View, Text, Image } from "react-native";
import React from "react";
import { HeartIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/outline";

const ProductCard = () => {
  return (
    <>
      <View className="flex-row space-x-1">
        <View className="  gap-3  mt-5">
          <View className="w-60 h-60 relative">
            <View className="w-60 h-60 left-0 top-0 absolute bg-gray-50 rounded-3xl shadow-sm" />
            <View className="left-0 top-0 absolute justify-center items-center inline-flex">
              <Image
                className="w-60 h-60"
                source={require("../../../assets/images/plants/plant1.png")}
              />
            </View>
            <View className="w-6 h-6 px-[2.50px] py-[3px] left-[196px] top-[20px] absolute justify-center items-center inline-flex">
              <View className="w-[19px] h-[18px] relative">
                <HeartIcon color="#01B763" />
              </View>
            </View>
          </View>
          <View className="self-stretch flex-col justify-start items-start gap-3 flex">
            <Text className="self-stretch text-neutral-800 text-2xl font-bold  leading-[28.80px]">
              Prayer Plant
            </Text>

            <View className="flex-row space-x-3 items-center justify-center">
              <View>
                <StarIcon color="#01B763" fill="#01B763" />
              </View>

              <Text className="text-zinc-600 text-base font-medium">4.8</Text>
              <Text className="text-zinc-600 text-base font-medium">|</Text>
              <View className="px-2.5 py-1.5 rounded-md border border-emerald-500 ">
                <Text className="text-emerald-500 text-[10px] font-semibold tracking-tight">
                  4.268 Sold
                </Text>
              </View>
            </View>

            <Text className="self-stretch text-emerald-500 text-2xl font-bold  leading-[28.80px]">
              $29
            </Text>
          </View>
        </View>
        <View className=" gap-3  mt-5">
          <View className="w-60 h-60 relative">
            <View className="w-60 h-60 left-0 top-0 absolute bg-gray-50 rounded-3xl shadow-sm" />
            <View className="w-60 h-60 left-0 top-0 absolute justify-center items-center inline-flex">
              <Image
                className="w-60 h-60"
                source={require("../../../assets/images/plants/plant2.png")}
              />
            </View>
            <View className="w-6 h-6 px-[2.50px] py-[3px] left-[196px] top-[20px] absolute justify-center items-center inline-flex">
              <View className="w-[19px] h-[18px] relative">
                <HeartIcon color="#01B763" />
              </View>
            </View>
          </View>
          <View className="self-stretch flex-col justify-start items-start gap-3 flex">
            <Text className="self-stretch text-neutral-800 text-2xl font-bold  leading-[28.80px]">
              Prayer Plant
            </Text>

            <View className="flex-row space-x-3 items-center justify-center">
              <View>
                <StarIcon color="#01B763" fill="#01B763" />
              </View>

              <Text className="text-zinc-600 text-base font-medium">4.8</Text>
              <Text className="text-zinc-600 text-base font-medium">|</Text>
              <View className="px-2.5 py-1.5 rounded-md border border-emerald-500 ">
                <Text className="text-emerald-500 text-[10px] font-semibold tracking-tight">
                  4.268 Sold
                </Text>
              </View>
            </View>

            <Text className="self-stretch text-emerald-500 text-2xl font-bold  leading-[28.80px]">
              $29
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProductCard;
