import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // toggle menu-icon handler
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  // gère le bouton s'enregistrer pour les petits ecrans
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // empeche le button "s'enregistrer" de revenir au refresh dans la navBar sur les petits ecrans
  useEffect(() => {
    showButton();
  }, []);

  // quand on resize le screen on passe par showButton() pour gérer le bouton
  window.addEventListener("resize", showButton);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Rémi Caradec
            <i className="fab fa-reacteurope fa-spin slow-spin" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects "
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Réalisations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/formation"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Formation
              </Link>
            </li>
          </ul>
          {button && <Button buttonstyle="btn--outline">S'enregistrer</Button>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
