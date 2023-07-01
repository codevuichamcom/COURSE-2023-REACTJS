import React, { useImperativeHandle, useRef } from "react";

function App() {
  return (
    <div style={{ border: "1px solid blue" }}>
      <Form />
    </div>
  );
}

function Form() {
  const inputRef = useRef(null);
  const handleEdit = () => {
    inputRef.current.focus();
    inputRef.current.sayHello();
  };
  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleEdit}>Edit</button>
    </>
  );
}

const MyInput = React.forwardRef(function Input(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      sayHello() {
        console.log("Hello, Im input");
      },
      focus() {
        inputRef.current.focus();
      },
    };
  });
  return (
    <>
      <input ref={inputRef} style={{ border: "1px solid red" }} />
    </>
  );
});
export default App;
