import { Link } from "react-router-dom";
import "./style.scss";

export default function Navbar() {
  return (
    <nav className="navBar">
      <div id="menuContainer">
        <ul className="menuMain">
          <Link to="/" className="navHome linkMenu">
            <li className="navHomeText">
              <p>Home</p>
            </li>
          </Link>
          <Link to="/about" className="navAbout linkMenu">
            <li className="navAboutText">
              <p>About</p>
            </li>
          </Link>
          <div className="navGalerie linkMenu">
            <li className="navGalerieText">
              <p className="navGalerieText">Galerie</p>
              <div className="subMenu">
                <ul id="submenu">
                  <Link to="/asoiafminiatures" className="subText">
                    <li className="text">
                      <p>Asoiaf</p>
                    </li>
                  </Link>
                  <Link to="/marvelcp" className="subText">
                    <li>
                      <p>Marvel CP</p>
                    </li>
                  </Link>
                  <Link to="/swlegion" className="subText">
                    <li>
                      <p>SW Legion</p>
                    </li>
                  </Link>
                  <Link to="/divers" className="subText">
                    <li>
                      <p>Figurines Diverses</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
          </div>
          <Link to="/battlereport" className="navBR linkMenu">
            <li className="navBRText">
              <p>Battle Report</p>
            </li>
          </Link>
          <Link to="/contact" className="navBR linkMenu">
            <li className="navBRText">
              <p>Contactez moi</p>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
