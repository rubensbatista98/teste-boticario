import React from "react";

import "./styles.css";

const ButtonMenu = ({ hanldeClick }) => {
  return (
    <button type="button" className="btn-menu" onClick={hanldeClick}>
      <svg
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path d="M2 13.5h14V12H2v1.5zm0-4h14V8H2v1.5zM2 4v1.5h14V4H2z" />
      </svg>
    </button>
  );
};

export default React.memo(ButtonMenu);
