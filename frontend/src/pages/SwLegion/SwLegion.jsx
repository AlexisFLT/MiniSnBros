import { useState } from "react";
import Rebels from "@components/Rebels/Rebels";
import Navbar from "@components/Navbar/Navbar";
import SWLModal from "../../modal/SWLModal/SWLModal";
import "./style.scss";

export default function SwLegion() {
  const [show, setShow] = useState(false);

  return (
    <section className="swlPage">
      <Navbar />
      <h1 className="titlePage">Star Wars Legion</h1>
      <div className="swlModal">
        <SWLModal className="swlM" onClose={() => setShow(false)} show={show} />
      </div>
      <button
        type="button"
        className="learnMoreButton"
        onClick={() => setShow(true)}
      >
        En savoir plus sur ce jeu
      </button>
      <section className="Gallery">
        <div className="rebels">
          <Rebels />
        </div>
        {/* <div className="asgard">
          <Asgard />
        </div> */}
      </section>
    </section>
  );
}
