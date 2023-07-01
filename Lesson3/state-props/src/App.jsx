import { useState } from "react";
import "./App.css";

function initialState() {
  console.log("initialState");
  //xu ly phuc tao
  return 0;
}

function Button({ color, isActive }) {
  const [count, setCount] = useState(initialState);

  const hanndleClick = () => {
    setCount((pcount) => pcount + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h1>Color: {color}</h1>
      <h1>isActive: {isActive}</h1>
      <button onClick={hanndleClick}>Clicked {count} times</button>
    </>
  );
}

function SharedButton({ count, setGlobalCount }) {
  const hanndleClick = () => {
    setGlobalCount(count + 1);
  };
  return <button onClick={hanndleClick}>Clicked {count} times</button>;
}

function Input({ setUsename }) {
  const [textInput, setTextInput] = useState("hello");
  const handleInputChange = (e) => {
    setTextInput(e.target.value);
    setUsename(e.target.value);
  };

  const onShow = () => {
    alert(textInput);
  };
  const onClickSetInput = () => {
    setTextInput("quan");
  };
  return (
    <>
      <input value={textInput} onChange={handleInputChange} />
      <button onClick={onShow}>Show Input value</button>
      <button onClick={onClickSetInput}>set input to Quan</button>
    </>
  );
}

function App() {
  const [globalCount, setGlobalCount] = useState(0);
  const [usename, setUsename] = useState("");
  const onSubmit = () => {
    alert(usename);
  };
  return (
    <>
      <Button color="red" isActive="true" taisan="2000$" />
      <Button />
      <a href="https://www.google.com/">go to google</a>
      <div style={{ marginTop: 10 }}>
        Shared button
        <SharedButton count={globalCount} setGlobalCount={setGlobalCount} />
        <SharedButton count={globalCount} setGlobalCount={setGlobalCount} />
      </div>

      <Input setUsename={setUsename} />
      <button onClick={onSubmit}>Submit</button>
    </>
  );
}

export default App;
