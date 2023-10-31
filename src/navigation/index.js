import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/AntDesign";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Homescreen from "../screens/Homescreen/Homescreen";
import ProfileScreen from "../screens/Profilescreen/Profilescreen";
import Cartscreen from "../screens/Cartscreen/Cartscreen";
import Orderscreen from "../screens/Orderscreen/Orderscreen";
import Walletscreen from "../screens/Walletscreen/Walletscreen";
import ProductDetailsscreen from "../screens/ProductDetailsScreen/ProductDetails";
import CheckoutScreen from "../screens/CheckoutScreen/CheckoutScreen";

// Screen names
const homeName = "Home";
const profileName = "Profile";
const cartName = "Cart";
const orderName = "Orders";
const walletName = "Wallet";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home";
          } else if (rn === cartName) {
            iconName = focused ? "cloudo" : "cloudo";
          } else if (rn === orderName) {
            iconName = focused ? "shoppingcart" : "shoppingcart";
          } else if (rn === walletName) {
            iconName = focused ? "wallet" : "wallet";
          } else if (rn === profileName) {
            iconName = focused ? "user" : "user";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: true, // Hide labels
        activeTintColor: "#01B763",
        inactiveTintColor: "#9E9E9E",
        tabStyle: { paddingVertical: 10, paddingHorizontal: 20, height: 70 }, // Add padding to icons
      }}
    >
      <Tab.Screen name={homeName} component={Homescreen} />
      <Tab.Screen name={cartName} component={Cartscreen} />
      <Tab.Screen name={orderName} component={Orderscreen} />
      <Tab.Screen name={walletName} component={Walletscreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
