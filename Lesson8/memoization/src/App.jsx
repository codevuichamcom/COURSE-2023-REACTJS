import { useCallback, useMemo, useState } from "react";
import { MemoMovie } from "./components/Movie";
import { takeVeryLongTime } from "./uitils/math";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [title, setTitle] = useState("Fast X");

  const handleMovieClick = useCallback(() => {
    console.log(`You clicked to ${title}`);
  }, [title]);

  const squareCached = useMemo(() => takeVeryLongTime(number), [number]);

  console.log("App re-render");
  return (
    <>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        {count}
      </button>
      <button
        onClick={() => {
          setTitle(title === "hello" ? "Fast X" : "hello");
        }}
      >
        set tittle
      </button>
      <button
        onClick={() => {
          setNumber((prev) => prev + 1);
        }}
      >
        Number: {number}
      </button>
      <MemoMovie
        title={title}
        releaseDate="19/05/2023"
        onMovieClick={handleMovieClick}
      />
      <h1>Square number: {squareCached}</h1>
    </>
  );
}

export default App;
