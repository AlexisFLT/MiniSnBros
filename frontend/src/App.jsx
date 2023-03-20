/* eslint-disable react/jsx-no-constructed-context-values */
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ImgContext from "@services/Context/ImgContext";
import About from "@pages/About/About";
import Asoiaf from "@pages/Asoiaf/Asoiaf";
import MarvelCP from "@pages/MarvelCP/MarvelCP";
import SwLegion from "@pages/SwLegion/SwLegion";
import Various from "@pages/Various/Various";
import Home from "./pages/Home/Home";

import drogon from "./assets/figurines/sans fond/drogon.png";
import raeghal from "./assets/figurines/sans fond/raeghal.png";
import viserion from "./assets/figurines/sans fond/viserion.png";
import greyworm from "./assets/figurines/sans fond/greyworm.png";
import belwas from "./assets/figurines/sans fond/belwas.png";
import selmy from "./assets/figurines/sans fond/selmy.png";
import xaro from "./assets/figurines/sans fond/xaro.png";
import illyrio from "./assets/figurines/sans fond/illyrio.png";
import jorah from "./assets/figurines/sans fond/jorah.png";
import swordmasters from "./assets/figurines/sans fond/swordmaster.png";
import pikemen from "./assets/figurines/sans fond/pikemen.png";
import mercenaries from "./assets/figurines/sans fond/mercenaries.png";
import archers from "./assets/figurines/sans fond/archers.png";
import hrakkars from "./assets/figurines/sans fond/hrakkars.png";
import bloodriders from "./assets/figurines/sans fond/bloodriders.png";
import screamers from "./assets/figurines/sans fond/screamer.png";

import baelish from "./assets/figurines/sans fond/baelish.png";
import tycho from "./assets/figurines/sans fond/tycho.png";
import varys from "./assets/figurines/sans fond/varys.png";
import blackguards from "./assets/figurines/sans fond/BG.png";
import flayed from "./assets/figurines/sans fond/FM.png";
import flayed2 from "./assets/figurines/sans fond/FM2.png";
import flayedFL from "./assets/figurines/sans fond/FMflank.png";
import hedgeK from "./assets/figurines/sans fond/HK2.png";
import hedgeK2 from "./assets/figurines/sans fond/HK3.png";
import hedgeK3 from "./assets/figurines/sans fond/HK4.png";

import drogonRecto from "./assets/CartesTDF/drogonRecto.jpg";
import drogonVerso from "./assets/CartesTDF/drogonVerso.jpg";
import raeghalRecto from "./assets/CartesTDF/rhaegalRecto.jpg";
import raeghalVerso from "./assets/CartesTDF/rhaegalVerso.jpg";
import viserionRecto from "./assets/CartesTDF/viserionRecto.jpg";
import viserionVerso from "./assets/CartesTDF/viserionVerso.jpg";
import archersRecto from "./assets/CartesTDF/archersRecto.jpg";
import archersVerso from "./assets/CartesTDF/archersVerso.jpg";
import mercenariesRecto from "./assets/CartesTDF/mercenariesRecto.jpg";
import mercenariesVerso from "./assets/CartesTDF/mercenariesVerso.jpg";
import bloodRecto from "./assets/CartesTDF/bloodRecto.jpg";
import bloodVerso from "./assets/CartesTDF/bloodVerso.jpg";
import swordmRecto from "./assets/CartesTDF/swordRecto.jpg";
import swordmVerso from "./assets/CartesTDF/swordVerso.jpg";
import pikemenRecto from "./assets/CartesTDF/pikemenRecto.jpg";
import pikemenVerso from "./assets/CartesTDF/pikemenVerso.jpg";
import screamerRecto from "./assets/CartesTDF/screamerRecto.jpg";
import screamerVerso from "./assets/CartesTDF/screamerVerso.jpg";
import hrakRecto from "./assets/CartesTDF/hrakRecto.jpg";
import hrakVerso from "./assets/CartesTDF/hrakVerso.jpg";
import belwasRecto from "./assets/CartesTDF/belwasRecto.jpg";
import belwasVerso from "./assets/CartesTDF/belwasVerso.jpg";
import selmyRecto from "./assets/CartesTDF/selmyRecto.jpg";
import selmyVerso from "./assets/CartesTDF/selmyVerso.jpg";
import greywRecto from "./assets/CartesTDF/greywRecto.jpg";
import greywVerso from "./assets/CartesTDF/greywVerso.jpg";
import jorahRecto from "./assets/CartesTDF/jorahRecto.jpg";
import jorahVerso from "./assets/CartesTDF/jorahVerso.jpg";
import xaroRecto from "./assets/CartesTDF/xaroRecto.jpg";
import xaroVerso from "./assets/CartesTDF/xaroVerso.jpg";
import illyrioRecto from "./assets/CartesTDF/illyrioRecto.jpg";
import illyrioVerso from "./assets/CartesTDF/illyrioVerso.jpg";

import "./App.scss";

