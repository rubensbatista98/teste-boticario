import React from "react";

import ProductCard from "../ProductCard";

import "./styles.css";

const ProductsSection = ({ products }) => {
  return (
    <section className="products-section">
      <h2 className="title">Últimos Produtos</h2>

      {products.map(product => (
        <ProductCard key={product.name} product={product} />
      ))}
    </section>
  );
};

export default React.memo(ProductsSection);
