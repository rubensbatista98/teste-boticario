import React from "react";

import HeaderPage from "./components/HeaderPage";
import ProductsSection from "./components/ProductsSection";
import { CartProvider } from "./context/CartContext";

import data from "./products";

import "./global.css";

function App() {
  return (
    <CartProvider>
      <HeaderPage />

      <main>
        <ProductsSection products={data} />
      </main>
    </CartProvider>
  );
}

export default App;
