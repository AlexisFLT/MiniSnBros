import blob from "../../assets/blob/blob1.svg";
import blob1 from "../../assets/blob/blob4.svg";
import blob2 from "../../assets/blob/blob3.svg";
import "./style.scss";

export default function About() {
  return (
    <section className="aboutPage">
      <div className="backgroundBlobs">
        <img className="blobBg" src={blob} alt="blob" />
        <img className="blobBg2" src={blob1} alt="blob" />
        <img className="blobBg3" src={blob2} alt="blob" />
      </div>
      <section className="aboutTextBlock">
        <h1 className="aboutTitle">À Propos</h1>
        <p className="paragraph1">
          Je suis Alexis, un amateur et passionné de peinture sur figurines. Je
          peins simplement à mon niveau avec pour objectif de parfaire les
          techniques. Je posséde également une imprimante 3D (pla) qui me permet
          d'imprimer décors et autres éléments afin d'égayer les socles et les
          tables de jeux. Je peins principalement des figurines A Song of Ice
          and Fire miniatures, Marvel Crisis Protocol, Star Wars Legion.
        </p>
        <p className="paragraph2">
          Mis à part vous faire découvrir ma passion, cette page a aussi un
          objectif plus personnel et professionnel car elle va me servir de
          terrain de jeu pour me perfectionner pour ma reconversion dans le
          developpement web. Si tu passes par là, un grand merci.
        </p>
      </section>
    </section>
  );
}
