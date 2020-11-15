import { cleanup } from '@testing-library/react';
import { useState } from 'react'
const App = () => {
  const name = 'yamane';
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  }
  const decrement = () => {
    setCount(count - 1);
    console.log(count);
  };
  const reset = () => {
    setCount(0);
    console.log(count);
  };

  return (
    <div>
      <h1>Hello world</h1>
      <h2>Hello world</h2>
      <h3>Hello world</h3>
      <h4>Hello world</h4>

      <button onClick={() => window.alert("hello world")}>button</button>
      <input type="text" />
      <a href="#">a タグ</a>
      {name}
      <div><button onClick={increment}>いいね！</button><button onClick={decrement}>よくないね！</button>
        <button onClick={reset}>リセット</button>
        <p>{count}</p></div>
    </div>
  );
}

export default App;
