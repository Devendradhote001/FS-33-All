import React from "react";

const TodoBox = ({ todos }) => {
  return (
    <div className="border flex flex-col justify-center items-center h-[30%] w-[40%]">
      {todos.map((elem, ind) => (
        <h1 key={ind}>{elem}</h1>
      ))}

    </div>
  );
};

export default TodoBox;
