import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState();

  useEffect(() => {
    setCounter(0);
  }, [])
  

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="w-64">
        <h1 className="font-semibold mb-3 text-center">My Counter</h1>

        <div className="border border-solid border-gray-300 h-48 w-full p-4 rounded flex justify-center items-center font-semibold text-xl">{counter}</div>

        <div className="flex w-full justify-between mt-4">
          <button className="flex justify-center rounded bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setCounter(counter - 1)} 
          disabled={counter===0}>Decrease</button>
          <button className="flex justify-center rounded bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" onClick={() => setCounter(0)} >Reset</button>
          <button className="flex justify-center rounded bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600" onClick={() => setCounter(counter + 1)}>Increase</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
