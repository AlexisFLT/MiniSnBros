import { useContext, useState, useMemo } from "react";
import Guardians from "@components/Guardians/Guardians";
import Navbar from "@components/Navbar/Navbar";
import ImgContext from "@services/Context/ImgContext";
import MarvelCPModal from "../../modal/MarvelCPModal/MarvelCPModal";
import "./style.scss";

export default function MarvelCP() {
  const [show, setShow] = useState(false);
  const { mcp } = useContext(ImgContext);
  const mcpMemo = useMemo(() => ({ mcp }), [mcp]);

  return (
    <section className="mcpPage">
      <Navbar />
      <h1 className="titlePage">Marvel Crisis Protocol</h1>
      <div className="mcpModal">
        <MarvelCPModal
          className="mcpM"
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
        <div className="guardians">
          <ImgContext.Provider value={mcpMemo}>
            <Guardians />
          </ImgContext.Provider>
        </div>
        {/* <div className="asgard">
          <Asgard />
        </div> */}
      </section>
    </section>
  );
}
