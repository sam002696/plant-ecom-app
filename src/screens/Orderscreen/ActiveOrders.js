import { View, Text, Image } from "react-native";
import React from "react";

const ActiveOrders = ({ activeOrders }) => {
  return (
    <>
      {activeOrders && activeOrders.length > 0 ? (
        activeOrders.map((order) => (
          <View
            className="rounded-[32px] my-2 bg-white shadow-sm mx-3 mt-5"
            key={order?.orderId}
          >
            {order?.orderItems.map((item, index) => (
              <View
                key={index}
                className="flex-row items-center justify-between space-x-2 p-4"
              >
                <View className="rounded-[32px] bg-gray-50">
                  <Image
                    className="w-32 h-32 rounded-[32px]"
                    source={{ uri: item.plantImageUrl }}
                  />
                </View>
                <View className="space-y-1 mr-8">
                  <Text className="text-neutral-800 text-lg font-bold leading-snug">
                    {item.plantName}
                  </Text>
                  <Text className="text-zinc-600 text-xs font-medium tracking-tight">
                    Qty = {item.quantity}
                  </Text>
                  <View className="w-20 py-2 rounded-md bg-emerald-50 shadow-sm">
                    <Text className="text-center text-emerald-500 text-[10px] font-semibold tracking-tight">
                      In Delivery
                    </Text>
                  </View>
                  <View className="flex-row items-center justify-between w-48 mt-1">
                    <Text className="text-emerald-500 text-lg font-bold leading-snug">
                      ${item.price}
                    </Text>
                    <View className="px-3 py-2 bg-emerald-500 rounded-[32px]">
                      <Text className="text-white text-sm font-semibold leading-tight tracking-tight">
                        Track Order
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))
      ) : (
        <Text className="text-center text-lg text-gray-500 mt-5">
          No Active Orders
        </Text>
      )}
    </>
  );
};

export default ActiveOrders;
