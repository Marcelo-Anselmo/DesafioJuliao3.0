import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello World!</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Clique aqui!</button>
      </div>
    </>
  );
}

export default App;
