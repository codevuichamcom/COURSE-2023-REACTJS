import React from "react";

const TodoItem = ({ todo, toggleCompleted, onDeleteTodo }) => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => {
            toggleCompleted(todo.id);
          }}
        />
      </td>
      <td className={todo.isCompleted ? "app__todo-item--completed" : ""}>
        {todo.title}
      </td>
      <td>
        <button
          onClick={() => {
            onDeleteTodo(todo.id);
          }}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;
