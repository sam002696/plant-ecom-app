import { View, Text, Image } from "react-native";
import React from "react";
import { HeartIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/outline";

const SmallProductCard = () => {
  return (
    <>
      <View className="gap-2 mt-5">
        <View className="w-48 h-48 relative">
          <View className="w-48 h-48 left-0 top-0 absolute bg-gray-50 rounded-3xl shadow-sm" />
          <View className="left-0 top-0 absolute justify-center items-center inline-flex">
            <Image
              className="w-48 h-48"
              source={require("../../../assets/images/plants/plant3.png")}
            />
          </View>
          <View className="w-6 h-6 px-[2.50px] py-[3px] left-[158px] top-[20px] absolute justify-center items-center inline-flex">
            <View className="w-[19px] h-[18px] relative">
              <HeartIcon color="#01B763" />
            </View>
          </View>
        </View>
        <View className="self-stretch flex-col justify-start items-start gap-3 flex">
          <Text className="self-stretch text-neutral-800 text-lg font-bold  leading-[28.80px]">
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

          <Text className="self-stretch text-emerald-500 text-lg font-bold  leading-[28.80px]">
            $29
          </Text>
        </View>
      </View>
      <View className="gap-2 mt-5">
        <View className="w-48 h-48 relative">
          <View className="w-48 h-48 left-0 top-0 absolute bg-gray-50 rounded-3xl shadow-sm" />
          <View className="left-0 top-0 absolute justify-center items-center inline-flex">
            <Image
              className="w-48 h-48"
              source={require("../../../assets/images/plants/plant4.png")}
            />
          </View>
          <View className="w-6 h-6 px-[2.50px] py-[3px] left-[158px] top-[20px] absolute justify-center items-center inline-flex">
            <View className="w-[19px] h-[18px] relative">
              <HeartIcon color="#01B763" />
            </View>
          </View>
        </View>
        <View className="self-stretch flex-col justify-start items-start gap-3 flex">
          <Text className="self-stretch text-neutral-800 text-lg font-bold  leading-[28.80px]">
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

          <Text className="self-stretch text-emerald-500 text-lg font-bold  leading-[28.80px]">
            $29
          </Text>
        </View>
      </View>
      <View className="gap-2 mt-5 ">
        <View className="w-48 h-48 relative">
          <View className="w-48 h-48 left-0 top-0 absolute bg-gray-50 rounded-3xl shadow-sm" />
          <View className="left-0 top-0 absolute justify-center items-center inline-flex">
            <Image
              className="w-48 h-48"
              source={require("../../../assets/images/plants/plant5.png")}
            />
          </View>
          <View className="w-6 h-6 px-[2.50px] py-[3px] left-[158px] top-[20px] absolute justify-center items-center inline-flex">
            <View className="w-[19px] h-[18px] relative">
              <HeartIcon color="#01B763" />
            </View>
          </View>
        </View>
        <View className="self-stretch flex-col justify-start items-start gap-3 flex">
          <Text className="self-stretch text-neutral-800 text-lg font-bold  leading-[28.80px]">
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

          <Text className="self-stretch text-emerald-500 text-lg font-bold  leading-[28.80px]">
            $29
          </Text>
        </View>
      </View>
      <View className="gap-2 mt-5 ">
        <View className="w-48 h-48 relative">
          <View className="w-48 h-48 left-0 top-0 absolute bg-gray-50 rounded-3xl shadow-sm" />
          <View className="left-0 top-0 absolute justify-center items-center inline-flex">
            <Image
              className="w-48 h-48"
              source={require("../../../assets/images/plants/plant6.png")}
            />
          </View>
          <View className="w-6 h-6 px-[2.50px] py-[3px] left-[158px] top-[20px] absolute justify-center items-center inline-flex">
            <View className="w-[19px] h-[18px] relative">
              <HeartIcon color="#01B763" />
            </View>
          </View>
        </View>
        <View className="self-stretch flex-col justify-start items-start gap-3 flex">
          <Text className="self-stretch text-neutral-800 text-lg font-bold  leading-[28.80px]">
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

          <Text className="self-stretch text-emerald-500 text-lg font-bold  leading-[28.80px]">
            $29
          </Text>
        </View>
      </View>
    </>
  );
};

export default SmallProductCard;
