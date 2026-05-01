import axios from 'axios';

const api = axios.create({
  // Make sure https:// is right here! 👇
  baseURL: 'https://team-task-manager-api-production.up.railway.app', 
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