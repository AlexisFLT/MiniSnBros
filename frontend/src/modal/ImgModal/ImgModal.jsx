/* eslint-disable react/destructuring-assignment */
import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";
import drogoRecto from "../../assets/CartesTDF/Drogon/drogonRecto.jpg";
import "./style.scss";

export default function ImgModal(props) {
  const { imgName, imgSrc } = props;
  if (!props.show) {
    return null;
  }

  return (
    <div className="modalImg">
      <div className="modalImgBody">
        <h1 className="modalImgTitle">Drogon</h1>
        <img src={imgSrc} alt={imgName} className="imgOriginal" />
        <img src={drogoRecto} alt="Drogon recto" className="imgRecto" />
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
  imgSrc: PropTypes.string.isRequired,
  imgName: PropTypes.string.isRequired,
};
