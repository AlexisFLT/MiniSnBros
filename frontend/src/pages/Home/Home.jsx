import Logo from "@components/Logo/Logo";
import blob from "../../assets/blob/blob1.svg";
// import blob1 from "../../assets/blob/blob2.svg";
import "./style.scss";

export default function Home() {
  return (
    <div className="homePage">
      <img className="blobBg" src={blob} alt="blob" />
      {/* <img className="blobBg2" src={blob1} alt="blob" /> */}
      <section className="imageLogo">
        <Logo className="logo " />
      </section>
    </div>
  );
}
