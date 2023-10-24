import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import {
  ArrowLongRightIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "react-native-heroicons/outline";

const Cartscreen = () => {
  return (
    <SafeAreaView className="bg-gray-50 flex-1">
      <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
        {/* Header Section */}
        <View className="flex-row  justify-between items-center mx-3">
          <View className="flex-row space-x-2 items-center">
            <Image
              className="w-8 h-8 rounded-full"
              source={require("../../../assets/images/logo/plantlogo.jpg")}
            />
            <Text className="text-neutral-800 text-2xl font-bold leading-[28.80px]">
              My Cart
            </Text>
          </View>
          <View>
            <MagnifyingGlassIcon size={30} font="bold" color="black" />
          </View>
        </View>

        {/* All Products */}

        <View className=" rounded-[32px] my-2 bg-white shadow-sm mx-3 mt-10">
          <View className="flex-row items-center space-x-2">
            <View>
              <View className=" rounded-[32px] m-4 bg-gray-50">
                <Image
                  className="w-32 h-32 rounded-full "
                  source={require("../../../assets/images/plants/plant1.png")}
                />
              </View>
            </View>
            <View>
              <Text className=" text-neutral-800 text-lg font-bold leading-snug">
                Prayer Plant
              </Text>
              <Text className=" text-emerald-500 text-lg font-bold  leading-snug">
                $29
              </Text>
              <View className="flex-row items-center justify-between  w-48 mt-1">
                <View className="flex-row space-x-3 items-center bg-stone-50 shadow-sm px-3 py-1 rounded-3xl">
                  <MinusIcon color="#01B763" />
                  <Text className=" text-emerald-500 text-sm font-bold leading-snug">
                    2
                  </Text>
                  <PlusIcon color="#01B763" />
                </View>

                <View>
                  <TrashIcon color="red" />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className=" rounded-[32px] my-2 bg-white shadow-sm mx-3">
          <View className="flex-row items-center space-x-2">
            <View>
              <View className=" rounded-[32px] m-4 bg-gray-50">
                <Image
                  className="w-32 h-32 rounded-full "
                  source={require("../../../assets/images/plants/plant2.png")}
                />
              </View>
            </View>
            <View>
              <Text className=" text-neutral-800 text-lg font-bold leading-snug">
                Rubber Fig Plant
              </Text>
              <Text className=" text-emerald-500 text-lg font-bold  leading-snug">
                $99
              </Text>
              <View className="flex-row items-center justify-between  w-48 mt-1">
                <View className="flex-row space-x-3 items-center bg-stone-50 shadow-sm px-3 py-1 rounded-3xl">
                  <MinusIcon color="#01B763" />
                  <Text className=" text-emerald-500 text-sm font-bold leading-snug">
                    2
                  </Text>
                  <PlusIcon color="#01B763" />
                </View>

                <View>
                  <TrashIcon color="red" />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className=" rounded-[32px] my-2 bg-white shadow-sm mx-3">
          <View className="flex-row items-center space-x-2">
            <View>
              <View className=" rounded-[32px] m-4 bg-gray-50">
                <Image
                  className="w-32 h-32 rounded-full "
                  source={require("../../../assets/images/plants/plant3.png")}
                />
              </View>
            </View>
            <View>
              <Text className=" text-neutral-800 text-lg font-bold leading-snug">
                ZZ Plant
              </Text>
              <Text className=" text-emerald-500 text-lg font-bold  leading-snug">
                $99
              </Text>
              <View className="flex-row items-center justify-between  w-48 mt-1">
                <View className="flex-row space-x-3 items-center bg-stone-50 shadow-sm px-3 py-1 rounded-3xl">
                  <MinusIcon color="#01B763" />
                  <Text className=" text-emerald-500 text-sm font-bold leading-snug">
                    2
                  </Text>
                  <PlusIcon color="#01B763" />
                </View>

                <View>
                  <TrashIcon color="red" />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className=" rounded-[32px] my-2 bg-white shadow-sm mx-3">
          <View className="flex-row items-center space-x-2">
            <View>
              <View className=" rounded-[32px] m-4 bg-gray-50">
                <Image
                  className="w-32 h-32 rounded-full "
                  source={require("../../../assets/images/plants/plant4.png")}
                />
              </View>
            </View>
            <View>
              <Text className=" text-neutral-800 text-lg font-bold leading-snug">
                Plum Plant
              </Text>
              <Text className=" text-emerald-500 text-lg font-bold  leading-snug">
                $99
              </Text>
              <View className="flex-row items-center justify-between  w-48 mt-1">
                <View className="flex-row space-x-3 items-center bg-stone-50 shadow-sm px-3 py-1 rounded-3xl">
                  <MinusIcon color="#01B763" />
                  <Text className=" text-emerald-500 text-sm font-bold leading-snug">
                    2
                  </Text>
                  <PlusIcon color="#01B763" />
                </View>

                <View>
                  <TrashIcon color="red" />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="border-gray-100 border rounded-tl-[32px] rounded-tr-[32px] mt-5 bg-white">
          <View className="flex-row justify-between  my-3 items-center mx-5">
            <View className="space-y-1">
              <Text className="text-neutral-500 text-xs font-medium tracking-tight">
                Total
              </Text>
              <Text className="text-neutral-800 text-2xl font-bold leading-[28.80px]">
                $72
              </Text>
            </View>
            <View className="w-72 p-3 rounded-3xl bg-emerald-500 shadow flex-row justify-center items-center space-x-3">
              <Text className=" text-white text-base font-bold  leading-snug tracking-tight">
                Checkout
              </Text>
              <View className="">
                <ArrowLongRightIcon color="white" height={30} width={30} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cartscreen;
