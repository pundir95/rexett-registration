import axios from "axios";
// import { toast } from "react-toastify";

const authInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL
// baseURL: "https://rexett-backend.rvtechnologies.info"

});


// Request Interceptor
authInstance.interceptors.request.use(
  (config) => {
    // config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
authInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || "Something went wrong";

    // toast.error(message);
    return Promise.reject(error);
  }
);

export default authInstance;


