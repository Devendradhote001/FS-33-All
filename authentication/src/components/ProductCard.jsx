import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { toast } from "react-toastify";
// import { addToCart, removeFromCart } from "../features/CartSlice";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const existingItem = cartItems.find((item) => item.id === product.id);

  const handleAdd = (data) => {
    dispatch(addToCart(data));
    toast.success("item added to cart");
  };

  const handleRemove = () => {};

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center transform transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="w-full h-40 flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 px-2">
        {product.title.slice(0, 25)}
      </h3>

      <div className="mt-auto w-full flex items-center justify-between px-2">
        <span className="text-lg font-semibold">
          ₹{(product.price * 82).toFixed(0)}
        </span>

        {!existingItem ? (
          <button
            onClick={() => handleAdd(product)}
            className="px-3 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm shadow-md hover:opacity-95 focus:outline-none"
          >
            Buy Now
          </button>
        ) : (
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
            <button className="text-indigo-600 font-bold text-lg px-2 hover:opacity-70">
              −
            </button>
            <span className="font-semibold text-gray-700">
              {existingItem.quantity}
            </span>
            <button
              onClick={() => handleAdd(product)}
              className="text-indigo-600 font-bold text-lg px-2 hover:opacity-70"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
