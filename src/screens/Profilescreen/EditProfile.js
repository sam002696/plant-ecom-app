import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

const EditProfile = () => {
  const { control, handleSubmit, setValue, formState } = useForm();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // Initialize with null
  const [showGenderPicker, setShowGenderPicker] = useState(false);

  const onDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setValue("dateOfBirth", date);
      setSelectedDate(date);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const showGenderPickerHandler = () => {
    setShowGenderPicker(true);
  };

  const hideGenderPickerHandler = () => {
    setShowGenderPicker(false);
  };

  const toggleGenderPicker = () => {
    setShowGenderPicker(!showGenderPicker);
  };

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  const navigation = useNavigation();

  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (itemValue) => {
    setSelectedGender(itemValue);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="mt-10">
        {/* Header Section */}
        <View className="flex-row  justify-between items-center mx-3">
          <View className="flex-row space-x-2 items-center">
            <View>
              <ChevronLeftIcon
                onPress={() => navigation.goBack()}
                size={30}
                font="bold"
                color="black"
              />
            </View>
            <Text className="text-neutral-800 text-2xl font-bold leading-[28.80px] ">
              Edit Profile
            </Text>
          </View>
        </View>

        {/* Fields */}

        <View className="mx-3 mt-8">
          <View>
            <Controller
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <TextInput
                    onChangeText={field.onChange}
                    value={field.value}
                    onBlur={field.onBlur}
                    placeholder="Kamal Hasan"
                    className="bg-gray-50 p-3 rounded-lg placeholder:text-black shadow-sm"
                  />
                  {fieldState.error && <Text>{fieldState.error.message}</Text>}
                </>
              )}
              name="fullName"
              rules={{ required: "Full Name is required" }}
            />

            <Controller
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <TextInput
                    onChangeText={field.onChange}
                    value={field.value}
                    onBlur={field.onBlur}
                    placeholder="Kamal "
                    className="bg-gray-50 p-3 rounded-lg placeholder:text-black shadow-sm mt-5"
                  />
                  {fieldState.error && <Text>{fieldState.error.message}</Text>}
                </>
              )}
              name="nickName"
              rules={{ required: "Full Name is required" }}
            />

            {/* Date of Birth */}

            <Controller
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <TextInput
                    onFocus={showDatepicker}
                    value={
                      selectedDate ? selectedDate.toLocaleDateString() : ""
                    }
                    placeholder="Select Date of Birth"
                    className="bg-gray-50 p-3 rounded-lg placeholder:text-black shadow-sm mt-5"
                  />
                  {fieldState.error && <Text>{fieldState.error.message}</Text>}
                </>
              )}
              name="dateOfBirth"
              rules={{ required: "Date of Birth is required" }}
            />
          </View>

          {/* Date Picker */}
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate || new Date()} // Use selectedDate or default to current date
              mode="date"
              display="spinner"
              onChange={onDateChange}
            />
          )}

          <Controller
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextInput
                  onChangeText={field.onChange}
                  value={field.value}
                  onBlur={field.onBlur}
                  placeholder="Enter your email "
                  className="bg-gray-50 p-3 rounded-lg placeholder:text-black shadow-sm mt-5"
                />
                {fieldState.error && <Text>{fieldState.error.message}</Text>}
              </>
            )}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            }}
          />

          <Controller
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TextInput
                  onChangeText={field.onChange}
                  value={field.value}
                  onBlur={field.onBlur}
                  placeholder="Tel No "
                  className="bg-gray-50 p-3 rounded-lg placeholder:text-black shadow-sm mt-5"
                  inputMode="tel"
                />
                {fieldState.error && <Text>{fieldState.error.message}</Text>}
              </>
            )}
            name="telNo"
            rules={{ required: "Full Name is required" }}
          />

          {/* Gender */}
          {/* <Controller
            control={control}
            render={({ field, fieldState }) => (
              <>
                <TouchableWithoutFeedback
                  onPress={toggleGenderPicker}
                  style={{ position: "relative", marginTop: 5 }}
                >
                  <TextInput
                    //   onFocus={toggleGenderPicker}
                    editable={false}
                    placeholder="Select Gender"
                    value={field.value}
                    className="bg-gray-50 p-3 rounded-lg placeholder:text-black shadow-sm mt-5"
                  />
                </TouchableWithoutFeedback>
                {showGenderPicker && (
                  <Picker
                    selectedValue={field.value}
                    onValueChange={(itemValue) => {
                      setValue("gender", itemValue);
                      toggleGenderPicker();
                    }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      opacity: 0,
                    }}
                  >
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                  </Picker>
                )}
                {fieldState.error && <Text>{fieldState.error.message}</Text>}
              </>
            )}
            name="gender"
            rules={{ required: "Gender is required" }}
          /> */}

          {/* <View>
            <Text>Select Gender:</Text>
            <Picker
              selectedValue={selectedGender}
              onValueChange={handleGenderChange}
              style={{ height: 50, width: 200 }}
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              Add more gender options as needed
            </Picker>
            {selectedGender !== "" && (
              <Text>Selected Gender: {selectedGender}</Text>
            )}
          </View> */}

          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
