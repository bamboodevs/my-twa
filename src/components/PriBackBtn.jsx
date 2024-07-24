import React from "react";
import { useNavigate } from "react-router-dom";
import "./PriBackBtn.css";
import icoArrowleft from "../pbc/icon/angle-small-left-white.svg";

function PriBackBtn() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="d-flex align-items-center justify-content-between back-btn-header">
      <button className="btn btn-sm btn-secondary d-flex" onClick={goBack}>
        <img src={icoArrowleft} className="back-btn" alt="back icon" />
      </button>
    </div>
  );
}
export default PriBackBtn;
