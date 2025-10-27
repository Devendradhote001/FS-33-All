import React from "react";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
