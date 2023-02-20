import { TbClick } from "react-icons/tb";
import Logo from "@components/Logo/Logo";
import { Link } from "react-router-dom";
import blob from "../../assets/blob/blob1.svg";
import blob1 from "../../assets/blob/blob4.svg";
import blob2 from "../../assets/blob/blob3.svg";
import "./style.scss";

export default function Home() {
  return (
    <div id="mainPage">
      <section className="homePage">
        <img className="blobBg" src={blob} alt="blob" />
        <img className="blobBg2" src={blob1} alt="blob" />
        <img className="blobBg3" src={blob2} alt="blob" />
        <section className="imageLogo">
          <div className="logoBlock">
            <Logo className="logo" />
          </div>
          <Link to="/about" className="clickHere">
            Cliquez <TbClick className="iconClick" /> ici
          </Link>
        </section>
      </section>
    </div>
  );
}
