import React, { useState } from "react";
import Input from "./components/Input";
import TodoBox from "./components/TodoBox";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="h-screen flex flex-col gap-10 items-center justify-center">
      <Input setTodos={setTodos} todos={todos} />
      <TodoBox todos={todos} />
    </div>
  );
};

export default App;
