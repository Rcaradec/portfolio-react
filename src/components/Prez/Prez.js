import About from "../About/About";
import "./Prez.scss";

function Prez() {
  return (
    <div className="prez">
      <div className="prez-img">
        <img className="prez-img" src="/images/remi_h2.jpg"></img>
      </div>
      <About />
    </div>
  );
}

export default Prez;
