import React from "react";
import { NavLink, Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to={"/"}>App</NavLink>
        <NavLink to={"/home"}>Home</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
