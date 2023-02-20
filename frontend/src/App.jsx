import { Routes, Route } from "react-router-dom";
import About from "@pages/About/About";
import Home from "./pages/Home/Home";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
