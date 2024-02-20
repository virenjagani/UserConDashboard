import axios from "axios";
const API = axios.create({
  baseURL: `https://node-crud-3.onrender.com`,
});

API.interceptors.request.use(
  (config) => {
    return config;
// added config on req. 
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { API as Axios };
