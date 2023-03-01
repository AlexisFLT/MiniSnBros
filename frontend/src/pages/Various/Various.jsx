import Navbar from "@components/Navbar/Navbar";
import VariousMinis from "@components/VariousMinis/VariousMinis";
import "./style.scss";

export default function Various() {
  return (
    <section className="variousPage">
      <Navbar />
      <h1 className="titlePage">Figurines Diverses</h1>
      <section className="Gallery">
        <div className="various">
          <VariousMinis />
        </div>
      </section>
    </section>
  );
}
