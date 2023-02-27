/* eslint-disable react/destructuring-assignment */
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import mcp from "../../assets/mcpLogo/mcp.png";
import atomic from "../../assets/mcpLogo/atomic.png";
import "./style.scss";

export default function MarvelCPModal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modalcontent">
        <Link to="https://www.atomicmassgames.com/" target="_blank">
          <img className="atomic" src={atomic} alt="AtomicMassGame logo" />
        </Link>
        <h1 className="modalTitle">À Propos du jeu</h1>
        <Link
          to="https://www.atomicmassgames.com/gallery-index"
          target="_blank"
        >
          <img className="mcpL" src={mcp} alt="Marvel Crisis Protocol logo" />
        </Link>
      </div>
      <div className="modalBody">
        <p className="resumeBlock">
          Marvel Crisis Protocol est un jeu de figurines tactique pour deux
          joueurs dans lequel les participants incarnent leurs héros préférés et
          s'affrontent sur un champ de bataille personnalisé.
          <br />
          Rassemblez votre équipe et dirigez vos forces surpuissantes contre vos
          amis dans des batailles d'une ampleur cataclysmique ! Avec les décors
          et les figurines inclus dans ce coffret de démarrage, plus rien ne
          vous empêchera de plonger dans l'univers Marvel !
        </p>
        <p className="mecaBlock">
          Une partie de Crisis Protocol se joue en plusieurs manches. Les
          escouades gagnent des points de victoire en remplissant des objectifs.
          Le premier joueur à obtenir 16 points de victoire remporte la partie.
          <br />
          Avant le début de la partie : Chaque joueur recrute une équipe de
          personnages, créant ainsi un réservoir de talents bruts dans lequel il
          puisera plus tard pour créer l'escouade qu'il enverra dans cette
          bataille. Les joueurs travaillent ensemble pour mettre en place les
          caractéristiques et les obstacles sur le champ de bataille qui
          affecteront le combat et pour créer la mission du jeu à partir d'une
          sélection de cartes de crise tirées au hasard.
          <br /> Une fois la mission définie : Chaque joueur fait appel aux
          personnages de sa liste pour former une escouade ayant le meilleur
          mélange de compétences et d'aptitudes pour les tâches à accomplir. Les
          deux escouades s'affronteront en utilisant des attaques uniques, des
          super-pouvoirs et même le champ de bataille lui-même pour mener à bien
          la mission.
        </p>
      </div>
      <div className="modalFooterAsoiaf">
        <button type="button" onClick={props.onClose} id="buttonClose">
          <ImCross className="closeIcon" />
        </button>
      </div>
    </div>
  );
}

MarvelCPModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
