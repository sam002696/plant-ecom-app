import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import { HeartIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import { UrlBuilder } from "../../helpers/UrlBuilder";

const ProductCard = () => {
  const { plantList = { data: {} } } = useSelector(selectApi);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      callApi({
        operationId: UrlBuilder.plantApiLocalhost(`plant/list?page=1&size=10`),
        output: "plantList",
        storeName: "plantList",
      })
    );
  }, [dispatch]);

  return (
    <>
      {plantList?.data && plantList?.data.length > 0
        ? plantList?.data.slice(0, 3).map((row, index) => (
            <View className="flex-row mb-4 px-2" key={index}>
              <Pressable
                onPress={() =>
                  navigation.navigate("ProductDetails", { id: row.id })
                }
                className="gap-3 mt-5"
              >
                <View className="w-60 h-60 relative">
                  <View className="absolute w-full h-full bg-gray-50 rounded-3xl shadow-md" />

                  {/* Image container with rounded corners */}
                  <View className="justify-center items-center w-full h-full rounded-3xl overflow-hidden">
                    <Image
                      className="w-full h-full"
                      source={{ uri: row.plantImageUrl }}
                      style={{ resizeMode: "cover" }} // Ensures the image covers its container properly
                    />
                  </View>
                  <View className="w-6 h-6 px-[2.50px] py-[3px] left-[196px] top-[20px] absolute justify-center items-center inline-flex">
                    <View className="w-[19px] h-[18px] relative">
                      <HeartIcon color="#01B763" />
                    </View>
                  </View>
                </View>
                <View className="self-stretch flex-col justify-start items-start gap-3 flex">
                  <Text className="self-stretch text-neutral-800 text-2xl font-bold  leading-[28.80px]">
                    {row.plantName}
                  </Text>

                  <View className="flex-row space-x-3 items-center justify-center">
                    <View>
                      <StarIcon color="#01B763" fill="#01B763" />
                    </View>

                    <Text className="text-zinc-600 text-base font-medium">
                      {row.rating}
                    </Text>
                    <Text className="text-zinc-600 text-base font-medium">
                      |
                    </Text>
                    <View className="px-2.5 py-1.5 rounded-md border border-emerald-500 ">
                      <Text className="text-emerald-500 text-[10px] font-semibold tracking-tight">
                        {row.sold} Sold
                      </Text>
                    </View>
                  </View>

                  <Text className="self-stretch text-emerald-500 text-2xl font-bold  leading-[28.80px]">
                    ${row.price}
                  </Text>
                </View>
              </Pressable>
            </View>
          ))
        : ""}
    </>
  );
};

export default ProductCard;
