import React, { useState, useCallback, useRef, useContext } from "react";

import { CartContext } from "../../context/CartContext";

import "./styles.css";

const ProductCard = ({ product }) => {
  const { addProductInCart, removeProductFromCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const cardRef = useRef();

  const showHandleCart = useCallback(event => {
    cardRef.current.classList.add("-show");
  }, []);

  const hideHandleCart = useCallback(event => {
    cardRef.current.classList.remove("-show");
  }, []);

  const addInCart = useCallback(
    event => {
      const { name, value } = product;

      const quantityInCart = addProductInCart({ name, value });

      setQuantity(quantityInCart);
    },
    [product, addProductInCart]
  );

  const removeFromCart = useCallback(
    event => {
      const { name, value } = product;

      const quantityInCart = removeProductFromCart({ name, value });

      if (quantityInCart !== null) {
        setQuantity(quantityInCart);
      }
    },
    [product, removeProductFromCart]
  );

  return (
    <div className="product-card" ref={cardRef}>
      <a href="/" onFocus={showHandleCart} onClick={e => e.preventDefault()}>
        <div className="thumb">
          <img src={product.images[0].imageUrl} alt="Imagem da oferta" />
        </div>

        <h2 className="title">{product.name}</h2>
        <h3 className="price">R$ {product.value}</h3>

        <div className="handle-cart">
          <button type="button" className="btn-close" onClick={hideHandleCart}>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </button>

          <button type="button" className="btn -add" onClick={addInCart}>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" />
            </svg>

            <span className="quantity">{quantity}</span>
          </button>

          <button
            type="button"
            className="btn -remove"
            onClick={removeFromCart}
          >
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </div>
      </a>
    </div>
  );
};

export default React.memo(ProductCard);
