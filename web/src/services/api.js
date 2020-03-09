import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:44301/'
});

export default api;