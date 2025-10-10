import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div
      className="h-16 px-10 flex items-center justify-between
                    bg-green-600/70 backdrop-blur-md shadow-md"
    >
      <h1 className="text-2xl text-white cursor-pointer font-bold">Recipes</h1>

      <nav className="flex gap-10 text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "text-gray-200 hover:text-white"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "text-gray-200 hover:text-white"
          }
          to="/chef"
        >
          Chef
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "text-gray-200 hover:text-white"
          }
          to="/add-recipe"
        >
          Add Recipe
        </NavLink>
      </nav>

      <div className="flex text-white gap-5">
        <p className="cursor-pointer text-xl hover:underline">Signin</p>
      </div>
    </div>
  );
};

export default Navigation;
