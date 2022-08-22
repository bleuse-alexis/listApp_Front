import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Login";
import Signin from "./Signin";

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = ({ navigation }) => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Signin" component={Signin} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
