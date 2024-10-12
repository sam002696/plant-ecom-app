import React from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import { BlurView } from "expo-blur"; // You can use this if expo-blur is installed or use a View with opacity

const OrderSuccessModal = ({ isVisible, onClose }) => {
  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <BlurView
        intensity={20}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View className="bg-white p-6 rounded-xl shadow-lg items-center justify-center">
          <Image
            className="w-28 h-28 my-5 rounded-xl shadow-md"
            source={require("../../../assets/images/order/order_successful.png")}
          />
          <Text className="text-xl font-bold text-black">
            Order Successful!
          </Text>
          <Text className="text-sm  font-normal text-black my-2">
            You have successfully made the order!
          </Text>
          <TouchableOpacity
            onPress={onClose}
            className="bg-green-500 py-2 px-11 rounded-full mt-2"
          >
            <Text className="text-white text-sm font-bold">View Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onClose}
            className="bg-green-100 py-2 px-8 rounded-full mt-2"
          >
            <Text className="text-green-500 text-sm font-bold">
              View E-receipt
            </Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </Modal>
  );
};

export default OrderSuccessModal;
