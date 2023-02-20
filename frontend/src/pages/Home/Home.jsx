import { TbClick } from "react-icons/tb";
import Logo from "@components/Logo/Logo";
import blob from "../../assets/blob/blob1.svg";
import blob1 from "../../assets/blob/blob4.svg";
import blob2 from "../../assets/blob/blob3.svg";
import "./style.scss";

export default function Home() {
  return (
    <div className="homePage">
      <img className="blobBg" src={blob} alt="blob" />
      <img className="blobBg2" src={blob1} alt="blob" />
      <img className="blobBg3" src={blob2} alt="blob" />
      <section className="imageLogo">
        <div className="logoBlock">
          <Logo className="logo" />
        </div>
        <p /* href={<About />} */ className="clickHere">
          Cliquez <TbClick className="iconClick" /> ici
        </p>
      </section>
    </div>
  );
}
