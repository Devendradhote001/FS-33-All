import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return <div>cart screen</div>;
};

export default CartPage;
