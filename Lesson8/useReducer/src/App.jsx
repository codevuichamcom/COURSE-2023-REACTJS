import { useReducer } from "react";
import { reducer } from "./store/reducer";
import { ACTION } from "./store/actions";
function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch(ACTION.INCREATE_ACTION);
        }}
      >
        Increate
      </button>
      <button
        onClick={() => {
          dispatch(ACTION.DECREATE_ACTION);
        }}
      >
        Decreate
      </button>
    </>
  );
}

export default App;
