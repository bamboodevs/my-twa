import React from "react";
import { Link } from "react-router-dom";
import "./PriStageExpert.css";
import xGPlanExpert from "../pbc/xgplans/StageE_Expert_FFD700.png";

function PriStageExpert() {
  return (
    <div className="col-12 stage-frame stage-expert">
      <Link to="/stages/expert">
        <div className="d-flex align-items-start justify-content-between">
          <img src={xGPlanExpert} alt="Stage_Expert_50_Ton" className="col-6" />
          <div className="col-6 p-1">
            <h6>Expert Stage</h6>
            <p>
              Income : <br />{" "}
              Lev1(25%)-Lev2(15%)-Lev3(10%)-Lev4(10%)-Lev5(10%)-Lev6(10%)
            </p>
            <p>
              Ar-Bot : <br /> Lev(4) - Daily Profit : 1.5%
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default PriStageExpert;
