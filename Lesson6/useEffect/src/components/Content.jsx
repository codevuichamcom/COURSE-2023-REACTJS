import React, { useEffect, useState } from "react";

const Content = () => {
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
    console.log("callback");

    const id = setInterval(() => {
      console.log("hello interval");
    }, 1000);

    return () => {
      console.log("clean up here");
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      <input
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />

      <h1>Giao dien nguoi dung</h1>
      <ul>
        {todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
      {console.log("updated dom")}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
};

export default Content;
