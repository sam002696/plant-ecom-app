import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { UrlBuilder } from "../../helpers/UrlBuilder";
import { useDispatch, useSelector } from "react-redux";
import { ModalContent } from "react-native-modals";
import { BottomModal } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { callApi, clearState, selectApi } from "../../reducers/apiSlice";

const ActiveOrders = ({ activeOrders, setRefreshActiveOrder }) => {
  const { cancelOrder = { data: {} }, loading } = useSelector(selectApi);
  const dispatch = useDispatch();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (cancelOrder?.status === "success") {
      setRefreshActiveOrder(true);
    }
  }, [cancelOrder?.status, setRefreshActiveOrder]);

  const handleCancelOrder = (order) => {
    setSelectedOrder(order);
    setModalVisible(true);
  };

  const handleItemRemoval = (orderId) => {
    dispatch(
      callApi({
        operationId: UrlBuilder.plantApiLocalhost(`order/cancel/${orderId}`),
        parameters: { method: "POST" },
        output: "cancelOrder",
        storeName: "cancelOrder",
      })
    );
  };

  useEffect(() => {
    if (cancelOrder?.status === "success") {
      setRefreshActiveOrder(true);
      setModalVisible(false);

      dispatch(
        clearState({
          output: "cancelOrder",
        })
      );
    }
  }, [cancelOrder?.status, setRefreshActiveOrder]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#01B763" />
      </View>
    );
  }

  return (
    <>
      {activeOrders?.map((order) => (
        <View
          className="rounded-[32px] my-2 bg-white shadow-sm mx-3 mt-5"
          key={order?.orderId}
        >
          {/* Main Order Information */}
          <View className="p-4">
            <View className="flex flex-row justify-between">
              <View>
                <Text className="text-neutral-800 text-lg font-bold">
                  Order ID: {order?.orderId}
                </Text>
                <Text className="text-gray-500 text-sm">
                  Total: ${order?.total} | Shipping: {order?.shippingType}
                </Text>
              </View>
              <View className="space-y-3">
                <TouchableOpacity
                  onPress={() => handleCancelOrder(order)}
                  className="px-3 py-1 bg-red-100 rounded ml-2"
                >
                  <Text className="text-red-500 text-xs font-semibold leading-tight tracking-tight">
                    Cancel order
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="px-3 py-1 bg-green-100 rounded ml-2">
                  <Text className="text-green-600 text-xs font-semibold leading-tight tracking-tight">
                    Track Order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Stacked Order Items Display */}
          <View className="isolate flex-row -space-x-2 overflow-hidden p-4">
            {order?.orderItems.slice(0, 3).map((item, index) => (
              <Image
                key={index}
                alt={item.plantName}
                source={{ uri: item.plantImageUrl }}
                className={`relative z-${
                  30 - index * 10
                } h-10 w-10 rounded-full ring-2 ring-white`}
              />
            ))}
            {order?.orderItems.length > 3 && (
              <View className="relative z-0 h-10 w-10 rounded-full bg-gray-200 ring-2 ring-white flex items-center justify-center">
                <Text className="text-gray-600 font-bold">
                  +{order?.orderItems.length - 3}
                </Text>
              </View>
            )}
          </View>
        </View>
      ))}

      {/* Modal for Cancel Confirmation */}
      <BottomModal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 300 }}>
          {selectedOrder && (
            <>
              <View style={{ marginBottom: 8 }}>
                <Text className="text-center text-neutral-800 text-xl font-bold leading-[28.80px]">
                  Remove order{" "}
                  <Text className="text-green-600">
                    {selectedOrder.orderId}
                  </Text>{" "}
                  from your Cart?
                </Text>
              </View>

              <View className="w-[380px] h-[0px] justify-center items-center inline-flex mt-4">
                <View className="w-[380px] h-[0px] border border-zinc-100"></View>
              </View>

              <View className="flex-row justify-between items-center mt-12">
                <View className="w-[184px] px-5 py-3 rounded-3xl bg-emerald-50 shadow space-x-3">
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text className="text-emerald-500 text-base font-bold text-center leading-snug tracking-tight">
                      Don't cancel
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="w-[184px] px-5 py-3 rounded-3xl bg-red-50 shadow space-x-3">
                  <TouchableOpacity
                    onPress={() => handleItemRemoval(selectedOrder?.orderId)}
                  >
                    <Text className="text-red-500 text-base font-bold text-center leading-snug tracking-tight">
                      Yes, cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default ActiveOrders;
