import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FoodyApp = ({ products }) => {
  const [inputText, setInputText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <>
      <SearchBar
        inputText={inputText}
        inStockOnly={inStockOnly}
        setInputText={setInputText}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        inputText={inputText}
        inStockOnly={inStockOnly}
        products={products}
      />
    </>
  );
};

export default FoodyApp;
