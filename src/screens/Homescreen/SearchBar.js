import { TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const SearchBar = () => {
  return (
    <View className="flex-row items-center rounded-2xl bg-black/5 p-[6px] mt-5">
      <TouchableOpacity className=" p-3">
        <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
      </TouchableOpacity>
      <TextInput
        placeholder="Search"
        placeholderTextColor={"gray"}
        className="flex-1 text-base mb-1 pl-0.5 tracking-wider"
      />
    </View>
  );
};

export default SearchBar;
