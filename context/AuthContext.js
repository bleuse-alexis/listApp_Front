import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AccountServices from "../services/account";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState();

  const login = (body) => {
    setIsLoading(true);
    AccountServices.login(body)
      .then((res) => {
        console.log(res.data.jwt);
        setUserToken(res.data.jwt);

        AsyncStorage.setItem("userToken", res.data.jwt);
        userID();
      })
      .catch((e) => {
        console.log(e);
      });
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      if (userToken) {
        setUserToken(userToken);
        userID();
      }
      setIsLoading(false);
    } catch (e) {
      console.log(` isLogged in error ${e}`);
    }
  };

  const userID = async () => {
    AccountServices.getUserId()
      .then((result) => setUserId(result.data._id))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, isLoading, userToken, userId }}
    >
      {children}
    </AuthContext.Provider>
  );
};
