import React, { useState } from "react";
import Button from "./button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(prev => !prev);
  };

  const increase = () => {
    setCount(prev => prev + 1);
  };

  const decrease = () => {
    if (count === 0) return;
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="bg-yellow-100 p-10 rounded-2xl shadow-xl flex flex-col items-center gap-6">
      
      <Button name="Show / Hide" color="green" onClick={toggleShow} />

      {show && (
        <>
          <h1 className="text-5xl font-bold text-gray-800">{count}</h1>

          <div className="flex gap-4">
            <Button name="Increase" color="green" onClick={increase} />
            <Button name="Decrease" color="red" onClick={decrease} />
            <Button name="Reset" color="blue" onClick={reset} />
          </div>
        </>
      )}

    </div>
  );
};

export default Counter;