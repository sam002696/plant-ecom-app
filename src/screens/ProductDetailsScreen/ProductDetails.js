import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import { UrlBuilder } from "../../helpers/UrlBuilder";
import { callApi, selectApi } from "../../reducers/apiSlice";
import { addToCart } from "../../reducers/cartSlice";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const { loading, plantInfo = { data: {} } } = useSelector(selectApi);

  const { id } = route.params;

  useEffect(() => {
    dispatch(
      callApi({
        operationId: UrlBuilder.plantApiLocalhost(`plant/${id}`),
        output: "plantInfo",
        storeName: "plantInfo",
      })
    );
  }, [dispatch, id]);

  const handleAddToCart = () => {
    const price = plantInfo?.data.price;
    dispatch(
      addToCart({
        id: plantInfo?.data?.id,
        plantName: plantInfo?.data?.plantName,
        plantImageUrl: plantInfo?.data?.plantImageUrl,
        price, // pass the unit price directly
        quantity, // pass the quantity separately
      })
    );
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#01B763" />
      </View>
    );
  }

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView showsVerticalScrollIndicator={false} className="mx-6">
        <View className="flex-row justify-start">
          <View className="">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftIcon size={25} color="black" />
            </TouchableOpacity>
          </View>
          <Image
            className="w-[350px] h-[500px] my-5 rounded-xl shadow-md"
            source={{ uri: plantInfo?.data?.plantImageUrl }}
          />
        </View>

        <View className="flex-col space-y-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-neutral-800 text-[32px] font-bold leading-[38.40px]">
              {plantInfo?.data?.plantName}
            </Text>
            <View>
              <HeartIcon size={30} color="#01B763" />
            </View>
          </View>

          <View className="flex-row space-x-5 items-center">
            <View className="px-2.5 py-1.5 bg-emerald-100  rounded-md justify-center items-center  ">
              <Text className="text-emerald-500 text-[10px] font-semibold  tracking-tight">
                {plantInfo?.data?.sold} Sold
              </Text>
            </View>

            <Text>
              <StarIcon color="#01B763" fill="#01B763" />
            </Text>
            <Text className="text-neutral-700 text-sm font-medium  leading-tight tracking-tight">
              {/* 4.9 (4.749 reviews) */}
            </Text>
          </View>
        </View>

        {/* Border */}

        <View className="w-[380px] h-[0px] justify-center items-center inline-flex mt-4">
          <View className="w-[380px] h-[0px] border border-zinc-100"></View>
        </View>

        {/* Description */}

        <View className="flex-col space-y-2 mt-5">
          <Text className="text-neutral-800 text-lg font-bold  leading-snug">
            Description
          </Text>
          <Text className="text-neutral-700 text-sm font-normal leading-tight tracking-tight">
            {plantInfo?.data?.plantDesc}
          </Text>
        </View>

        {/* Quantity */}
        <View className="flex-row items-center space-x-5 mt-5">
          <View>
            <Text className="text-neutral-800 text-lg font-bold leading-snug">
              Quantity
            </Text>
          </View>
          <View className="flex-row space-x-3 items-center bg-stone-50 shadow-sm px-3 py-2 rounded-3xl">
            <TouchableOpacity onPress={handleDecreaseQuantity}>
              <MinusIcon color="#01B763" />
            </TouchableOpacity>
            <Text className=" text-emerald-500 text-lg font-bold leading-snug">
              {quantity}
            </Text>
            <TouchableOpacity onPress={handleIncreaseQuantity}>
              <PlusIcon color="#01B763" />
            </TouchableOpacity>
          </View>
          <View className="bg-yellow-100 px-3 py-2 rounded-md shadow-sm">
            <Text className="text-yellow-500 font-semibold">
              {" "}
              {plantInfo?.data?.quantity > 0
                ? "In stock!"
                : "Out of stock!"}{" "}
            </Text>
          </View>
        </View>
        {/* Border */}

        <View className="w-[380px] h-[0px] justify-center items-center inline-flex mt-4">
          <View className="w-[380px] h-[0px] border border-zinc-100"></View>
        </View>

        {/* Total Price and Cart Button */}

        <View className="flex-row justify-between mt-5 items-center">
          <View className="space-y-1">
            <Text className="text-neutral-500 text-xs font-medium tracking-tight">
              Total
            </Text>
            <Text className="text-neutral-800 text-2xl font-bold leading-[28.80px]">
              ${plantInfo?.data?.price * quantity}
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleAddToCart}
            className="w-72 p-3 rounded-3xl bg-emerald-500 shadow flex-row justify-center items-center space-x-3"
          >
            <View className="">
              <ShoppingBagIcon color="white" height={30} width={30} />
            </View>
            <Text className=" text-white text-base font-bold  leading-snug tracking-tight">
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
