// Counter.jsx
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-testid="count-value">{count}</h1>
      <button className="inc" autoFocus="true" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="dec" autoFocus="true"  onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
