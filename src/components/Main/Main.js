import "./Main.scss";
import Navbar from "../NavBar/NavBar";

function Accueil() {
  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <h1 className="main-title">Bienvenue</h1>
        <p className="main-description">
          lorem ipsum dolor sit amet, consect lorem lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum d
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum d
          lorem ipsum d
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

export default Accueil;
