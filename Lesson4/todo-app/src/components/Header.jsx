import React from "react";

const Header = ({ inputText, setInputText, addTodo, onkeyUp }) => {
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="header">
      <input value={inputText} onChange={handleInputChange} onKeyUp={onkeyUp} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Header;
