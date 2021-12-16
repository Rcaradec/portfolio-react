import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

import "./About.scss";

function About() {
  return (
    <div className="about">
      <h2 className="about-title">A propos</h2>
      <p className="about-description">
        Après une dizaine d'année dans l'Audiovisuel, de la lumière à la caméra,
        j'ai décidé de mettre à profit cette sensibilité pour l'image au service
        de ma passion pour le développement Web.
      </p>
      <button className="about-btn">En savoir plus</button>
    </div>
  );
}

export default About;
