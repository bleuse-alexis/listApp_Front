import React from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import AddProduct from "../screens/AddProduct";
import ProductList from "../screens/ProductList";
import Profile from "../screens/Profile";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#6CCFF6",

          height: 70,
        },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#397367",
      }}
    >
      <Tab.Screen
        name="ProductList"
        component={ProductList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="AddProduct"
        component={AddProduct}
        options={{
          unmountOnBlur: true,

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="scan-circle-outline" color={color} size={size} />
          ),
          tabBarIconStyle: {
            top: -30,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
            borderRadius: 35,
            width: 70,
            height: 70,
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
