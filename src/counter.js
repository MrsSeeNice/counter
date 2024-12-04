import React from "react";

function Counter({ counter, increment, decrement, reset }) {
  return (
    <div>
      <h2>Counter Value: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }}>Decrement</button>
      <button onClick={reset} style={{ marginLeft: "10px" }}>Reset</button>
    </div>
  );
}

export default Counter;

