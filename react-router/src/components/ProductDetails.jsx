import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  let { id } = useParams();

  const [details, setDetails] = useState(null);
  console.log(details);

  const fetchDetail = async () => {
    try {
      let response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      if (response) {
        setDetails(response.data);
      }
    } catch (error) {
      console.log("Error in fetching details", error);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  return (
    <div className="p-4 ">
      <img width={150} src={details?.image} alt="" />
      <h1>{details?.title}</h1>
      <p>{details?.description}</p>
    </div>
  );
};

export default ProductDetails;
