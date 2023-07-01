import React from "react";

const SearchBar = ({
  inputText,
  inStockOnly,
  setInputText,
  setInStockOnly,
}) => {
  const onFilterTextChange = (e) => {
    setInputText(e.target.value);
  };
  const onInStockOnlyChange = (e) => {
    setInStockOnly(e.target.checked);
  };
  return (
    <div>
      <input
        value={inputText}
        type="text"
        placeholder="Search..."
        onChange={onFilterTextChange}
      />
      <div>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={onInStockOnlyChange}
        />{" "}
        Only show products in stock
      </div>
    </div>
  );
};

export default SearchBar;
