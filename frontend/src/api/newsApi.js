import axiosClient from "./axiosClient";

const newsApi = {
  getAll: () => {
    return axiosClient.get("/news");
  },
  getById: (id) => {
    return axiosClient.get(`/news/${id}`);
  },
  create: (data) => {
    return axiosClient.post("/news", data);
  },
  update: (id, data) => {
    return axiosClient.put(`/news/${id}`, data);
  },
  remove: (id) => {
    return axiosClient.delete(`/news/${id}`);
  },
};

export default newsApi;
