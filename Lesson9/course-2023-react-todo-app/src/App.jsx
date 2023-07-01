import { useReducer, useState } from "react";
import "./App.css";
import {
  addNewTodo,
  completeTodo,
  deleteTodo,
  setInputSearch,
} from "./store/actions";
import todoReducer from "./store/todoReducer";

const initalState = {
  todos: [
    { id: 1, title: "Go to school", isCompleted: true },
    { id: 2, title: "Code" },
    { id: 3, title: "Sleep" },
    { id: 4, title: "Hang out with girl friend" },
  ],
  inputSearch: "",
};
function App() {
  const [state, dispatch] = useReducer(todoReducer, initalState);
  const { todos, inputSearch } = state;

  const onInputChange = (e) => {
    dispatch(setInputSearch(e.target.value));
  };

  const addTodo = () => {
    const newTodos = [...todos];

    let lastId = 0;
    if (newTodos.length > 0) {
      lastId = newTodos[newTodos.length - 1].id;
    }

    if (inputSearch.trim() !== "") {
      dispatch(addNewTodo({ id: lastId + 1, title: inputSearch.trim() }));
    }
  };

  const handleCompleted = (id) => {
    dispatch(completeTodo(id));
  };

  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const onKeyUp = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      addTodo();
    }
  };
  return (
    <div className="app">
      <div className="app__header">
        <input value={inputSearch} onChange={onInputChange} onKeyUp={onKeyUp} />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="app__todo-list">
        {todos.map(({ id, title, isCompleted }) => (
          <li key={id}>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => handleCompleted(id)}
            />
            <span className={isCompleted ? "app__todo-item--completed" : ""}>
              {title}
            </span>
            <button
              className="app__delete-btn"
              onClick={() => {
                onDelete(id);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
