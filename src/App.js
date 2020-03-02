import React from "react";

import HeaderPage from "./components/HeaderPage";
import ProductsSection from "./components/ProductsSection";

import data from "./products";

import "./global.css";

function App() {
  return (
    <>
      <HeaderPage />

      <main>
        <ProductsSection products={data} />
      </main>
    </>
  );
}

export default App;
