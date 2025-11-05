import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/CounterSlice";

const App = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.count); 
  return (
    <div>
      <h1>Hello count is - {value}</h1>
      <button onClick={() => dispatch(increment())}>add</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
