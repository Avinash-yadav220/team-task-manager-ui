import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

api.interceptors.request.use((config) => {
  // Forcefully inject /api to prevent Axios stripping bugs
  if (!config.url.startsWith('/api')) {
    config.url = '/api' + config.url;
  }
  
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;