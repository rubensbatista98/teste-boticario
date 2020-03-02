import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect
} from "react";

import "./styles.css";

const HeaderPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef(null);

  const [width] = useWindowSize();

  const handleBtnMenuClick = useCallback(() => {
    navRef.current.classList.toggle("-open");
  }, []);

  const handleCartClick = useCallback(event => {
    event.preventDefault();
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
        <button type="button" className="btn-menu" onClick={handleBtnMenuClick}>
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
  );
};

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

export default HeaderPage;
