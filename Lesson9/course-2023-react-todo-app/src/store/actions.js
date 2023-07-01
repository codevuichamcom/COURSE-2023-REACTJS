const ACTION_TYPE = {
  SET_INPUT_SEARCH: "SET_INPUT_SEARCH",
  ADD_NEW_TODO: "ADD_NEW_TODO",
  DELETE_TODO: "DELETE_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
};

const setInputSearch = (text) => {
  return {
    type: ACTION_TYPE.SET_INPUT_SEARCH,
    payload: text,
  };
};

const addNewTodo = (todo) => {
  return {
    type: ACTION_TYPE.ADD_NEW_TODO,
    payload: todo,
  };
};

const deleteTodo = (id) => {
  return {
    type: ACTION_TYPE.DELETE_TODO,
    payload: id,
  };
};

const completeTodo = (id) => {
  return {
    type: ACTION_TYPE.COMPLETE_TODO,
    payload: id,
  };
};

export { ACTION_TYPE, setInputSearch, addNewTodo, deleteTodo, completeTodo };
