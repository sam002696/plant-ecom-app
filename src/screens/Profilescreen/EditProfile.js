import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";
import { UrlBuilder } from "../../helpers/UrlBuilder";
import * as Yup from "yup";
import { callApi, clearState, selectApi } from "../../reducers/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { AuthUser } from "../../helpers/AuthUser";

const EditProfile = () => {
  const {
    userUpdate = {
      data: {},
    },
  } = useSelector(selectApi);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleImagePicker = async (setFieldValue) => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setFieldValue("profileImage", result.assets[0].uri);
    }
  };

  useEffect(() => {
    const handleUserUpdateData = async () => {
      // If the user logs in successfully (based on accessToken), save the login data
      if (userUpdate?.status === "success") {
        try {
          await AuthUser.saveUserData(userUpdate?.data); // Save data to AuthUser
          dispatch(
            clearState({
              output: "userUpdate",
            })
          );
          navigation.navigate("Profile");
        } catch (error) {
          console.error("Error saving login data:", error);
        }
      }
    };

    handleUserUpdateData();
  }, [userUpdate]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="mt-10">
        {/* Header Section */}
        <View className="flex-row justify-between items-center mx-3">
          <View className="flex-row space-x-2 items-center">
            <ChevronLeftIcon
              onPress={() => navigation.goBack()}
              size={30}
              font="bold"
              color="black"
            />
            <Text className="text-neutral-800 text-2xl font-bold leading-[28.80px]">
              Edit Profile
            </Text>
          </View>
        </View>

        {/* Fields */}
        <Formik
          initialValues={{
            name: "",
            email: "",
            phoneNo: "",
            profileImage: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            const data = new FormData();
            const userInfo = {
              name: values.name,
              email: values.email,
              phoneNumber: values.phoneNo,
            };

            data.append("userInfo", JSON.stringify(userInfo));

            if (values.profileImage) {
              data.append("profileImage", {
                uri: values.profileImage,
                type: "image/jpeg",
                name: `profile_${Date.now()}.jpg`,
              });
            }

            dispatch(
              callApi({
                operationId: UrlBuilder.plantApiLocalhost("user/update"),
                output: "userUpdate",
                parameters: {
                  method: "PUT",
                  body: data,
                  hasFile: true,
                },
              })
            );
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <View
              className="flex-1 bg-white px-8 pt-8 mt-20"
              style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
            >
              <View className="form space-y-2">
                {/* Name Field */}
                <Text className="text-gray-700 ml-4">Name</Text>
                <TextInput
                  className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  placeholder="Enter your name"
                  autoCapitalize="none"
                />
                {touched.name && errors.name && (
                  <Text style={{ color: "red", marginLeft: 16 }}>
                    {errors.name}
                  </Text>
                )}

                {/* Email Field */}
                <Text className="text-gray-700 ml-4">Email Address</Text>
                <TextInput
                  className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="Enter your email"
                  autoCapitalize="none"
                />
                {touched.email && errors.email && (
                  <Text style={{ color: "red", marginLeft: 16 }}>
                    {errors.email}
                  </Text>
                )}

                {/* Phone Number Field */}
                <Text className="text-gray-700 ml-4">Phone No</Text>
                <TextInput
                  className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                  onChangeText={handleChange("phoneNo")}
                  onBlur={handleBlur("phoneNo")}
                  value={values.phoneNo}
                  placeholder="Enter your Phone No"
                />
                {touched.phoneNo && errors.phoneNo && (
                  <Text style={{ color: "red", marginLeft: 16 }}>
                    {errors.phoneNo}
                  </Text>
                )}

                {/* Profile Image Field */}
                <Text className="text-gray-700 ml-4">Profile Image</Text>
                <TouchableOpacity
                  className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                  onPress={() => handleImagePicker(setFieldValue)}
                >
                  <Text className="text-center text-gray-700">Choose File</Text>
                </TouchableOpacity>
                {values.profileImage ? (
                  <Image
                    source={{ uri: values.profileImage }}
                    style={{ width: 100, height: 100, alignSelf: "center" }}
                  />
                ) : null}
              </View>

              <TouchableOpacity
                className="py-3 bg-green-400 rounded-xl mt-10"
                onPress={handleSubmit}
              >
                <Text className="font-xl font-bold text-center text-gray-700">
                  Update Profile
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
