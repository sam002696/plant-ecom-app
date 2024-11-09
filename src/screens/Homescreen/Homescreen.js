import { ScrollView, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Banner from "./Banner";
import SearchBar from "./SearchBar";
import SpecialOffer from "./SpecialOffer";
import MostPopular from "./MostPopular";
import { AuthUser } from "../../helpers/AuthUser";
import { useFocusEffect } from "@react-navigation/native";

const Homescreen = () => {
  const [user, setUser] = useState(null);

  useFocusEffect(
    useCallback(() => {
      const fetchUserData = async () => {
        try {
          const userData = await AuthUser.getUserName(); // Await for user data
          console.log("userData", userData);
          setUser(userData); // Store user data in state
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }, [])
  );

  console.log("user home :>>", user);

  return (
    <View className="bg-white flex-1">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14 mx-4"
      >
        {/* Avatar and bell icon */}
        <Banner user={user} />
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
