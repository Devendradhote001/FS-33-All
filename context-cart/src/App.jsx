import React, { useContext, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { MyStore } from "./context/MyContext";

const App = () => {
  let { toggle } = useContext(MyStore);
  const [products, setProducts] = useState([
    {
      id: 1,
      imgUrl: "https://images.unsplash.com/photo-1513708922687-65e97c6e2a9e",
      title: "Wireless Headphones",
      price: 65.99,
      ratings: 4.5,
    },
    {
      id: 2,
      imgUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Running Shoes",
      price: 79.99,
      ratings: 4.2,
    },
    {
      id: 3,
      imgUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      title: "Classic Backpack",
      price: 39.49,
      ratings: 4.1,
    },
    {
      id: 4,
      imgUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      title: "Men's Wristwatch",
      price: 120.0,
      ratings: 3.8,
    },
    {
      id: 5,
      imgUrl: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
      title: "Sports Sunglasses",
      price: 25.75,
      ratings: 4.4,
    },
    {
      id: 6,
      imgUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      title: "Cotton T-Shirt",
      price: 14.99,
      ratings: 4.0,
    },
    {
      id: 7,
      imgUrl: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
      title: "Bluetooth Speaker",
      price: 42.0,
      ratings: 4.7,
    },
    {
      id: 8,
      imgUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      title: "Leather Wallet",
      price: 29.99,
      ratings: 3.9,
    },
    {
      id: 9,
      imgUrl: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1",
      title: "Ceramic Mug",
      price: 11.7,
      ratings: 4.2,
    },
    {
      id: 10,
      imgUrl: "https://images.unsplash.com/photo-1468421870903-4df1664ac249",
      title: "Yoga Mat",
      price: 20.0,
      ratings: 4.3,
    },
    {
      id: 11,
      imgUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      title: "Stylish Sneakers",
      price: 55.49,
      ratings: 4.6,
    },
    {
      id: 12,
      imgUrl: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1",
      title: "Travel Suitcase",
      price: 145.0,
      ratings: 4.1,
    },
    {
      id: 13,
      imgUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      title: "Slim Jeans",
      price: 49.99,
      ratings: 3.7,
    },
    {
      id: 14,
      imgUrl: "https://images.unsplash.com/photo-1526171111742-920f0fc8d0a0",
      title: "Smart Watch",
      price: 89.99,
      ratings: 4.3,
    },
    {
      id: 15,
      imgUrl: "https://images.unsplash.com/photo-1536305036340-f8e86f5b8d4d",
      title: "Makeup Kit",
      price: 37.5,
      ratings: 4.4,
    },
    {
      id: 16,
      imgUrl: "https://images.unsplash.com/photo-1503602642458-232111445657",
      title: "Cotton Hoodie",
      price: 33.2,
      ratings: 4.2,
    },
    {
      id: 17,
      imgUrl: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      title: "Bluetooth Earbuds",
      price: 44.18,
      ratings: 4.5,
    },
    {
      id: 18,
      imgUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      title: "Leather Boots",
      price: 92.0,
      ratings: 4.0,
    },
    {
      id: 19,
      imgUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Desk Lamp",
      price: 22.5,
      ratings: 3.9,
    },
    {
      id: 20,
      imgUrl: "https://images.unsplash.com/photo-1508253578933-eab45707e212",
      title: "Fitness Tracker",
      price: 60.0,
      ratings: 4.2,
    },
  ]);

  return (
    <div className="min-h-screen w-full p-4 flex flex-col gap-4">
      <Navbar />
      <div className="flex flex-wrap gap-4">
        {products.map((elem) => {
          return <ProductCard key={elem.id} elem={elem} />;
        })}
      </div>

      {toggle ? <Modal /> : ""}
    </div>
  );
};

export default App;
