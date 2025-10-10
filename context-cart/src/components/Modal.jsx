import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import ProductCard from "./ProductCard";

const Modal = () => {
  let { setToggle, cartsData } = useContext(MyStore);

  console.log("cart->", cartsData);

  return (
    <div className="h-130 w-[98%] bg-white border absolute p-4">
      <div className="flex justify-between items-center">
        <h1>Products in cart</h1>
        <h1
          onClick={() => setToggle((prev) => !prev)}
          className="text-3xl cursor-pointer"
        >
          x
        </h1>
      </div>
      <div className="flex flex-wrap gap-4">
        {cartsData.map((elem) => (
          <ProductCard elem={elem} key={elem.id} />
        ))}
      </div>
    </div>
  );
};

export default Modal;
