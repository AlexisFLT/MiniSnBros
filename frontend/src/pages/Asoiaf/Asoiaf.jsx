/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
// import { ImImages } from "react-icons/im";
import Navbar from "@components/Navbar/Navbar";
import Neutral from "@components/Neutral/Neutral";
import Targaryen from "@components/Targaryen/Targaryen";
import ImgContext from "../../services/Context/ImgContext";
import AsoiafModal from "../../modal/AsoiafModal/AsoiafModal";
import drogon from "../../assets/figurines/sans fond/drogon.png";
import raeghal from "../../assets/figurines/sans fond/raeghal.png";
import viserion from "../../assets/figurines/sans fond/viserion.png";
import greyworm from "../../assets/figurines/sans fond/greyworm.png";
import belwas from "../../assets/figurines/sans fond/belwas.png";
import selmy from "../../assets/figurines/sans fond/selmy.png";
import xaro from "../../assets/figurines/sans fond/xaro.png";
import illyrio from "../../assets/figurines/sans fond/illyrio.png";
import jorah from "../../assets/figurines/sans fond/jorah.png";
import swordmasters from "../../assets/figurines/sans fond/swordmaster.png";
import pikemen from "../../assets/figurines/sans fond/pikemen.png";
import mercenaries from "../../assets/figurines/sans fond/mercenaries.png";
import archers from "../../assets/figurines/sans fond/archers.png";
import hrakkars from "../../assets/figurines/sans fond/hrakkars.png";
import bloodriders from "../../assets/figurines/sans fond/bloodriders.png";
import screamers from "../../assets/figurines/sans fond/screamer.png";

import "./style.scss";

export default function Asoiaf() {
  const [show, setShow] = useState(false);
  const [images] = useState([
    {
      id: 1,
      src: `${drogon}`,
      name: "Drogon",
    },
    {
      id: 2,
      src: `${raeghal}`,
      name: "Raeghal",
    },
    {
      id: 3,
      src: `${viserion}`,
      name: "Viserion",
    },
    {
      id: 4,
      src: `${greyworm}`,
      name: "Grey Worm",
      subname: "UNSULLIED COMMANDER",
    },
    {
      id: 5,
      src: `${belwas}`,
      name: "Belwas",
      subname: "THE STRONG",
    },
    {
      id: 6,
      src: `${selmy}`,
      name: "Barristan Selmy",
      subname: "THE BOLD",
    },
    {
      id: 7,
      src: `${xaro}`,
      name: "Xaro Xhoan Daxos",
      subname: "MERCHANT PRINCE OF QARTH",
    },
    {
      id: 8,
      src: `${illyrio}`,
      name: "Illyrio Mopatis",
      subname: "MAGISTER OF PENTOS",
    },
    {
      id: 10,
      src: `${jorah}`,
      name: "Jorah Mormont",
      subname: "THE WANDERING KNIGHT",
    },
    {
      id: 11,
      src: `${swordmasters}`,
      name: "Unsullied Swordmasters",
    },
    {
      id: 12,
      src: `${pikemen}`,
      name: "Unsullied Pikemen",
    },
    {
      id: 13,
      src: `${mercenaries}`,
      name: "Stormcrow Mercenaries",
    },
    {
      id: 14,
      src: `${archers}`,
      name: "Stormcrow Archers",
    },
    {
      id: 15,
      src: `${hrakkars}`,
      name: "Dothraki Hrakkars",
    },
    {
      id: 16,
      src: `${bloodriders}`,
      name: "Drogos' Bloodriders",
    },
    {
      id: 17,
      src: `${screamers}`,
      name: "Dothraki Screamers",
    },
  ]);

  return (
    <section className="asoiafPage">
      <Navbar />
      <h1 className="titlePage">A Song Of Ice & Fire - Miniatures</h1>
      <div className="asoiafModal">
        <AsoiafModal
          className="AsoaifM"
          onClose={() => setShow(false)}
          show={show}
        />
      </div>
      <button
        type="button"
        className="learnMoreButton"
        onClick={() => setShow(true)}
      >
        En savoir plus sur ce jeu
      </button>
      <section className="Gallery">
        <div className="targaryen">
          <ImgContext.Provider value={{ images }}>
            <Targaryen />
          </ImgContext.Provider>
        </div>
        <div className="neutral">
          <Neutral />
        </div>
      </section>
    </section>
  );
}
