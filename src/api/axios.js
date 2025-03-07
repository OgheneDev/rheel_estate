import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://apidoc.rheel.ng/', // Replace with your API base URL
  timeout: 100000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response, 
  (error) => {
    console.error('API Error:', error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
