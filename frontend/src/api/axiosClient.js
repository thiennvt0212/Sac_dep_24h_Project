import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:4000/api/v1', // URL backend NestJS
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor request (thêm token nếu có)
axiosClient.interceptors.request.use(config => {
  // const token = localStorage.getItem('token');
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Interceptor response (xử lý lỗi)
axiosClient.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);

export default axiosClient;
