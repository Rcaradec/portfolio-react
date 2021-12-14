import * as React from "react";
import Navbar from "../src/components/NavBar/NavBar";
import Accueil from "../src/components/Accueil/Accueil";
import Button from "../src/components/Button/Button";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/reset.scss";
//import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Accueil />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