function App() {
  const [asoiaf] = useState([
    {
      id: 1,
      src: `${drogon}`,
      name: "Drogon",
      recto: `${drogonRecto}`,
      verso: `${drogonVerso}`,
    },
    {
      id: 2,
      src: `${raeghal}`,
      name: "Raeghal",
      recto: `${raeghalRecto}`,
      verso: `${raeghalVerso}`,
    },
    {
      id: 3,
      src: `${viserion}`,
      name: "Viserion",
      recto: `${viserionRecto}`,
      verso: `${viserionVerso}`,
    },
    {
      id: 4,
      src: `${greyworm}`,
      name: "Grey Worm",
      subname: "UNSULLIED COMMANDER",
      recto: `${greywRecto}`,
      verso: `${greywVerso}`,
      character: true,
    },
    {
      id: 5,
      src: `${belwas}`,
      name: "Belwas",
      subname: "THE STRONG",
      recto: `${belwasRecto}`,
      verso: `${belwasVerso}`,
      character: true,
    },
    {
      id: 6,
      src: `${selmy}`,
      name: "Barristan Selmy",
      subname: "THE BOLD",
      recto: `${selmyRecto}`,
      verso: `${selmyVerso}`,
      character: true,
    },
    {
      id: 7,
      src: `${xaro}`,
      name: "Xaro Xhoan Daxos",
      subname: "MERCHANT PRINCE OF QARTH",
      recto: `${xaroRecto}`,
      verso: `${xaroVerso}`,
      character: true,
    },
    {
      id: 8,
      src: `${illyrio}`,
      name: "Illyrio Mopatis",
      subname: "MAGISTER OF PENTOS",
      recto: `${illyrioRecto}`,
      verso: `${illyrioVerso}`,
      character: true,
    },
    {
      id: 10,
      src: `${jorah}`,
      name: "Jorah Mormont",
      subname: "THE WANDERING KNIGHT",
      recto: `${jorahRecto}`,
      verso: `${jorahVerso}`,
    },
    {
      id: 11,
      src: `${swordmasters}`,
      name: "Unsullied Swordmasters",
      recto: `${swordmRecto}`,
      verso: `${swordmVerso}`,
    },
    {
      id: 12,
      src: `${pikemen}`,
      name: "Unsullied Pikemen",
      recto: `${pikemenRecto}`,
      verso: `${pikemenVerso}`,
    },
    {
      id: 13,
      src: `${mercenaries}`,
      name: "Stormcrow Mercenaries",
      recto: `${mercenariesRecto}`,
      verso: `${mercenariesVerso}`,
    },
    {
      id: 14,
      src: `${archers}`,
      name: "Stormcrow Archers",
      recto: `${archersRecto}`,
      verso: `${archersVerso}`,
    },
    {
      id: 15,
      src: `${hrakkars}`,
      name: "Dothraki Hrakkars",
      recto: `${hrakRecto}`,
      verso: `${hrakVerso}`,
    },
    {
      id: 16,
      src: `${bloodriders}`,
      name: "Drogos' Bloodriders",
      recto: `${bloodRecto}`,
      verso: `${bloodVerso}`,
    },
    {
      id: 17,
      src: `${screamers}`,
      name: "Dothraki Screamers",
      recto: `${screamerRecto}`,
      verso: `${screamerVerso}`,
    },
    {
      id: 18,
      src: `${tycho}`,
      name: "Tycho Nestoris",
      subname: "IRON BANKER",
    },
    {
      id: 19,
      src: `${baelish}`,
      name: "Petyr Baelish",
      subname: "LITTLEFINGER",
    },
    {
      id: 20,
      src: `${varys}`,
      name: "Lord Varys",
      subname: "THE SPIDER",
    },
    {
      id: 21,
      src: `${blackguards}`,
      name: "House Bolton Blackguards",
    },
    {
      id: 22,
      src: `${flayed}`,
      name: "House Bolton Flayed Men",
    },
    {
      id: 23,
      src: `${flayed2}`,
      name: "House Bolton Flayed Men ",
      subname: "(zoom)",
    },
    {
      id: 24,
      src: `${flayedFL}`,
      name: "House Bolton Flayed Men ",
      subname: "(Flank)",
    },
    {
      id: 25,
      src: `${hedgeK}`,
      name: "Hedge Knights",
    },
    {
      id: 26,
      src: `${hedgeK2}`,
      name: "Hedge Knights",
      subname: "(Flank)",
    },
    {
      id: 27,
      src: `${hedgeK3}`,
      name: "Hedge Knights",
      subname: "(Flank & Zoom)",
    },
  ]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/asoiafminiatures"
        element={
          <ImgContext.Provider value={{ asoiaf }}>
            <Asoiaf />
          </ImgContext.Provider>
        }
      />
      <Route path="/swlegion" element={<SwLegion />} />
      <Route path="/marvelcp" element={<MarvelCP />} />
      <Route path="/divers" element={<Various />} />
      {/* <Route path="/battlereport" element={<Battlereport />} /> */}
    </Routes>
  );
}

export default App;
