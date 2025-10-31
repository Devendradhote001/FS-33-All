import axios from "axios";
import ErrorHandler from "../components/ErrorHandler";
import { toast } from "react-toastify";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    let { message } = error;
    if (message) {
      toast.error(message);
    }
  }
);
