import axios from "axios";

export const getProducts = async () => {
  try {
    console.log("me chl raha huu...");
    let res = await axios.get("https://fakestoreapi.com/products");
    if (res) {
      return { data: res.data };
    }
  } catch (error) {
    console.log("error in products", error);
  }
};
