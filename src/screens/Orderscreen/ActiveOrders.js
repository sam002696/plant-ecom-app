import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ActiveOrders = () => {
  const navigation = useNavigation();
  return (
    <>
      {/* Active Orders */}
      <View className=" rounded-[32px] my-2 bg-white shadow-sm mx-3 mt-5">
        <View className="flex-row items-center space-x-2">
          <View>
            <View className=" rounded-[32px] m-4 bg-gray-50">
              <Image
                className="w-32 h-32 rounded-full "
                source={require("../../../assets/images/plants/plant1.png")}
              />
            </View>
          </View>
          <View className="space-y-1">
            <Text className=" text-neutral-800 text-lg font-bold leading-snug">
              Prayer Plant
            </Text>
            <Text className="text-zinc-600 text-xs font-medium tracking-tight">
              Qty = 1
            </Text>
            <View className="w-20 py-2 rounded-md bg-emerald-50 shadow-sm">
              <Text className="text-center text-emerald-500 text-[10px] font-semibold tracking-tight">
                In Delivery
              </Text>
            </View>
            <View className="flex-row items-center justify-between  w-48 mt-1">
              <Text className=" text-emerald-500 text-lg font-bold  leading-snug">
                $29
              </Text>
              <View className=" px-3 py-2 bg-emerald-500 rounded-[100px]">
                <Text className="text-white text-sm font-semibold leading-tight tracking-tight">
                  Track Order
                </Text>
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
          <View className="space-y-1">
            <Text className=" text-neutral-800 text-lg font-bold leading-snug">
              Prayer Plant
            </Text>
            <Text className="text-zinc-600 text-xs font-medium tracking-tight">
              Qty = 1
            </Text>
            <View className="w-20 py-2 rounded-md bg-emerald-50 shadow-sm">
              <Text className="text-center text-emerald-500 text-[10px] font-semibold tracking-tight">
                In Delivery
              </Text>
            </View>
            <View className="flex-row items-center justify-between  w-48 mt-1">
              <Text className=" text-emerald-500 text-lg font-bold  leading-snug">
                $29
              </Text>
              <View className=" px-3 py-2 bg-emerald-500 rounded-[100px]">
                <Text className="text-white text-sm font-semibold leading-tight tracking-tight">
                  Track Order
                </Text>
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
          <View className="space-y-1">
            <Text className=" text-neutral-800 text-lg font-bold leading-snug">
              Prayer Plant
            </Text>
            <Text className="text-zinc-600 text-xs font-medium tracking-tight">
              Qty = 1
            </Text>
            <View className="w-20 py-2 rounded-md bg-emerald-50 shadow-sm">
              <Text className="text-center text-emerald-500 text-[10px] font-semibold tracking-tight">
                In Delivery
              </Text>
            </View>
            <View className="flex-row items-center justify-between  w-48 mt-1">
              <Text className=" text-emerald-500 text-lg font-bold  leading-snug">
                $29
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("TrackOrder")}
                className=" px-3 py-2 bg-emerald-500 rounded-[100px]"
              >
                <Text className="text-white text-sm font-semibold leading-tight tracking-tight">
                  Track Order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default ActiveOrders;
