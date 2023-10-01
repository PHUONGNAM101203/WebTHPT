import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

function increment(){
    setCount(count + 1);
}
function decrement(){
    setCount(count - 1);
}

  return (
    <div>
        <section>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <br /><br /><button onClick={decrement}>Decrement</button>
      </section>
    </div>
  );
};

export default Counter;
