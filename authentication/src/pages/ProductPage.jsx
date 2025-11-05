import React from "react";
import { fetchProductDataHook } from "../hooks/productHook";
import { ProductCard } from "../components/ProductCard";

const ProductPage = () => {
  const { data, isPending, error } = fetchProductDataHook();
  console.log(data);

  return (
    <div>
      <h1>Products</h1>
      <div className="flex flex-wrap gap-5">
        {data?.map((elem) => {
          return <ProductCard key={elem.id} product={elem} />;
        })}
      </div>
    </div>
  );
};

export default ProductPage;
