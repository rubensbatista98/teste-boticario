import React from "react";

import ProductCard from "../ProductCard";

import "./styles.css";

const ProductsSection = () => {
  return (
    <section className="products-section">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default React.memo(ProductsSection);
