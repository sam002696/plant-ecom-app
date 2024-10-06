import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  EllipsisHorizontalCircleIcon,
} from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

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

const shippingOptions = [
  {
    id: "economy",
    name: "Economy",
    price: "$10",
    estimatedArrival: "Dec 20-23",
    image: require("../../../assets/images/shipping/shipping_econ.png"),
  },
  {
    id: "regular",
    name: "Regular",
    price: "$15",
    estimatedArrival: "Dec 18-20",
    image: require("../../../assets/images/shipping/shipping_regular.png"),
  },
  {
    id: "cargo",
    name: "Cargo",
    price: "$20",
    estimatedArrival: "Dec 17-19",
    image: require("../../../assets/images/shipping/shipping_cargo.png"),
  },
];

const ShippingAddressScreen = () => {
  const navigation = useNavigation();

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    shippingOption: Yup.string().required("Please select a shipping option"),
  });

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
                Shipping Address
              </Text>
            </View>
          </View>
          <View>
            <EllipsisHorizontalCircleIcon size={25} color="black" />
          </View>
        </View>

        {/* Formik Implementation */}
        <Formik
          initialValues={{ shippingOption: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Handle form submission, e.g., navigate or apply the shipping value
            console.log("Selected Shipping:", values.shippingOption);
          }}
        >
          {({ values, handleSubmit, setFieldValue, errors, touched }) => (
            <>
              {shippingOptions.map((option) => (
                <View
                  key={option.id}
                  className="mt-5 p-5 rounded-3xl bg-white shadow-sm mx-6"
                >
                  <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center space-x-3">
                      <Image
                        className="w-12 h-12 rounded-full"
                        source={option.image}
                      />
                      <View>
                        <Text className="text-neutral-800 text-lg font-bold leading-snug">
                          {option.name}
                        </Text>
                        <Text className="text-zinc-600 text-sm font-medium leading-tight tracking-tight">
                          Estimated Arrival, {option.estimatedArrival}
                        </Text>
                      </View>
                    </View>

                    <View className="flex flex-row items-center">
                      <Text className="text-lg font-bold text-green-500 mr-2">
                        {option.price}
                      </Text>

                      {/* Custom Radio Button */}
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

              {/* Apply Button */}
              <TouchableOpacity
                onPress={handleSubmit}
                className="mt-8 p-4 bg-green-500 mx-6 rounded-xl"
              >
                <Text className="text-white text-lg font-bold text-center">
                  Apply
                </Text>
              </TouchableOpacity>
            </>
          )}
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
