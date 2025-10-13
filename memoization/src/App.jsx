import React, { useCallback, useMemo, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("app rendering...");

  const calc = useMemo(() => {
    console.log("calc rendering...");
    return 500 + 400;
  }, [count]);

  const greet = useCallback(() => {
    console.log("Hello, good evening ");
  }, []);

  return (
    <div>
      <h1>
        hello - {count} - {calc}
      </h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <Home greet={greet} />
      <About />
    </div>
  );
};

export default App;
