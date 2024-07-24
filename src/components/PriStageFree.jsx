import React from "react";
import { Link } from "react-router-dom";
import "./PriStageFree.css";
import xGPlanFree from "../pbc/xgplans/StageFree_Explorer_9333FF.png";

function PriStageFree() {
  return (
    <div className="col-12 stage-frame stage-free">
      <Link to="/stages/free">
        <div className="d-flex align-items-start justify-content-between">
          <img
            src={xGPlanFree}
            alt="Stage_Free_Explorer_0_Ton"
            className="col-6"
          />
          <div className="col-6 p-1">
            <h6>Explorer Stage</h6>
            <h6>Cost : Free</h6>
            <p>
              Income : <br /> Lev1(6%)
            </p>
            <p>
              Ar-Bot : <br /> Not Active !
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default PriStageFree;
