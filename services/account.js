import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const base = axios.create({ baseURL });

const AccountServices = {
  createAccount(body) {
    return base.post("/account", body);
  },

  login(body) {
    return base.post("/account/login", body);
  },
};

export default AccountServices;
