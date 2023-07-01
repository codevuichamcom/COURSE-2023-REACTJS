import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleCompleted, onDeleteTodo }) => {
  return (
    <table>
      <tbody>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
