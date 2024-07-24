import React from "react";
import { Link } from "react-router-dom";
import "./PriStageApprentice.css";
import xGPlanApprentice from "../pbc/xgplans/StageC_Apprentice_008080.png";

function PriStageApprentice() {
  return (
    <div className="col-12 stage-frame stage-apprentice">
      <Link to="/stages/apprentice">
        <div className="d-flex align-items-start justify-content-between">
          <img
            src={xGPlanApprentice}
            alt="Stage_Apprentice_20_Ton"
            className="col-6"
          />
          <div className="col-6 p-1">
            <h6>Apprentice Stage</h6>
            <p>
              Income : <br /> Lev1(22%)-Lev2(15%)-Lev3(10%)-Lev4(10%)
            </p>
            <p>
              Ar-Bot : <br /> Lev(2) - Daily Profit : 0.95%
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default PriStageApprentice;
