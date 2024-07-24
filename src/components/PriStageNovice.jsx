import React from "react";
import { Link } from "react-router-dom";
import "./PriStageNovice.css";
import xGPlanNovice from "../pbc/xgplans/StageA_Novice_d3d3d3.png";

function PriStageNovice() {
  return (
    <div className="col-12 stage-frame stage-novice">
      <Link to="/stages/novice">
        <div className="d-flex align-items-start justify-content-between">
          <img src={xGPlanNovice} alt="Stage_Novice_5_Ton" className="col-6" />
          <div className="col-6 p-1">
            <h6>Explorer Stage</h6>
            <p>
              Income : <br /> Lev1(18%)-Lev2(15%)
            </p>
            <p>
              Ar-Bot : <br /> Lev(1) - Daily Profit : 0.85%
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default PriStageNovice;
