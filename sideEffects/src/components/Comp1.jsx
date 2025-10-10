import React, { useState } from "react";
import Comp2 from "./Comp2";

const Comp1 = () => {
  const [count, setCount] = useState(0);

  console.log("hey i m comp 1...");
  return (
    <div>
      <h1>comp1 - {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>

      <Comp2 />
    </div>
  );
};

export default Comp1;
