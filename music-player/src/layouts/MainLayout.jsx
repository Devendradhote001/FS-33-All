import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="h-screen w-full flex">
      <div className="w-[80%]">
        <Outlet />
      </div>
      <aside className="w-[20%] border-l border-gray-300">aside bar</aside>
    </div>
  );
};

export default MainLayout;
