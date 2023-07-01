import React from "react";
import "./ProductTable.css";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ inputText, inStockOnly, products = [] }) => {
  // const productFiltered = products.filter((product) =>
  //   product.name.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())
  // );
  // console.log({ productFiltered });
  const rows = [];

  let lastCategory = null;
  products.forEach((product) => {
    //check dieu kien
    if (
      !product.name.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} />);
    }
    rows.push(<ProductRow product={product} />);
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
