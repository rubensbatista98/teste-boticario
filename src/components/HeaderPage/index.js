import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect
} from "react";

import Cart from "../Cart";
import ButtonMenu from "../ButtonMenu";

import "./styles.css";

const HeaderPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef(null);
  const [width] = useWindowSize();

  const hanldeClick = useCallback(() => {
    navRef.current.classList.toggle("-open");
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

      {isVisible && <ButtonMenu hanldeClick={hanldeClick} />}

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

      <Cart total="00,00" />
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

export default React.memo(HeaderPage);
