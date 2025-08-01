import axios from 'axios';
// Tạo instance axios với baseURL là backend của bạn
const api = axios.create({
    baseURL: 'http://localhost:3000', // ← Địa chỉ NestJS backend
});

// Interceptor: Tự động thêm Bearer Token vào mọi request nếu có
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Interceptor: Xử lý lỗi toàn cục (tùy chọn)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Nếu token hết hạn hoặc sai, logout
            localStorage.removeItem('token');
            window.location.href = '/login'; // Chuyển về trang login
        }
        return Promise.reject(error);
    }
);

export default api;