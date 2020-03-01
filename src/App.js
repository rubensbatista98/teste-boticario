import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useRef
} from "react";

import "./global.css";
import "./styles.css";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener("resize", updateSize);

    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
}

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef(null);

  const [width] = useWindowSize();

  const handleBtnMenuClick = useCallback(() => {
    navRef.current.classList.toggle("-open");
  }, []);

  const handleCartClick = useCallback(event => {
    event.preventDefault();
  }, []);

  const handleCardClick = useCallback(event => {
    event.preventDefault();

    event.currentTarget.parentNode.classList.add("-show");
  }, []);

  useEffect(() => {
    if (width <= 750 && !isVisible) {
      setIsVisible(true);
    }

    if (width > 750 && isVisible) {
      setIsVisible(false);
    }
  }, [width, isVisible]);

  return (
    <>
      <header className="header-page">
        <h1 className="logo">Minha Loja</h1>

        <nav className="navigation-menu" ref={navRef}>
          <a href="/" className="action">
            Perfumaria
          </a>
          <a href="/" className="action">
            Maquiagem
          </a>
          <a href="/" className="action">
            Cabelos
          </a>
          <a href="/" className="action">
            Infantil
          </a>
        </nav>

        {isVisible && (
          <button
            type="button"
            className="btn-menu"
            onClick={handleBtnMenuClick}
          >
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
            >
              <path d="M2 13.5h14V12H2v1.5zm0-4h14V8H2v1.5zM2 4v1.5h14V4H2z" />
            </svg>
          </button>
        )}

        <div className="cart-container">
          <a href="/" className="cart" onClick={handleCartClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span className="count">R$ 40,00</span>
          </a>
        </div>
      </header>

      <main>
        <section className="products-section">
          <div className="product-card">
            <a href="/" onClick={handleCardClick}>
              <div className="thumb">
                <img
                  src="https://boticario.vteximg.com.br/arquivos/ids/195945/Crazy_Feelings_Desodorante_Colonia_Boticollection_100ml_71877_frontal.jpg?v=636760814659370000"
                  alt="Imagem da oferta"
                />
              </div>

              <h2 className="title">Nome do Produto</h2>
              <h3 className="price">R$ 00,00</h3>

              <div className="product-cart">
                <button type="button" className="btn -add">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" />
                  </svg>
                </button>

                <button type="button" className="btn -remove">
                  <svg
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

          <div className="product-card">
            <a href="/" onClick={handleCardClick}>
              <div className="thumb">
                <img
                  src="https://boticario.vteximg.com.br/arquivos/ids/195945/Crazy_Feelings_Desodorante_Colonia_Boticollection_100ml_71877_frontal.jpg?v=636760814659370000"
                  alt="Imagem da oferta"
                />
              </div>

              <h2 className="title">Nome do Produto</h2>
              <h3 className="price">R$ 00,00</h3>
            </a>
          </div>

          <div className="product-card">
            <a href="/" onClick={handleCardClick}>
              <div className="thumb">
                <img
                  src="https://boticario.vteximg.com.br/arquivos/ids/195945/Crazy_Feelings_Desodorante_Colonia_Boticollection_100ml_71877_frontal.jpg?v=636760814659370000"
                  alt="Imagem da oferta"
                />
              </div>

              <h2 className="title">Nome do Produto</h2>
              <h3 className="price">R$ 00,00</h3>
            </a>
          </div>

          <div className="product-card">
            <div className="thumb">
              <img
                src="https://boticario.vteximg.com.br/arquivos/ids/195945/Crazy_Feelings_Desodorante_Colonia_Boticollection_100ml_71877_frontal.jpg?v=636760814659370000"
                alt="Imagem da oferta"
              />
            </div>

            <h2 className="title">Nome do Produto</h2>
            <h3 className="price">R$ 00,00</h3>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
