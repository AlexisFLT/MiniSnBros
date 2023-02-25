import Navbar from "@components/Navbar/Navbar";
import Neutral from "@components/Neutral/Neutral";
import Targaryen from "@components/Targaryen/Targaryen";
// import { useState } from "react";
// import AsoiafModal from "src/modal/AsoiafModal/AsoiafModal";
import "./style.scss";

export default function Asoiaf() {
  // const [show, setShow] = useState(false);
  return (
    <section className="asoiafPage">
      <Navbar />
      <h1 className="titlePage">A Song Of Ice & Fire - Miniatures</h1>
      <div className="asoiafModal">
        <button
          type="button"
          className="instrucButton"
          // onClick={() => setShow(true)}
        >
          En savoir plus sur ce jeu
        </button>
        {/* <AsoiafModal onClose={() => setShow(false)} show={show} /> */}
      </div>
      <section className="Gallery">
        <div className="targaryen">
          <Targaryen />
        </div>
        <div className="neutral">
          <Neutral />
        </div>
      </section>
    </section>
  );
}
