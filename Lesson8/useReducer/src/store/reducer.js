import { ACTION } from "./actions";

const reducer = (state, action) => {
  let newState;
  switch (action) {
    case ACTION.INCREATE_ACTION:
      newState = state + 1;
      break;
    case ACTION.DECREATE_ACTION:
      newState = state - 1;
      break;
    default:
      throw Error("Action invalid");
  }
  return newState;
};

export { reducer };
