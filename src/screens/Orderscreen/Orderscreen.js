import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  EllipsisHorizontalCircleIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import ActiveOrders from "./ActiveOrders";
import { callApi, selectApi } from "../../reducers/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { UrlBuilder } from "../../helpers/UrlBuilder";
import EmptyList from "../EmptyList/EmptyList";

const Orderscreen = () => {
  const { plantOrders = { data: [] } } = useSelector(selectApi);
  const dispatch = useDispatch();
  const orderTypes = ["Active", "Completed"];
  const [orderType, setOrderType] = useState("Active");

  const displayTabContent = () => {
    switch (orderType) {
      case "Active":
        return plantOrders?.data && plantOrders?.data?.length > 0 ? (
          <ActiveOrders activeOrders={plantOrders?.data} />
        ) : (
          <EmptyList
            text={`You don't have any order yet`}
            detailedText={`You don't have any active orders at this time`}
          />
        );
      case "Completed":
        return (
          <EmptyList
            text={`You don't have any order yet`}
            detailedText={`You don't have any completed orders at this time`}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    dispatch(
      callApi({
        operationId: UrlBuilder.plantApiLocalhost(
          `order/order-status/list?status=PLACED`
        ),
        output: "plantOrders",
        storeName: "plantOrders",
      })
    );
  }, [dispatch]);

  console.log("plantOrders", plantOrders);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="flex-row justify-between items-center mx-3 mt-8">
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
        <View className="flex-row justify-between mt-5">
          {orderTypes.map((item) => (
            <TouchableOpacity
              key={item}
              className={`flex-1 p-3 items-center ${
                orderType === item
                  ? "border-b-4 border-green-500"
                  : "border-b-4 border-gray-300"
              }`}
              onPress={() => {
                setOrderType(item);
              }}
            >
              <Text
                className={`font-bold text-base ${
                  orderType === item ? "text-green-500" : "text-gray-400"
                }`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Content Area */}
        <View className="mt-4">{displayTabContent()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orderscreen;
