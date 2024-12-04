import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter App</h1>
      <Counter 
        counter={counter} 
        increment={increment} 
        decrement={decrement} 
        reset={reset} 
      />
    </div>
  );
}

export default App;
