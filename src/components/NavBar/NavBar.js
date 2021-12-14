import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

import "./NavBar.scss";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-li">Accueil</li>
          <li className="navbar-li">Formation</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
