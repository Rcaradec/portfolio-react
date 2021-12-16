import * as React from "react";
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";
import Prez from "../Prez/Prez";
import Contact from "../Contact/Contact";
//import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../../styles/_reset.scss";
import "../../styles/App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
        <Prez />
        <Contact />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
