import React, { useState, createContext, useCallback, useEffect } from "react";

const CartContext = createContext();

const CartProvider = React.memo(({ children }) => {
  const [items, setItems] = useState([]);

  const addProductInCart = useCallback(
    productItem => {
      const productInCart = items.find(item => productItem.name === item.name);

      if (productInCart) {
        const productIndex = items.indexOf(productInCart);
        const newQuantity = productInCart.quantity + 1;

        const newProduct = { ...productInCart, quantity: newQuantity };

        const newItems = [...items];

        newItems.splice(productIndex, 1, newProduct);

        setItems(newItems);

        return newQuantity;
      }

      const quantity = 1;
      const newItem = { ...productItem, quantity };

      setItems(oldItems => [...oldItems, newItem]);

      return quantity;
    },
    [items, setItems]
  );

  useEffect(() => {
    console.log(items);
  }, [items]);

  const removeProductFromCart = useCallback(
    productItem => {
      const productInCart = items.find(item => productItem.name === item.name);

      if (productInCart) {
        const productIndex = items.indexOf(productInCart);

        const newItems = [...items];

        newItems.splice(productIndex, 1);

        setItems(newItems);

        return 0;
      }

      return null;
    },
    [items, setItems]
  );

  return (
    <CartContext.Provider value={{ addProductInCart, removeProductFromCart }}>
      {children}
    </CartContext.Provider>
  );
});

export { CartProvider, CartContext };
