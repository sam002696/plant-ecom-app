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

const shippingAddress = [
  {
    id: "home",
    name: "Home",
    address: "61480 Sunbrook Park",
    zipCode: "PC 5679",

    image: require("../../../assets/images/shipping/locationIcon.png"),
  },
  {
    id: "office",
    name: "Office",
    address: "6993 Meadow Valley Terra",
    zipCode: "PC 3637",

    image: require("../../../assets/images/shipping/locationIcon.png"),
  },
  {
    id: "apartment",
    name: "Apartment",
    address: "21833 Clyde Gallagher",
    zipCode: "PC 4662",

    image: require("../../../assets/images/shipping/locationIcon.png"),
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
              {shippingAddress.map((option) => (
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
                          {option.address}, {option.zipCode}
                        </Text>
                      </View>
                    </View>

                    <View className="flex flex-row items-center">
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
