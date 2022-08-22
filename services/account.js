import axios from "axios";

const base = axios.create({ baseURL: "http://172.20.10.1:1337" });

const AccountServices = {
  createAccount(body) {
    return base.post("/account", body);
  },

  login(body) {
    return base.post("/account/login", body);
  },
};

export default AccountServices;
