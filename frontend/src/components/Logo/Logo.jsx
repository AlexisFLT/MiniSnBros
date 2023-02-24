import logo from "../../assets/logo.png";
import "./style.scss";

export default function Logo() {
  return (
    <div>
      <img className="mainLogo" src={logo} alt="Minis&Bros" />
    </div>
  );
}
