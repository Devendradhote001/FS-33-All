import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import HomeLayout from "../layout/HomeLayout";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "../components/ProtectedRoute";
import UsersPage from "../pages/UsersPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "users",
              element: <UsersPage />,
            },
            {
              path: "products",
              element: <ProductPage />,
            },
            {
              path: "cart",
              element: <CartPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
