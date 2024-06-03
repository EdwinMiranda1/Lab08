
import React, { useState } from 'react';

const Button: React.FC = () => {
  const [count, setCount] = useState(5); 

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 50);
  };

  return (
    <button onClick={incrementCount}>Count is {count}</button>
  );
};

export default Button;
