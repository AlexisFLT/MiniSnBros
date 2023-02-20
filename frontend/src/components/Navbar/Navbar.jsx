import { useState } from "react";
import { Link } from "react-router-dom";
import underline from "../../assets/underline.png";
import "./style.scss";

export default function Navbar() {
  const [isActive, setIsActive] = useState("about");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //   const [isShown, setIsShown] = useState(false);

  const handleMouseOver = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  //   const handleUnderlineOver = () => {
  //     setIsShown(true);
  //   };

  //   const handleUnderlineLeave = () => {
  //     setIsShown(false);
  //   };

  return (
    <nav className="navBar">
      <ul className="navBarList">
        <Link to="/" className="navHome">
          <li className="navHomeText">
            <p>Home</p>
            {/* {isActive === "home" ? <img id="underline" className="" src={underline}/> : ""} */}
          </li>
        </Link>
        <Link to="/about" className="navAbout">
          <li className="navAboutText">
            <p>About</p>
            {isActive === "about" ? (
              <img
                id="underline"
                className=""
                src={underline}
                alt="underline"
              />
            ) : (
              ""
            )}
          </li>
        </Link>
        <li
          className="navGalerieText"
          onMouseOver={handleMouseOver}
          onFocus
          onMouseLeave={handleMouseLeave}
        >
          <button
            type="button"
            className="subtextTitle"
            onClick={() => setIsActive("galerie")}
          >
            Galerie
          </button>
          {isActive === "galerie" ? (
            <img id="underline" className="" src={underline} alt="underline" />
          ) : (
            ""
          )}
          {isDropdownOpen && (
            <ul id="submenu">
              <Link to="/asoiafminiatures" className="subText">
                <li className="text">Asoiaf</li>
              </Link>
              <Link to="/marvelcp" className="subText">
                <li>Marvel CP</li>
              </Link>
              <Link to="/swlegion" className="subText">
                <li>SW Legion</li>
              </Link>
              <Link to="/divers" className="subText">
                <li>Figurines Divers</li>
              </Link>
            </ul>
          )}
          {isActive === "galerie" ? (
            <img id="underline" className="" src={underline} alt="underline" />
          ) : (
            ""
          )}
        </li>
        <Link
          to="/battlereport"
          className="navBR"
          onClick={() => setIsActive("battleReport")}
        >
          <li className="navBRText">
            <p>Battle Report</p>
            {isActive === "battleReport" ? (
              <img
                id="underline"
                className=""
                src={underline}
                alt="underline"
              />
            ) : (
              ""
            )}
          </li>
        </Link>
      </ul>
    </nav>
  );
}
