import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ArrowLongRightIcon,
  ChevronRightIcon,
  EllipsisHorizontalCircleIcon,
  MapPinIcon,
  PencilSquareIcon,
  TruckIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import { initializeCart, selectCart } from "../../reducers/cartSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ShippingType } from "../../utilities/ShippingType";

const CheckoutScreen = () => {
  const navigation = useNavigation();

  const [shippingType, setShippingType] = useState();
  const [shippingAddress, setShippingAddress] = useState();

  const dispatch = useDispatch();
  const { items } = useSelector(selectCart);

  useEffect(() => {
    dispatch(initializeCart());
  }, [dispatch]);

  useFocusEffect(
    React.useCallback(() => {
      const getSelectedShippingOption = async () => {
        try {
          const option = await AsyncStorage.getItem("selectedShippingOption");
          if (option !== null) {
            setShippingType(ShippingType(option));
          }
        } catch (error) {
          console.error("Error retrieving shipping option", error);
        }
      };
      getSelectedShippingOption();
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      const getSelectedShippingAddress = async () => {
        try {
          const option = await AsyncStorage.getItem("selectedShippingAddress");
          if (option !== null) {
            setShippingAddress(option ? JSON.parse(option) : null);
          }
        } catch (error) {
          console.error("Error retrieving shipping option", error);
        }
      };
      getSelectedShippingAddress();
    }, [])
  );

  return (
    <SafeAreaView className=" flex-1 bg-gray-50 ">
      <ScrollView showsVerticalScrollIndicator={false} className="">
        {/* Header Part */}

        <View className="flex-row justify-between items-center mt-8 mx-6">
          <View className="flex-row justify-start items-center space-x-3">
            <View className=" ">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftIcon size={25} color="black" />
              </TouchableOpacity>
            </View>
            <View>
              <Text className=" text-neutral-800 text-2xl font-bold  leading-[28.80px]">
                Checkout
              </Text>
            </View>
          </View>
          <View>
            <EllipsisHorizontalCircleIcon size={25} color="black" />
          </View>
        </View>

        {/* Shipping Address Section */}

        <View className="mt-10 mx-6">
          <Text className=" text-neutral-800 text-xl font-bold leading-normal">
            Shipping Address
          </Text>
        </View>

        {/* Shipping Addresses */}

        <View className=" mt-5 p-5 rounded-3xl bg-white shadow-md mx-6">
          <Pressable onPress={() => navigation.navigate("ShippingAddress")}>
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center space-x-3">
                <MapPinIcon size={25} color="green" />
                <View>
                  <Text className="text-neutral-800 text-lg font-bold leading-snug">
                    {shippingAddress?.addressType}
                  </Text>
                  <Text className="text-zinc-600 text-sm font-medium  leading-tight tracking-tight">
                    {shippingAddress?.streetAddress}, {shippingAddress?.zipcode}
                  </Text>
                </View>
              </View>
              <View>
                <PencilSquareIcon size={25} color="green" />
              </View>
            </View>
          </Pressable>
        </View>

        {/* Border */}

        <View className="w-[380px] h-[0px] justify-center items-center inline-flex mt-4 mx-6">
          <View className="w-[380px] h-[0px] border border-zinc-100"></View>
        </View>

        {/* Order List */}

        <View className="mt-5 mx-6">
          <Text className=" text-neutral-800 text-xl font-bold leading-normal">
            Order List
          </Text>
        </View>

        {/* Orders */}

        {items && items.length > 0
          ? items.map((row, index) => (
              <View
                key={row.id}
                className=" rounded-[32px] my-2 bg-white shadow-sm mx-3"
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
                  <View className="space-y-2">
                    <Text className=" text-neutral-800 text-lg font-bold leading-snug">
                      {row.plantName}
                    </Text>
                    <Text className=" text-emerald-500 text-lg font-bold  leading-snug">
                      ${row.price}
                    </Text>
                    <View className="flex-row items-center justify-between  w-48 mt-1">
                      <View className="flex-row space-x-3 items-center bg-stone-50 shadow-sm px-3 py-1 rounded-3xl">
                        <Text className=" text-emerald-500 text-sm font-bold leading-snug">
                          {row.quantity}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ))
          : ""}

        {/* Border */}

        <View className="w-[380px] h-[0px] justify-center items-center inline-flex mt-4 mx-6">
          <View className="w-[380px] h-[0px] border border-zinc-100"></View>
        </View>

        {/* Choose Shipping */}

        <View className="mt-5 mx-6">
          <Text className=" text-neutral-800 text-xl font-bold leading-normal">
            Choose Shipping
          </Text>
        </View>

        <View className=" mt-5 p-5 rounded-3xl bg-white shadow-md mx-6">
          <Pressable onPress={() => navigation.navigate("ShippingType")}>
            <View className="flex-row justify-between items-center">
              <View className="flex flex-row items-center">
                <TruckIcon size={25} color="green" />

                {shippingType ? (
                  <>
                    <View className="ml-3">
                      <Text className="text-neutral-800 text-lg font-bold leading-snug">
                        {shippingType.name}
                      </Text>
                      <Text className="text-zinc-600 text-sm font-medium leading-tight tracking-tight">
                        Estimated Arrival, {shippingType.estimatedArrival}
                      </Text>
                    </View>
                  </>
                ) : (
                  <>
                    <Text className="text-neutral-800 text-lg font-bold leading-snug">
                      Choose Shipping Type
                    </Text>
                  </>
                )}
              </View>
              <View className="flex flex-row items-center">
                <Text className="text-lg font-bold text-green-500 mr-2">
                  ${shippingType?.price}
                </Text>
                <View>
                  <ChevronRightIcon size={25} color="green" />
                </View>
              </View>
            </View>
          </Pressable>
        </View>

        {/* Promo Code */}

        {/* <View className="mt-5 mx-6">
          <Text className=" text-neutral-800 text-xl font-bold leading-normal">
            Promo Code
          </Text>
        </View>

        <View className="flex-row justify-between items-center mx-6">
          <View className="rounded-2xl bg-black/5  mt-5 p-3 w-[312px]">
            <TextInput
              placeholder="Enter Promo Code"
              placeholderTextColor={"gray"}
              className="flex-1  mb-1 pl-0.5 text-neutral-400 text-sm font-normal leading-tight tracking-tight"
            />
          </View>
          <View className="mt-4">
            <PlusCircleIcon size={45} color="green" />
          </View>
        </View> */}

        {/* Bill */}

        <View className="bg-white mx-6 mt-5 p-5 rounded-xl shadow-md">
          <View className="flex-row justify-between items-center">
            <View className="space-y-3">
              <Text className="text-zinc-600 text-sm font-medium  leading-tight tracking-tight">
                Amount
              </Text>
              <Text className="text-zinc-600 text-sm font-medium  leading-tight tracking-tight">
                Shipping
              </Text>
            </View>
            <View className="space-y-3">
              <Text className=" text-right text-neutral-700 text-base font-semibold  leading-snug tracking-tight">
                ${items.reduce((sum, item) => sum + item?.price, 0)}
              </Text>
              <Text className="text-end">${shippingType?.price}</Text>
            </View>
          </View>

          <View className="w-[332px] h-[0px] justify-center items-center inline-flex mt-5">
            <View className="w-[332px] h-[0px] border border-zinc-100"></View>
          </View>

          <View className="flex-row justify-between items-center mt-4">
            <View className="">
              <Text className="text-zinc-600 text-sm font-medium  leading-tight tracking-tight">
                Total
              </Text>
            </View>
            <View className="">
              <Text>
                $
                {items.reduce((sum, item) => sum + item?.price, 0) +
                  shippingType?.price}
              </Text>
            </View>
          </View>
        </View>

        {/* Continue to Payment Button */}

        <View className="w-[380px] mx-auto my-6">
          <Pressable
            // onPress={() => navigation.navigate("Checkout")}
            className=" p-3 rounded-3xl bg-emerald-500 shadow flex-row justify-center items-center space-x-3"
          >
            <Text className=" text-white text-base font-bold  leading-snug tracking-tight">
              Continue to Payment
            </Text>
            <View className="">
              <ArrowLongRightIcon color="white" height={30} width={30} />
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
