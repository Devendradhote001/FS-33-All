import React, { useEffect } from "react";
import { fetchProductsData } from "./apis/productsApis";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  let { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProductsData,
    staleTime: Infinity,
  });

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>Errror hai abii</h1>;

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
