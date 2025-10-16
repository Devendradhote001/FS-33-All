import React from "react";

const Home = ({ greet }) => {
  console.log("home rendering......");

  for (let a = 0; a < 800000000; a++) {}

  return (
    <div>
      <h1>This is home</h1>
      <button onClick={() => greet()}>Say greet to home</button>
    </div>
  );
};

export default React.memo(Home);
