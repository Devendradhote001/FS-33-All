import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ elem }) => {
  let { setCartsData } = useContext(MyStore);

  return (
    <div className="w-[24%] h-[40%] p-4 shadow-xl border border-gray-300 rounded-md">
      <div className="h-50 rounded-md w-full mb-4 overflow-hidden">
        <img
          className="h-full w-full object-center"
          src={elem.imgUrl}
          alt="img here"
        />
      </div>

      <div className="">
        <h1>{elem.title}</h1>
        <p>₹{elem.price}</p>
        <p>ratings - {elem.ratings}</p>
        <div className="flex w-full justify-between mt-4">
          <button className="p-2 cursor-pointer bg-red-600 text-white rounded-md">
            Delete
          </button>
          <button
            onClick={() => setCartsData((prev) => [...prev, elem])}
            className="p-2 cursor-pointer bg-green-600 text-white rounded-md"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
