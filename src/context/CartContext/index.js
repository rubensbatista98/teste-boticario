import React, { createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export { CartProvider, CartContext };
