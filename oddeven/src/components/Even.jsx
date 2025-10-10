import React from "react";

const Even = ({ even }) => {
  return (
    <div>
      <h1>Even</h1>

      {even.map((elem) => {
        return <p>{elem}</p>;
      })}
    </div>
  );
};

export default Even;
