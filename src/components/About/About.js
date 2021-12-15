import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

import "./About.scss";

function About() {
  return (
    <div className="about">
      <h2 className="about-title">A propos</h2>
      <p className="about-description">
        lorem ipsum dolor sit amet lorem, consectetur adipiscing elit lorem, sed
        do eiusmod tempor incidid
      </p>
      <button className="about-btn">En savoir plus</button>
    </div>
  );
}

export default About;
