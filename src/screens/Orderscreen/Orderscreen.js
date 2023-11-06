import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  EllipsisHorizontalCircleIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import ActiveOrders from "./ActiveOrders";

const Orderscreen = () => {
  const orderTypes = ["Active", "Completed"];
  const [orderType, seOrderType] = useState("Active");

  const displayTabContent = () => {
    switch (orderType) {
      case "Active":
        return <ActiveOrders />;

      case "Completed":
      // return <PartTime />;

      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false} className="">
        {/* Header Section */}
        <View className="flex-row  justify-between items-center mx-3 mt-8">
          <View className="flex-row space-x-2 items-center">
            <Image
              className="w-8 h-8 rounded-full"
              source={require("../../../assets/images/logo/plantlogo.jpg")}
            />
            <Text className="text-neutral-800 text-2xl font-bold leading-[28.80px]">
              My Orders
            </Text>
          </View>
          <View className="flex-row items-center space-x-3">
            <MagnifyingGlassIcon size={30} font="bold" color="black" />
            <EllipsisHorizontalCircleIcon size={30} font="bold" color="black" />
          </View>
        </View>

        {/* Tabs Display Start */}
        <View className="p-5 flex-row justify-between">
          <FlatList
            data={orderTypes}
            renderItem={({ item }) => (
              <TouchableOpacity
                className={`${
                  (item === "Active" && "bg-cyan-500 ") ||
                  (item === "Completed" && "bg-teal-500 ")
                } p-3 rounded-md  shadow-md flex-row justify-between `}
                onPress={() => {
                  seOrderType(item);
                }}
              >
                <Text
                  className={`${
                    (item === "Active" && "text-cyan-800 ") ||
                    (item === "Completed" && "text-teal-700 ")
                  } font-bold`}
                  style={orderType === item ? { color: "white" } : {}}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
            contentContainerStyle={{ columnGap: 10 }}
            horizontal
          />
        </View>

        <View className="">{displayTabContent()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orderscreen;
