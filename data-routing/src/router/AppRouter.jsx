import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from "../layout/AuthLayout";
import Homelayout from "../layout/Homelayout";
import Users from "../pages/Users";
import Analytics from "../pages/Analytics";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import { getProducts } from "../apis/ProductApis";
import ProductDetail from "../pages/ProductDetail";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
    },
    {
      path: "/home",
      element: <Homelayout />,
      children: [
        {
          path: "",
          element: <Analytics />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          loader: getProducts,
          element: <Product />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "product/details/:id",
          element: <ProductDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
