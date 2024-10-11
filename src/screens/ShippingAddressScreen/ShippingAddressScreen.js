import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  EllipsisHorizontalCircleIcon,
} from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import { UrlBuilder } from "../../helpers/UrlBuilder";

// Custom radio button component
const CustomRadioButton = ({ selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.radioButtonContainer}>
      <View
        style={[
          styles.radioButton,
          { borderColor: selected ? "green" : "green" },
        ]}
      >
        {selected ? <View style={styles.radioButtonInnerCircle} /> : null}
      </View>
    </TouchableOpacity>
  );
};

const ShippingAddressScreen = () => {
  const { addressList = { data: [] }, loading } = useSelector(selectApi);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    shippingOption: Yup.string().required("Please select a shipping address"),
  });

  useEffect(() => {
    dispatch(
      callApi({
        operationId: UrlBuilder.plantApiLocalhost(`address/all`),
        output: "addressList",
        storeName: "addressList",
      })
    );
  }, [dispatch]);

  // Function to save the entire address object to AsyncStorage
  const saveShippingAddress = async (address) => {
    try {
      const addressString = JSON.stringify(address); // Convert the address object to a string
      await AsyncStorage.setItem("selectedShippingAddress", addressString);
      navigation.navigate("Checkout");
    } catch (error) {
      console.log("Error saving shipping address: ", error);
    }
  };

  // Function to get the saved shipping address from AsyncStorage
  const getSavedShippingAddress = async () => {
    try {
      const savedAddressString = await AsyncStorage.getItem(
        "selectedShippingAddress"
      );
      return savedAddressString ? JSON.parse(savedAddressString) : null; // Parse the string back to an object
    } catch (error) {
      console.log("Error retrieving saved shipping address: ", error);
      return null;
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
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Part */}
        <View className="flex-row justify-between items-center mt-8 mx-6">
          <View className="flex-row justify-start items-center space-x-3">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftIcon size={25} color="black" />
            </TouchableOpacity>
            <Text className="text-neutral-800 text-2xl font-bold leading-[28.80px]">
              Shipping Address
            </Text>
          </View>
          <EllipsisHorizontalCircleIcon size={25} color="black" />
        </View>

        {/* Formik Implementation */}
        <Formik
          initialValues={{ shippingOption: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const selectedAddress = addressList.data.find(
              (address) => address.id === values.shippingOption
            );
            console.log("Selected Address:", selectedAddress);
            await saveShippingAddress(selectedAddress); // Save the entire object
          }}
        >
          {({ values, handleSubmit, setFieldValue, errors, touched }) => {
            useEffect(() => {
              const fetchSavedAddress = async () => {
                const savedAddress = await getSavedShippingAddress();
                if (savedAddress) {
                  setFieldValue("shippingOption", savedAddress.id);
                }
              };
              fetchSavedAddress();
            }, []);

            return (
              <>
                {addressList?.data?.map((option) => (
                  <View
                    key={option.id}
                    className="mt-5 p-5 rounded-3xl bg-white shadow-sm mx-6"
                  >
                    <View className="flex-row justify-between items-center">
                      <View className="flex-row items-center space-x-3">
                        <Image
                          className="w-12 h-12 rounded-full"
                          source={require("../../../assets/images/shipping/locationIcon.png")}
                        />
                        <View>
                          <Text className="text-neutral-800 text-lg font-bold leading-snug">
                            {option.addressType}
                          </Text>
                          <Text className="text-zinc-600 text-sm font-medium leading-tight tracking-tight">
                            {option.streetAddress}, {option.zipcode}
                          </Text>
                        </View>
                      </View>

                      <View className="flex flex-row items-center">
                        <CustomRadioButton
                          selected={values.shippingOption === option.id}
                          onPress={() =>
                            setFieldValue("shippingOption", option.id)
                          }
                        />
                      </View>
                    </View>
                  </View>
                ))}

                {/* Error message */}
                {errors.shippingOption && touched.shippingOption ? (
                  <Text className="text-red-500 text-sm mx-6">
                    {errors.shippingOption}
                  </Text>
                ) : null}

                {/* Add new address Button */}
                <TouchableOpacity
                  onPress={handleSubmit}
                  className="mt-8 p-4 bg-green-500 mx-6 rounded-xl"
                >
                  <Text className="text-white text-lg font-bold text-center">
                    Add new address
                  </Text>
                </TouchableOpacity>
              </>
            );
          }}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShippingAddressScreen;

const styles = StyleSheet.create({
  radioButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "gray", // Default color
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonInnerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "green", // Green color for the selected state
  },
});
