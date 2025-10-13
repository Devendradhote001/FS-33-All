import React from "react";
import { NavLink, Outlet } from "react-router";

const Homelayout = () => {
  return (
    <div className="min-h-screen w-full p-5 flex ">
      <aside className="w-[20%] h-screen border-r border-gray-400 flex flex-col gap-8 p-10">
        <NavLink
          className="p-2 border-b border-gray-400 cursor-pointer"
          to="/home"
        >
          Analytics
        </NavLink>
        <NavLink
          className="p-2 border-b border-gray-400 cursor-pointer"
          to="/home/users"
        >
          Users
        </NavLink>
        <NavLink
          className="p-2 border-b border-gray-400 cursor-pointer"
          to="/home/products"
        >
          Prodcuts
        </NavLink>
        <NavLink
          className="p-2 border-b border-gray-400 cursor-pointer"
          to="/home/cart"
        >
          Carts
        </NavLink>
        <NavLink
          className="p-2 border-b border-gray-400 cursor-pointer"
          to="/home/messages"
        >
          Messages
        </NavLink>
      </aside>
      <div className="w-[80%] h-full p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Homelayout;
