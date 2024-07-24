import React from "react";
import { Link } from "react-router-dom";
import "./PriStageMaster.css";
import xGPlanMaster from "../pbc/xgplans/StageF_Master_FFA500.png";

function PriStageMaster() {
  return (
    <div className="col-12 stage-frame stage-master">
      <Link to="/stages/master">
        <div className="d-flex align-items-start justify-content-between">
          <img
            src={xGPlanMaster}
            alt="Stage_Master_250_Ton"
            className="col-6"
          />
          <div className="col-6 p-1">
            <h6>Master Stage</h6>
            <p>
              Income : <br />{" "}
              Lev1(25%)-Lev2(15%)-Lev3(10%)-lev4(10%)-Lev5(10%)-Lev6(10%)-Lev7(15%)
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
export default PriStageMaster;
