import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackScreen from "./AuthStack";
import { AuthContext } from "../context/AuthContext";
import AddProduct from "../screens/AddProduct";

const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <AddProduct /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default AppNav;
