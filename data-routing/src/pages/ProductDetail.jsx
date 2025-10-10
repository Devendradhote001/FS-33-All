import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";

const ProductDetail = () => {
  let { id } = useParams();

  let location = useLocation();
  console.log(location);

  const getProductDetails = async () => {
    try {
      console.log("me chl raha huu...");
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.log("error in products", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);

  return <div>Product details</div>;
};

export default ProductDetail;
