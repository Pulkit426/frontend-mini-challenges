import { useState } from 'react';

const Counter = () => {
  const [val, setVal] = useState(0);
  const [changeVal, setChangeVal] = useState(0);

  return (
    <div>
      <h1> Counter </h1>
      <div> {val}</div>

      <button onClick={() => setVal((prev) => Number(prev) + Number(changeVal))}> + </button>
      <button onClick={() => setVal((prev) => Number(prev) - Number(changeVal))}> - </button>

      <div>
        Increment/Decrement by <input type="number" value={changeVal} onChange={(e) => setChangeVal(e.target.value)} />
      </div>

      <div>
        <button onClick={() => setVal(0)}> Reset </button>
      </div>
    </div>
  );
};

export default Counter;
