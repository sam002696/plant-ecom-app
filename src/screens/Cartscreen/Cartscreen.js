import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "react-native-heroicons/outline";
import { ModalContent } from "react-native-modals";
import { BottomModal } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { useNavigation } from "@react-navigation/native";
import {
  decreaseQuantity,
  increaseQuantity,
  initializeCart,
  removeFromCart,
  selectCart,
} from "../../reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cartscreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const { items } = useSelector(selectCart);

  useEffect(() => {
    dispatch(initializeCart());
  }, [dispatch]);

  const handleRemovePress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleItemRemoval = (item) => {
    dispatch(removeFromCart(item.id));
    setModalVisible(false);
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  useEffect(() => {
    // Calculate total price whenever cart items change
    const total = items.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, [items]);

  console.log("items", items);
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

        {items && items.length > 0
          ? items.map((row, index) => (
              <View
                key={row.id}
                className=" rounded-[32px]  bg-white shadow-sm mx-3 mt-5"
              >
                <View className="flex-row items-center space-x-2">
                  <View>
                    <View className=" rounded-[32px] m-4 bg-gray-50">
                      <Image
                        className="w-32 h-32 rounded-[32px] "
                        source={{ uri: row.plantImageUrl }}
                      />
                    </View>
                  </View>
                  <View>
                    <Text className=" text-neutral-800 text-lg font-bold leading-snug">
                      {row.plantName}
                    </Text>
                    <Text className=" text-emerald-500 text-lg font-bold  leading-snug">
                      ${row.price}
                    </Text>
                    <View className="flex-row items-center justify-between  w-48 mt-1">
                      <View className="flex-row space-x-3 items-center bg-stone-50 shadow-sm px-3 py-1 rounded-3xl">
                        <TouchableOpacity
                          onPress={() => handleDecreaseQuantity(row.id)}
                        >
                          <MinusIcon color="#01B763" />
                        </TouchableOpacity>
                        <Text className=" text-emerald-500 text-sm font-bold leading-snug">
                          {row.quantity}
                        </Text>
                        <TouchableOpacity
                          onPress={() => handleIncreaseQuantity(row.id)}
                        >
                          <PlusIcon color="#01B763" />
                        </TouchableOpacity>
                      </View>

                      <Pressable onPress={() => handleRemovePress(row)}>
                        <TrashIcon color="red" />
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            ))
          : ""}
      </ScrollView>

      <View
        className="bg-white px-8 py-3 shadow-md"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          paddingBottom: 20, // Optional: padding for spacing
        }}
      >
        <View className="flex flex-row items-center justify-between">
          <View>
            <Text className="text-gray-500 text-sm">Total Price:</Text>
            <Text className=" font-bold text-2xl">${totalPrice}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Checkout")}
              className="px-10 py-4 bg-green-500 rounded-full"
            >
              <Text className="text-white font-bold">Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

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
        <ModalContent style={{ width: "100%", height: 400 }}>
          {selectedItem && (
            <>
              <View style={{ marginBottom: 8 }}>
                <Text className="text-center text-neutral-800 text-2xl font-bold leading-[28.80px]">
                  Remove{" "}
                  <Text className="text-green-600">
                    {selectedItem.plantName}
                  </Text>{" "}
                  from Cart?
                </Text>
              </View>

              {/* Border */}
              <View className="w-[380px] h-[0px] justify-center items-center inline-flex mt-4">
                <View className="w-[380px] h-[0px] border border-zinc-100"></View>
              </View>

              {/* Product in Modal */}
              <View className="rounded-[32px] my-2 bg-white shadow-sm mx-3 mt-10">
                <View className="flex-row items-center space-x-2">
                  <View>
                    <View className="rounded-[32px] m-4 bg-gray-50">
                      <Image
                        className="w-32 h-32 rounded-[32px]"
                        source={{ uri: selectedItem.plantImageUrl }}
                      />
                    </View>
                  </View>
                  <View>
                    <Text className="text-neutral-800 text-lg font-bold leading-snug">
                      {selectedItem.plantName}
                    </Text>
                    <Text className="text-emerald-500 text-lg font-bold leading-snug">
                      ${selectedItem.price}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Border */}
              <View className="w-[380px] h-[0px] justify-center items-center inline-flex mt-4">
                <View className="w-[380px] h-[0px] border border-zinc-100"></View>
              </View>

              {/* Buttons */}
              <View className="flex-row justify-between items-center mt-5">
                <View className="w-[184px] px-5 py-3 rounded-3xl bg-emerald-50 shadow space-x-3">
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text className="text-emerald-500 text-base font-bold text-center leading-snug tracking-tight">
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="w-[184px] px-5 py-3 rounded-3xl bg-red-50 shadow space-x-3">
                  <TouchableOpacity
                    onPress={() => handleItemRemoval(selectedItem)}
                  >
                    <Text className="text-red-500 text-base font-bold text-center leading-snug tracking-tight">
                      Yes, Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </ModalContent>
      </BottomModal>
    </SafeAreaView>
  );
};

export default Cartscreen;
