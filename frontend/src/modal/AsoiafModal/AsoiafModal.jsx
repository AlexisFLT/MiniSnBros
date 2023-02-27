/* eslint-disable react/destructuring-assignment */
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import asoiaf from "../../assets/asoiafLogo/asoiaf.png";
import cmon from "../../assets/asoiafLogo/cmonLogo.png";
import "./style.scss";

export default function AsoiafModal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modalcontent">
        <Link to="https://www.cmon.com/" target="_blank">
          <img className="cmon" src={cmon} alt="Cmon logo" />
        </Link>
        <h1 className="modalTitle">À Propos du jeu</h1>
        <Link to="https://asoiaf.cmon.com/" target="_blank">
          <img className="asoiafL" src={asoiaf} alt="Asoiaf logo" />
        </Link>
      </div>
      <div className="modalBody">
        <p className="resumeBlock">
          Le Trône de Fer : le Jeu de Figurines est un jeu compétitif pour au
          moins 2 joueurs. Chacun d’eux contrôle l’une des Grandes Maisons de
          Westeros en commandant aux unités sur le champ de bataille, en
          recrutant des Héros légendaires et en manipulant la scène politique
          pour tenter d’obtenir le plus grand des trophées : le Trône de Fer.
          Les sculptures sont basées sur des illustrations originales conçues
          par l’équipe graphique de Cool Mini or Not, sous la supervision
          directe de George R.R. Martin et de Dark Sword Miniatures, afin
          d’assurer que ce jeu offre aux fans ce qu’ils attendaient depuis des
          années
        </p>
        <p className="mecaBlock">
          À tour de rôles, les joueurs activent l’une de leurs unités qui ne l’a
          pas encore été à ce round. Cette unité combattante peut : Manœuvrer,
          marcher, se replier, attaquer ou charger. L’activation d’une figurine
          peut aussi s’accompagner de cartes Tactiques ayant des effets sur le
          terrain. Chaque camp a son propre jeu de cartes Tactique, auxquelles
          sont ajoutées celles de leur leader, spécifiques. Si c’est une unité
          non combattante qui est activée, elle peut prendre le contrôle de l’un
          des emplacements libre du tableau stratégique : Couronne, Richesse,
          Tactiques, Combat ou Manœuvre et utiliser la capacité stratégique
          attenante, et sa propre compétence. Quand toutes les unités ont été
          activées, on passe à la phase d’entretien : calcul des points de
          victoire, retrait de toutes les figurines du tableau stratégique,
          retour de sa main à trois cartes tactiques, vérification des
          conditions de victoire, etc.
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

AsoiafModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
