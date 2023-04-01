/* eslint-disable react/destructuring-assignment */
import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";
import { useRef } from "react";
import "./style.scss";

export default function ImgModalGuardians(props) {
  const noBackImgRef = useRef(false);
  const { mcp } = props;
  if (!props.show) {
    return null;
  }

  const handleNoImgBack = () => {
    if (mcp.srcB === undefined) {
      noBackImgRef.current.classList.add("noBackImg");
    }
  };

  return (
    <div className="modalImgG">
      <div className="modalImgBody" key={mcp.id}>
        <h1 className="modalImgTitleG">
          {mcp.name} <span className="modalSubnameG">- {mcp.subname}</span>
        </h1>
        <div className="contentImages">
          <object className="imgOriginalFnB" onLoad={handleNoImgBack}>
            <img
              src={mcp.srcF}
              alt={mcp.name}
              className="imgOriginalMcp imgFront"
            />
            <img
              src={mcp.srcB}
              alt={mcp.name}
              className="imgOriginalMcp imgBack"
              ref={noBackImgRef}
            />
          </object>
          <div className="cardsmcp">
            <img src={mcp.healthy} alt="Healthy" className="imgRecto" />
            <img src={mcp.injured} alt="Injured" className="imgVerso" />
          </div>
        </div>
      </div>
      <div className="modalImgFootermcp">
        <button type="button" onClick={props.onClose} id="buttonCloseG">
          <ImCross className="closeIcon" />
        </button>
      </div>
    </div>
  );
}

ImgModalGuardians.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  mcp: PropTypes.object.isRequired,
};
