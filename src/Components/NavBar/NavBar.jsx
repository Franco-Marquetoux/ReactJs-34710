import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <a href="http://">
          <li>Inicio</li>
        </a>
        <a href="http://">
          <li>Quienes Somos</li>
        </a>
        <a href="https://">
          <li>Donde Estamos</li>
        </a>
        <a href="https://">
          <li>Ayuda</li>
        </a>
        <CartWidget />;
      </ul>
    </div>
  );
}
export default NavBar;
