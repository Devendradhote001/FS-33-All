import axios from "axios";
import ErrorHandler from "../components/ErrorHandler";
import { toast } from "react-toastify";
import { store } from "../store/Store";
import { setError } from "../features/errorSlice";
import { setResponse } from "../features/responseSlice";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosInstance.interceptors.response.use(
  (response) => {
    let status = response.status;

    if (status === 200) {
      store.dispatch(setResponse("Data fetched successfully"));
    } else {
      store.dispatch(setResponse("Success"));
    }
    return response;
  },
  (error) => {
    const status = error.status;

    if (status === 404) {
      store.dispatch(setError("Something went wrong"));
    } else {
      store.dispatch("Error in api");
    }
  }
);
