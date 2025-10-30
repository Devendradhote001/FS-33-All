import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const AuthLayout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="h-screen w-full">
      {toggle ? (
        <Login setToggle={setToggle} />
      ) : (
        <Register setToggle={setToggle} />
      )}
    </div>
  );
};

export default AuthLayout;
