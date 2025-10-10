import React, { useState } from "react";

const Input = ({ setTodos, todos }) => {
  let [inpValue, setInpValue] = useState("");
  console.log(inpValue);

  return (
    <div className="flex gap-10">
      <input
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
        className="border rounded px-4 py-2"
        type="text"
        placeholder="Enter tasks..."
      />
      <button
        onClick={() => {
          setTodos([...todos, inpValue]);
          setInpValue("");
        }}
        className="bg-blue-600 rounded text-white px-4 py-2"
      >
        Add Todo
      </button>
    </div>
  );
};

export default Input;
