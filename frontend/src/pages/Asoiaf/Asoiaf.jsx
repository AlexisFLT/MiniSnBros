import Navbar from "@components/Navbar/Navbar";
import Neutral from "@components/Neutral/Neutral";
import Targaryen from "@components/Targaryen/Targaryen";
import "./style.scss";

export default function Asoiaf() {
  return (
    <section className="asoiafPage">
      <Navbar />
      <h1 className="titlePage">A Song Of Ice & Fire - Miniatures</h1>
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
