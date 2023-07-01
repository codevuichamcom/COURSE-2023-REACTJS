import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();
  const handleStart = () => {
    if (intervalRef.current) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  const handleEnd = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = undefined;
  };
  return (
    <div>
      <h1>Timer: {count}s</h1>
      <button onClick={handleStart}>Start</button>{" "}
      <button onClick={handleEnd}>End</button>
    </div>
  );
};

const Input = () => {
  const inputRef = useRef();
  useEffect(() => {
    console.log("input ref", inputRef.current);
    inputRef.current.focus();
  }, []);
  console.log("input ref", inputRef.current);
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};
const Content2 = () => {
  const reference = useRef(0);
  const handleClick = () => {
    reference.current++;
    console.log(`Clicked ${reference.current} times`);
  };
  console.log("re-render");
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <Timer />
      <Input />
    </div>
  );
};

export default Content2;
