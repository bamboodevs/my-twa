import React from "react";
import { Link } from "react-router-dom";
import "./PriStageAdept.css";
import xGPlanAdept from "../pbc/xgplans/StageD_Adept_008000.png";

function PriStageAdept() {
  return (
    <div className="col-12 stage-frame stage-adept">
      <Link to="/stages/adept">
        <div className="d-flex align-items-start justify-content-between">
          <img src={xGPlanAdept} alt="Stage_Adept_50_Ton" className="col-6" />
          <div className="col-6 p-1">
            <h6>Adept Stage</h6>
            <p>
              Income : <br /> Lev1(24%)-Lev2(15%)-Lev3(10%)-Lev4(10%)-Lev5(10%)
            </p>
            <p>
              Ar-Bot : <br /> Lev(3) - Daily Profit : 1.2%
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default PriStageAdept;
