/* eslint-disable react/destructuring-assignment */
import { ImCross } from "react-icons/im";
// import { useContext } from "react";
import PropTypes from "prop-types";
// import ImgContext from "@services/Context/ImgContext";
import "./style.scss";

export default function ImgModal(props) {
  const { asoiaf } = props;
  // const { asoiaf } = useContext(ImgContext);
  if (!props.show) {
    return null;
  }

  return (
    <div className="modalImg">
      <div className="modalImgBody" key={asoiaf.id}>
        <h1 className="modalImgTitle">{asoiaf.name}</h1>
        <div className="contentImages">
          <img src={asoiaf.src} alt={asoiaf.name} className="imgOriginal" />
          <div className="cardsAsoiaf">
            <img src={asoiaf.recto} alt="Recto" className="imgRecto" />
            <img src={asoiaf.verso} alt="Verso" className="imgVerso" />
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

ImgModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  // imgSrc: PropTypes.string.isRequired,
  // imgName: PropTypes.string.isRequired,
  asoiaf: PropTypes.string.isRequired,
};
