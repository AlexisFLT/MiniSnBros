/* eslint-disable react/destructuring-assignment */
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import swl from "../../assets/swlLogo/swl.png";
import atomic from "../../assets/mcpLogo/atomic.png";
import "./style.scss";

export default function SWLModal(props) {
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
          <img className="swlL" src={swl} alt="Star Wars Legion logo" />
        </Link>
      </div>
      <div className="modalBody">
        <p className="resumeBlock">
          L’Empire Galactique resserre son étreinte sur la galaxie, sa puissance
          militaire écrasant toute forme de résistance. Depuis des bases
          secrètes, les troupes de l’Alliance Rebelle se dressent vaillamment en
          travers de son chemin, multipliant les tentatives désespérées pour
          enrailler la machine de guerre Impériale. C’est une lutte acharnée,
          chaque bataille pouvant faire la différence entre la victoire et la
          défaite…
        </p>
        <p className="mecaBlock">
          Avec le jeu de figurines Star Wars : Légion, dirigez vos troupes au
          cours d’affrontements épiques ! Chaque figurine représente les
          personnages emblématiques, soldats et véhicules de l’univers de Star
          Wars. Cette boîte contient tout ce dont deux joueurs ont besoin pour
          simuler des batailles entre les forces de l’Empire Galactique et
          celles de l’Alliance Rebelle. En collectionnant des figurines
          supplémentaires pour Star Wars : Légion, vous pourrez agrandir et
          personnaliser vos armées Impériales, Rebelles, de la République et
          Séparatistes.
        </p>
      </div>
      <div className="modalFooterSWL">
        <button type="button" onClick={props.onClose} id="buttonClose">
          <ImCross className="closeIcon" />
        </button>
      </div>
    </div>
  );
}

SWLModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
