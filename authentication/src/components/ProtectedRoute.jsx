import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ children }) => {
  let { user } = useSelector((state) => state.auth);

  if (!user) {
    console.log("me aya hu ayha");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
