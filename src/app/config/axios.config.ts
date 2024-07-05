import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://0vdyg.wiremockapi.cloud',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
