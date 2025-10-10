import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const AuthLayout = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      {toggle ? (
        <Login setToggle={setToggle} />
      ) : (
        <Register setToggle={setToggle} />
      )}
    </div>
  );
};

export default AuthLayout;
