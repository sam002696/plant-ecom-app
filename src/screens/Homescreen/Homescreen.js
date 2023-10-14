import { ScrollView, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import SpecialOffer from "./SpecialOffer";
import MostPopular from "./MostPopular";

const Homescreen = () => {
  return (
    <View className="bg-white flex-1">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14 mx-4"
      >
        {/* Avatar and bell icon */}
        <Banner />
        {/* Search Bar */}
        <SearchBar />
        {/* Special Offer */}
        <SpecialOffer />
        {/* Most Popular */}
        <MostPopular />
      </ScrollView>
    </View>
  );
};

export default Homescreen;
