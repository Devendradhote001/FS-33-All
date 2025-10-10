import React, { useContext } from "react";
import Login from "./Login";
import Register from "./Register";
import { Dukaan } from "../context/OnotherContext";

const Auth = () => {
  let cd = useContext(Dukaan);
  console.log(cd);

  return (
    <div>
      <Login />
      <Register />
    </div>
  );
};

export default Auth;
