/* eslint-disable react/jsx-no-constructed-context-values */
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ImgContext from "./services/Context/ImgContext";
import About from "./pages/About/About";
import Asoiaf from "./pages/Asoiaf/Asoiaf";
import MarvelCP from "./pages/MarvelCP/MarvelCP";
import SwLegion from "./pages/SwLegion/SwLegion";
import Various from "./pages/Various/Various";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

// Minis TDF Import //

import drogon from "./assets/figurines/sansFond/TDF/drogon.png";
import raeghal from "./assets/figurines/sansFond/TDF/raeghal.png";
import viserion from "./assets/figurines/sansFond/TDF/viserion.png";
import greyworm from "./assets/figurines/sansFond/TDF/greyworm.png";
import belwas from "./assets/figurines/sansFond/TDF/belwas.png";
import selmy from "./assets/figurines/sansFond/TDF/selmy.png";
import xaro from "./assets/figurines/sansFond/TDF/xaro.png";
import illyrio from "./assets/figurines/sansFond/TDF/illyrio.png";
import jorah from "./assets/figurines/sansFond/TDF/jorah.png";
import swordmasters from "./assets/figurines/sansFond/TDF/swordmaster.png";
import pikemen from "./assets/figurines/sansFond/TDF/pikemen.png";
import mercenaries from "./assets/figurines/sansFond/TDF/mercenaries.png";
import archers from "./assets/figurines/sansFond/TDF/archers.png";
import hrakkars from "./assets/figurines/sansFond/TDF/hrakkars.png";
import bloodriders from "./assets/figurines/sansFond/TDF/bloodriders.png";
import screamers from "./assets/figurines/sansFond/TDF/screamer.png";

import baelish from "./assets/figurines/sansFond/TDF/baelish.png";
import tycho from "./assets/figurines/sansFond/TDF/tycho.png";
import varys from "./assets/figurines/sansFond/TDF/varys.png";
import blackguards from "./assets/figurines/sansFond/TDF/BG.png";
import flayed from "./assets/figurines/sansFond/TDF/FM.png";
import flayed2 from "./assets/figurines/sansFond/TDF/FM2.png";
import flayedFL from "./assets/figurines/sansFond/TDF/FMflank.png";
import hedgeK from "./assets/figurines/sansFond/TDF/HK2.png";
import hedgeK2 from "./assets/figurines/sansFond/TDF/HK3.png";
import hedgeK3 from "./assets/figurines/sansFond/TDF/HK4.png";

// Cards TDF Import //

import drogonRecto from "./assets/CartesTDF/Targaryen/drogonRecto.jpg";
import drogonVerso from "./assets/CartesTDF/Targaryen/drogonVerso.jpg";
import raeghalRecto from "./assets/CartesTDF/Targaryen/rhaegalRecto.jpg";
import raeghalVerso from "./assets/CartesTDF/Targaryen/rhaegalVerso.jpg";
import viserionRecto from "./assets/CartesTDF/Targaryen/viserionRecto.jpg";
import viserionVerso from "./assets/CartesTDF/Targaryen/viserionVerso.jpg";
import archersRecto from "./assets/CartesTDF/Targaryen/archersRecto.jpg";
import archersVerso from "./assets/CartesTDF/Targaryen/archersVerso.jpg";
import mercenariesRecto from "./assets/CartesTDF/Targaryen/mercenariesRecto.jpg";
import mercenariesVerso from "./assets/CartesTDF/Targaryen/mercenariesVerso.jpg";
import bloodRecto from "./assets/CartesTDF/Targaryen/bloodRecto.jpg";
import bloodVerso from "./assets/CartesTDF/Targaryen/bloodVerso.jpg";
import swordmRecto from "./assets/CartesTDF/Targaryen/swordRecto.jpg";
import swordmVerso from "./assets/CartesTDF/Targaryen/swordVerso.jpg";
import pikemenRecto from "./assets/CartesTDF/Targaryen/pikemenRecto.jpg";
import pikemenVerso from "./assets/CartesTDF/Targaryen/pikemenVerso.jpg";
import screamerRecto from "./assets/CartesTDF/Targaryen/screamerRecto.jpg";
import screamerVerso from "./assets/CartesTDF/Targaryen/screamerVerso.jpg";
import hrakRecto from "./assets/CartesTDF/Targaryen/hrakRecto.jpg";
import hrakVerso from "./assets/CartesTDF/Targaryen/hrakVerso.jpg";
import belwasRecto from "./assets/CartesTDF/Targaryen/belwasRecto.jpg";
import belwasVerso from "./assets/CartesTDF/Targaryen/belwasVerso.jpg";
import selmyRecto from "./assets/CartesTDF/Targaryen/selmyRecto.jpg";
import selmyVerso from "./assets/CartesTDF/Targaryen/selmyVerso.jpg";
import greywRecto from "./assets/CartesTDF/Targaryen/greywRecto.jpg";
import greywVerso from "./assets/CartesTDF/Targaryen/greywVerso.jpg";
import jorahRecto from "./assets/CartesTDF/Targaryen/jorahRecto.jpg";
import jorahVerso from "./assets/CartesTDF/Targaryen/jorahVerso.jpg";
import xaroRecto from "./assets/CartesTDF/Targaryen/xaroRecto.jpg";
import xaroVerso from "./assets/CartesTDF/Targaryen/xaroVerso.jpg";
import illyrioRecto from "./assets/CartesTDF/Targaryen/illyrioRecto.jpg";
import illyrioVerso from "./assets/CartesTDF/Targaryen/illyrioVerso.jpg";

