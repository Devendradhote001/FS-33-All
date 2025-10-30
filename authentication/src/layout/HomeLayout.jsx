import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router";
import { removeUser } from "../features/authSlice";

const HomeLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/");
    alert("user logged out");
  };

  return (
    <div className="flex p-4 h-screen">
      <nav className="w-[20%] p-5 border-r border-gray-600">
        <div className="m-10">
          <h1 className="text-3xl">Logo</h1>
        </div>
        <div className="flex flex-col gap-5">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-500"
            }
            to=""
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-500"
            }
            to="/home/users"
          >
            Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-500"
            }
            to="/home/products"
          >
            Products
          </NavLink>

          <button className="text-xl cursor-pointer" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="w-[80%] p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
