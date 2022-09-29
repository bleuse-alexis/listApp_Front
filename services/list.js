import axios from "axios";

const base = axios.create({ baseURL: "http://172.20.10.1:1337" });

const ListServices = {
  createList(body) {
    return base.post("/list", body);
  },

  addArticle(id, body) {
    return base.put(`/list/${id}`, body);
  },

  getList(body) {
    return base.post(`/list/getList`, body);
  },

  deleteList(body) {
    return base.post(`/list/delete`, body);
  },

  updateList(id, body) {
    return base.post(`/list/update/${id}`, body);
  },
};

export default ListServices;
