import { ACTION_TYPE } from "./actions";

const todoReducer = (state, action) => {
  console.group("start");
  console.log("curent state", state);
  let newState;
  switch (action.type) {
    case ACTION_TYPE.SET_INPUT_SEARCH: {
      newState = { ...state, inputSearch: action.payload };
      break;
    }
    case ACTION_TYPE.ADD_NEW_TODO: {
      const newTodos = [...state.todos];
      newTodos.push(action.payload);
      newState = { inputSearch: "", todos: newTodos };
      break;
    }
    case ACTION_TYPE.DELETE_TODO: {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      newState = { ...state, todos: newTodos };
      break;
    }
    case ACTION_TYPE.COMPLETE_TODO: {
      const newTodos = [...state.todos];
      const index = newTodos.findIndex((todo) => todo.id === action.payload);
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      newState = { ...state, todos: newTodos };
      break;
    }
    default:
      throw Error("Invalid action type");
  }
  console.log("newState", newState);
  console.groupEnd("end");
  return newState;
};

export default todoReducer;
