import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const base = axios.create({ baseURL: "http://192.168.1.5:1337" });

const createAccount = async (body) => {
  return base.post("/account", body);
};

const login = async (body) => {
  return base.post("/account/login", body);
};

const getUserId = async () => {
  const body = { token: await AsyncStorage.getItem("userToken") };
  return base.post("/account/getCurrentUser", body);
};

const AccountServices = { createAccount, login, getUserId };

export default AccountServices;
