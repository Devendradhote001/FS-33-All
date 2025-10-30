import React, { useState } from "react";
import {
  addValue,
  decrement,
  increment,
  resetCount,
} from "./features/CounterSlice";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./features/UserSlice";

const App = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [inp, setInp] = useState("");

  return (
    <div>
      <h1>Hello user - {user}</h1>
      <input
        onChange={(e) => setInp(e.target.value)}
        type="text"
        placeholder="Add name"
      />
      <button onClick={() => dispatch(addUser(inp))}>Add name</button>
    </div>
  );
};

export default App;
