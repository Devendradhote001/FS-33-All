import React, { lazy, Suspense, useEffect, useState } from "react";
import axios from "axios";

const Home = lazy(() => import("./components/Home"));

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [count, setCount] = useState(0);

  const fetchProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      if (res) {
        setProducts(res.data);
        setFilterData(res.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const filterSearch = () => {
    console.log("hello i m in filter search");
    if (search.trim() === "") return;
    let fs = products.filter((elem) =>
      elem.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(fs);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let timeout = setTimeout(() => {
      filterSearch();
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div>
      <h1>Hello - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <div>
        <h1>All products</h1>
        <input
          type="text"
          placeholder="Search products"
          onChange={(e) => setSearch(e.target.value)}
        />
        {filterData.map((elem) => {
          return <p key={elem.id}>{elem.title}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
