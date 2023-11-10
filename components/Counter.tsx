import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <button 
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
        onClick={incrementCount}
      >
        Increment
      </button>
      <span className="text-lg">{count}</span>
    </div>
  );
};

export default Counter;