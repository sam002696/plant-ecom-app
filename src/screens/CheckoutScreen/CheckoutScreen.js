import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ArrowLongRightIcon,
  ChevronRightIcon,
  EllipsisHorizontalCircleIcon,
  MapPinIcon,
  MinusIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  PlusIcon,
  TrashIcon,
  TruckIcon,
} from "react-native-heroicons/outline";

const CheckoutScreen = () => {
  const navigation = useNavigation();
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
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center space-x-3">
              <MapPinIcon size={25} color="green" />
              <View>
                <Text className="text-neutral-800 text-lg font-bold leading-snug">
                  Home
                </Text>
                <Text className="text-zinc-600 text-sm font-medium  leading-tight tracking-tight">
                  61480 Sunbrook Park, PC 5679
                </Text>
              </View>
            </View>
            <View>
              <PencilSquareIcon size={25} color="green" />
            </View>
          </View>
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
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center space-x-3">
              <TruckIcon size={25} color="green" />
              <View>
                <Text className="text-neutral-800 text-lg font-bold leading-snug">
                  Choose Shipping Type
                </Text>
              </View>
            </View>
            <View>
              <ChevronRightIcon size={25} color="green" />
            </View>
          </View>
        </View>

        {/* Promo Code */}

        <View className="mt-5 mx-6">
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
        </View>

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
                $250
              </Text>
              <Text>-</Text>
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
              <Text>-</Text>
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
