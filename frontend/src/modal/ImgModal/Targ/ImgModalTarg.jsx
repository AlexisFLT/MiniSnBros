/* eslint-disable react/destructuring-assignment */
import { ImCross } from "react-icons/im";
// import { useContext } from "react";
import PropTypes from "prop-types";
// import ImgContext from "@services/Context/ImgContext";
import "./style.scss";
import { useRef } from "react";

export default function ImgModalTarg(props) {
  const characterRef = useRef(false);
  const sizeCardCharRef = useRef(false);
  const { asoiaf } = props;
  if (!props.show) {
    return null;
  }

  const handleCharCards = () => {
    if (asoiaf.character === true) {
      characterRef.current.classList.add("cardsChar");
    }
  };

  return (
    <div className="modalImgT">
      <div className="modalImgBody" key={asoiaf.id}>
        <h1 className="modalImgTitle">
          {asoiaf.name} -<span className=" "> {asoiaf.subname}</span>
        </h1>
        <div className="contentImages">
          <img src={asoiaf.src} alt={asoiaf.name} className="imgOriginal" />
          <div className="cardsAsoiaf" ref={characterRef}>
            <img
              src={asoiaf.recto}
              alt="Recto"
              className="imgRecto"
              ref={sizeCardCharRef}
              onLoad={handleCharCards}
            />
            <img
              src={asoiaf.verso}
              alt="Verso"
              className="imgVerso"
              ref={sizeCardCharRef}
              onLoad={handleCharCards}
            />
          </div>
        </div>
      </div>
      <div className="modalImgFooterAsoiaf">
        <button type="button" onClick={props.onClose} id="buttonClose">
          <ImCross className="closeIcon" />
        </button>
      </div>
    </div>
  );
}

ImgModalTarg.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  asoiaf: PropTypes.object.isRequired,
};
