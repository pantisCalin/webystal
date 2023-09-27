import "./Navigation.css";

import logoWeb from "./logo.svg";
import logoPF from "./BrightLogo.svg";

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="logoDiv">
        <img src={logoWeb} height="30px" />
        <span className="webyTitle">Webystall</span>
      </div>
      <div className="logoDiv">
        <span className="empBy">
          Empowered & <br />
          sustained by
        </span>
        <a href="https://playfair-online-graphs.github.io/">
          <img src={logoPF} height="30px" />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
