import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const todoListStr = localStorage.getItem("todoList");
    return JSON.parse(todoListStr) || [];
  });
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    if (inputText.trim() === "") {
      alert("Please enter todo");
      return;
    }
    let id = 0;
    if (todos.length > 0) {
      id = todos[todos.length - 1].id + 1;
    }
    const newTodos = [...todos, { id, title: inputText }];
    setTodos(newTodos);
    localStorage.setItem("todoList", JSON.stringify(newTodos));
    setInputText("");
  };

  const onkeyUp = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const onDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
    localStorage.setItem("todoList", JSON.stringify(newTodos));
  };
  const toggleCompleted = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    localStorage.setItem("todoList", JSON.stringify(newTodos));
  };
  return (
    <div className="app">
      <Header
        inputText={inputText}
        setInputText={setInputText}
        addTodo={addTodo}
        onkeyUp={onkeyUp}
      />
      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        onDeleteTodo={onDeleteTodo}
      />
    </div>
  );
}

export default App;
