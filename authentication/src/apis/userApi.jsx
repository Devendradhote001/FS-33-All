import { axiosInstance } from "../config/axiosInstance";

export const getUsersData = async () => {
  try {
    let res = await axiosInstance.get("/users");

    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log("error in users api->", error);
  }
};
