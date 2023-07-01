import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Content2 from "./components/Content2";

function App() {
  const [isShow, setShow] = useState(false);
  const [isShow2, setShow2] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShow(!isShow);
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          setShow2(!isShow2);
        }}
      >
        Toggle2
      </button>
      {isShow && <Content />}

      {isShow2 && <Content2 />}
    </>
  );
}

export default App;
