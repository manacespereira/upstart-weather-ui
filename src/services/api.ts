import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:46951/api',
});

export default api;
