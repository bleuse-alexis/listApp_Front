import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

const AuthStack = createStackNavigator();

const AuthStackScreen = ({ navigation }) => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{ headerShown: false }}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
