import React, { useState } from "react";
import Even from "./components/Even";
import Odd from "./components/Odd";

const App = () => {
  const [inpValue, setInpValue] = useState("");
  const [even, setEven] = useState([]);
  const [odd, setOdd] = useState([]);

  const handleLogic = () => {
    let myNo = Number(inpValue);

    if (myNo % 2 === 0) {
      setEven([...even, myNo]);
      setInpValue("");
    } else {
      setOdd([...odd, myNo]);
      setInpValue("");
    }
  };

  return (
    <div>
      <h1>Odd even Checker</h1>
      <div>
        <input
          value={inpValue}
          onChange={(e) => setInpValue(e.target.value)}
          type="Number"
          placeholder="Enter number"
        />
        <button onClick={handleLogic}>Check</button>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Even even={even} />
        <Odd odd={odd} />
      </div>
    </div>
  );
};

export default App;
