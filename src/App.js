import React from "react";

import HeaderPage from "./components/HeaderPage";
import ProductsSection from "./components/ProductsSection";

import "./global.css";

function App() {
  return (
    <>
      <HeaderPage />

      <main>
        <ProductsSection />
      </main>
    </>
  );
}

export default App;
