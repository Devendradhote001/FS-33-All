import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ elem }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/details/${elem.id}`)}
      className="border h-106 w-73 rounded-xl p-2 border-gray-200 shadow-xl"
    >
      <div className="h-70 w-full">
        <img
          className="h-full w-full object-center rounded-xl"
          src={elem.image}
          alt="image here"
        />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h1 className="font-bold">{elem.title.slice(0, 25)}</h1>
        <p className="text-gray-600">${elem.price}</p>
        <div className="flex w-full  justify-between">
          <button className="px-4 py-2 text-white bg-green-500 cursor-pointer rounded-xl">
            Buy now
          </button>
          <button className="px-4 py-2 text-white bg-orange-500 cursor-pointer rounded-xl">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
