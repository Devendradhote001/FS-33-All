import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  let fetchProducts = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("error->", error);
    }
  };

  console.log("hello me usefect bhr hu");

  return (
    <div>
      <h1>hello</h1>
      <h2>Count - {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
    </div>
  );
};

export default App;
