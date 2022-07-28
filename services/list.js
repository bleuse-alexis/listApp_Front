import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const base = axios.create({ baseURL });

const ListServices = {
  createList(body) {
    return base.post("/list", body);
  },

  addArticle(id, body) {
    return base.put(`List/${id}`, body);
  },
};

export default ListServices;
