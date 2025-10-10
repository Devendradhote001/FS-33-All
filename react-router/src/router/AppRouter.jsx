import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import ProductDetails from "../components/ProductDetails";
import RecipeForm from "../components/RecipeForm";
import Chef from "../components/Chef";

const AppRouter = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/add-recipe" element={<RecipeForm />} />
        <Route path="/products/details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
