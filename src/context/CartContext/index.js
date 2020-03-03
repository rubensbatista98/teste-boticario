import React, { useState, createContext, useCallback, useMemo } from "react";

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

  const totalPrice = useMemo(() => {
    const total = items.reduce((accumulator, item) => {
      return (accumulator += item.value * item.quantity);
    }, 0);

    return total;
  }, [items]);

  return (
    <CartContext.Provider
      value={{ addProductInCart, removeProductFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
});

export { CartProvider, CartContext };
