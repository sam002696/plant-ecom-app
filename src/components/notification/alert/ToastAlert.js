import * as React from "react";
import { useSelector } from "react-redux";
import { selectToastAlert } from "../../../reducers/toastAlertSlice";
import ToastManager, { Toast } from "toastify-react-native";
import { StyleSheet } from "react-native";

const ToastAlert = () => {
  const { type, message } = useSelector(selectToastAlert);

  // Ensure both type and message are valid
  if (type && message) {
    const options = {
      style: styles.smallToast, // Apply custom style for smaller size
    };

    switch (type) {
      case "info":
        Toast.info(message, options);
        break;
      case "success":
        Toast.success(message, options);
        break;
      case "warning":
        Toast.warning(message, options);
        break;
      case "warn":
        Toast.warn(message, options);
        break;
      case "error":
        Toast.error(message, options);
        break;
      case "dark":
        Toast.dark(message, options);
        break;
      case "basic":
      default:
        Toast(message, options);
    }
  }

  return <ToastManager />;
};

const styles = StyleSheet.create({
  smallToast: {
    fontSize: 5, // Make the text smaller
    padding: 8, // Adjust padding to reduce overall size
  },
});

export default ToastAlert;
