import Product from "./Product";
import { ProductContext } from "../contexts/ProductContext";
import React from "react";
import { useContext } from "react";

// Components

const Products = () => {
  const { products, addItem } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
