import { Routes, Route } from "react-router-dom";
import About from "@pages/About/About";
import Asoiaf from "@pages/Asoiaf/Asoiaf";
import MarvelCP from "@pages/MarvelCP/MarvelCP";
import SwLegion from "@pages/SwLegion/SwLegion";
import Home from "./pages/Home/Home";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/asoiafminiatures" element={<Asoiaf />} />
      <Route path="/swlegion" element={<SwLegion />} />
      <Route path="/marvelcp" element={<MarvelCP />} />
      {/* <Route path="/divers" element={<Divers />} /> */}
      {/* <Route path="/battlereport" element={<Battlereport />} /> */}
    </Routes>
  );
}

export default App;
