import * as React from "react";

import Navbar from "../src/components/NavBar/NavBar";
import Main from "../src/components/Main/Main";
import Prez from "../src/components/Prez/Prez";
import Projects from "../src/components/Projects/Projects";

import Button from "../src/components/Button/Button";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/_reset.scss";
import "./styles/App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
        <Prez />
        <Projects />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
