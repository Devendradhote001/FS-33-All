import { axiosInstance } from "../config/axiosInstance";

export let fetchProductsData = async (id) => {
  console.log("running....");
  try {
    let res = await axiosInstance.get("/productsx");
    if (res) return res.data;
  } catch (error) {
    console.log("error in api", error);
  }
};
