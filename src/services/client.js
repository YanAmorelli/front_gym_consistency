import axios from 'axios';

const apiClient = axios.create(({
    baseURL: "localhost:8080/loginUser"
}));

export default apiClient;