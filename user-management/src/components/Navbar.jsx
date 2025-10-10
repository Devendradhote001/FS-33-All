import React from "react";
import { Moon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-15 px-10 w-full bg-blue-600 text-white flex justify-between items-center">
      <h1 className="text-3xl cursor-pointer font-bold text--400">Logo </h1>
      <div className="w-[30%] justify-between flex text-md">
        <a href="">Users</a>
        <a href="">Update</a>
        <a href="">Profile</a>
      </div>

      <div>
        <Moon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
