import React from "react";

const Odd = ({ odd }) => {
  return (
    <div>
      <h1>Odd</h1>
      {odd.map((elem) => {
        return <p>{elem}</p>;
      })}
    </div>
  );
};

export default Odd;
