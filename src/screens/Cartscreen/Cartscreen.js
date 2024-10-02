import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  ArrowLongRightIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "react-native-heroicons/outline";
import { ModalContent } from "react-native-modals";
import { BottomModal } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { useNavigation } from "@react-navigation/native";
import { initializeCart, selectCart } from "../../reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cartscreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const { items } = useSelector(selectCart);

  useEffect(() => {
    dispatch(initializeCart());
  }, [dispatch]);

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
                        <MinusIcon color="#01B763" />
                        <Text className=" text-emerald-500 text-sm font-bold leading-snug">
                          {row.quantity}
                        </Text>
                        <PlusIcon color="#01B763" />
                      </View>

                      <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <TrashIcon color="red" />
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            ))
          : ""}
      </ScrollView>

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
          <View style={{ marginBottom: 8 }}>
            <Text className="text-center text-neutral-800 text-2xl font-bold leading-[28.80px]">
              Remove from Cart?
            </Text>
          </View>

          {/* Border */}

          <View className="w-[380px] h-[0px] justify-center items-center inline-flex mt-4">
            <View className="w-[380px] h-[0px] border border-zinc-100"></View>
          </View>

          {/* Product */}

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
                </View>
              </View>
            </View>
          </View>

          {/* Border */}

          <View className="w-[380px] h-[0px] justify-center items-center inline-flex mt-4">
            <View className="w-[380px] h-[0px] border border-zinc-100"></View>
          </View>

          <View className="flex-row justify-between  items-center mt-5">
            <View className=" w-[184px] px-5 py-3 rounded-3xl bg-emerald-50 shadow  space-x-3">
              <Text className="text-emerald-500 text-base font-bold  text-center leading-snug tracking-tight">
                Cancel
              </Text>
            </View>
            <View className=" w-[184px] px-5 py-3 rounded-3xl bg-emerald-50 shadow  space-x-3   group-hover:bg-emerald-500 group-hover:text-white">
              <Text className="text-emerald-500 text-base font-bold  text-center leading-snug tracking-tight">
                Yes, Remove
              </Text>
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </SafeAreaView>
  );
};

export default Cartscreen;
