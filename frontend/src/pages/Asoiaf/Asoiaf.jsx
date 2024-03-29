import { useContext, useState, useMemo } from "react";
// import { ImImages } from "react-icons/im";
import Navbar from "@components/Navbar/Navbar";
import Neutral from "@components/Neutral/Neutral";
import Targaryen from "@components/Targaryen/Targaryen";
import ImgContext from "../../services/Context/ImgContext";
import AsoiafModal from "../../modal/AsoiafModal/AsoiafModal";
import "./style.scss";

export default function Asoiaf() {
  const [show, setShow] = useState(false);
  const { asoiaf } = useContext(ImgContext);
  const asoaifMemo = useMemo(() => ({ asoiaf }), [asoiaf]);

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
          <ImgContext.Provider value={asoaifMemo}>
            <Targaryen />
          </ImgContext.Provider>
        </div>
        <div className="neutral">
          <ImgContext.Provider value={asoaifMemo}>
            <Neutral />
          </ImgContext.Provider>
        </div>
      </section>
    </section>
  );
}
