import {setupAxiosInterceptors} from "@infra/http/inteceptors.js";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  "Content-Type": "application/json",
});

setupAxiosInterceptors(axiosInstance)
export default axiosInstance;
