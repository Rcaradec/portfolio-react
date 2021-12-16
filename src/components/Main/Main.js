import "./Main.scss";
import Navbar from "../NavBar/NavBar";

function Main() {
  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <h1 className="main-title">Rémi Caradec</h1>
        <p className="main-description">
          Bonjour et bienvenue sur ce site qui a pour but de me présenter et de
          vous proposer les différents projets que j'ai réalisé.
        </p>
        <div className="main-icons">
          <a>
            <i class="fab fa-linkedin-in"></i>
          </a>{" "}
          <a>
            <i class="fab fa-twitter"></i>
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default Main;
