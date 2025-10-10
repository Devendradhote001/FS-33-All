import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  console.log("me product page hu");

  let { data } = useLoaderData();

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return (
    <div>
      <h1>all products here</h1>
      {products.map((elem) => {
        return (
          <div
            key={elem.id}
            onClick={() => navigate(`/home/product/details/${elem.id}`)}
          >
            <h1 className="p-2 cursor-pointer">{elem.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
