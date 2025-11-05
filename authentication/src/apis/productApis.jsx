import { axiosInstance } from "../config/axiosInstance";

export const getProductData = async () => {
  try {
    let res = await axiosInstance.get("/products");
    if (res) {
      return res.data;
    }
  } catch (error) {
    console.log("error in product api", error);
  }
};
