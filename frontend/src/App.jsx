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

import drogonRecto from "./assets/CartesTDF/Drogon/drogonRecto.jpg";
import drogonVerso from "./assets/CartesTDF/Drogon/drogonVerso.jpg";

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
      id: 26,
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
