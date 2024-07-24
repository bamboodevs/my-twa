import React from "react";
import { Link } from "react-router-dom";
import "./PriStageInitiate.css";
import xGPlanInitiate from "../pbc/xgplans/StageB_Initiate_87CEEB.png";

function PriStageInitiate() {
  return (
    <div className="col-12 stage-frame stage-initiate">
      <Link to="/stages/initiate">
        <div className="d-flex align-items-start justify-content-between">
          <img
            src={xGPlanInitiate}
            alt="Stage_Initiate_10_Ton"
            className="col-6"
          />
          <div className="col-6 p-1">
            <h6>Initiate Stage</h6>
            <p>
              Income : <br /> Lev1(20%)-Lev2(15%)-Lev3(10%)
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
export default PriStageInitiate;