import bgRecto from "./assets/CartesTDF/Neutral/bgRecto.jpg";
import bgVerso from "./assets/CartesTDF/Neutral/bgVerso.jpg";
import hkRecto from "./assets/CartesTDF/Neutral/hkRecto.jpg";
import hkVerso from "./assets/CartesTDF/Neutral/hkVerso.jpg";
import fmRecto from "./assets/CartesTDF/Neutral/fmRecto.jpg";
import fmVerso from "./assets/CartesTDF/Neutral/fmVerso.jpg";
import petyrRecto from "./assets/CartesTDF/Neutral/petyrRecto.jpg";
import petyrVerso from "./assets/CartesTDF/Neutral/petyrVerso.jpg";
import tychoRecto from "./assets/CartesTDF/Neutral/tychoRecto.jpg";
import tychoVerso from "./assets/CartesTDF/Neutral/tychoVerso.jpg";
import varysRecto from "./assets/CartesTDF/Neutral/varysRecto.jpg";
import varysVerso from "./assets/CartesTDF/Neutral/varysVerso.jpg";

// Minis MCP import //

import groot from "./assets/figurines/sansFond/MCP/Groot.png";
import rocket from "./assets/figurines/sansFond/MCP/rocket1.png";
import rocket2 from "./assets/figurines/sansFond/MCP/rocket2.png";
import starlordF from "./assets/figurines/sansFond/MCP/starlordF.png";
import starlordB from "./assets/figurines/sansFond/MCP/starlordB.png";

// MCP Cards //

import grootH from "./assets/CartesMCP/groot.png";
import grootI from "./assets/CartesMCP/grootKO.png";
import rocketH from "./assets/CartesMCP/rocket.png";
import rocketI from "./assets/CartesMCP/rocketKO.png";
import starlordH from "./assets/CartesMCP/starlord.png";
import starlordI from "./assets/CartesMCP/starlordKO.png";

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
      recto: `${tychoRecto}`,
      verso: `${tychoVerso}`,
      character: true,
    },
    {
      id: 19,
      src: `${baelish}`,
      name: "Petyr Baelish",
      subname: "LITTLEFINGER",
      recto: `${petyrRecto}`,
      verso: `${petyrVerso}`,
      character: true,
    },
    {
      id: 20,
      src: `${varys}`,
      name: "Lord Varys",
      subname: "THE SPIDER",
      recto: `${varysRecto}`,
      verso: `${varysVerso}`,
      character: true,
    },
    {
      id: 21,
      src: `${blackguards}`,
      name: "House Bolton Blackguards",
      recto: `${bgRecto}`,
      verso: `${bgVerso}`,
    },
    {
      id: 22,
      src: `${flayed}`,
      name: "House Bolton Flayed Men",
      recto: `${fmRecto}`,
      verso: `${fmVerso}`,
    },
    {
      id: 23,
      src: `${flayed2}`,
      name: "House Bolton Flayed Men ",
      subname: "(zoom)",
      recto: `${fmRecto}`,
      verso: `${fmVerso}`,
    },
    {
      id: 24,
      src: `${flayedFL}`,
      name: "House Bolton Flayed Men ",
      subname: "(Flank)",
      recto: `${fmRecto}`,
      verso: `${fmVerso}`,
    },
    {
      id: 25,
      src: `${hedgeK}`,
      name: "Hedge Knights",
      recto: `${hkRecto}`,
      verso: `${hkVerso}`,
    },
    {
      id: 26,
      src: `${hedgeK2}`,
      name: "Hedge Knights",
      subname: "(Flank)",
      recto: `${hkRecto}`,
      verso: `${hkVerso}`,
    },
    {
      id: 27,
      src: `${hedgeK3}`,
      name: "Hedge Knights",
      subname: "(Flank & Zoom)",
      recto: `${hkRecto}`,
      verso: `${hkVerso}`,
    },
  ]);
  const [mcp] = useState([
    {
      id: 1,
      name: "Groot",
      subname: "I am Groot",
      srcF: `${groot}`,
      healthy: `${grootH}`,
      injured: `${grootI}`,
    },
    {
      id: 2,
      name: "Rocket Raccoon",
      subname: "Rocket Raccoon",
      srcF: `${rocket}`,
      srcB: `${rocket2}`,
      healthy: `${rocketH}`,
      injured: `${rocketI}`,
    },
    {
      id: 3,
      name: "Star-Lord",
      subname: "Peter Quill",
      srcF: `${starlordF}`,
      srcB: `${starlordB}`,
      healthy: `${starlordH}`,
      injured: `${starlordI}`,
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

      <Route
        path="/marvelcp"
        element={
          <ImgContext.Provider value={{ mcp }}>
            <MarvelCP />
          </ImgContext.Provider>
        }
      />

      <Route path="/divers" element={<Various />} />
      {/* <Route path="/battlereport" element={<Battlereport />} /> */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
