import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  let { setToggle } = useContext(MyStore);

  return (
    <div className="flex items-center w-full justify-between px-10">
      <h2>All Products</h2>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="px-6 py-2 cursor-pointer bg-orange-700 text-white rounded-md"
      >
        Cart
      </button>
    </div>
  );
};

export default Navbar;
