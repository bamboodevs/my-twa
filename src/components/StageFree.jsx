import React, { useState } from "react";
import "./StageFree.css";
import PriBackBtn from "./PriBackBtn";
import StageFreePic from "../pbc/xgplans/StageFree_Explorer_9333FF.png";
function StageFree() {
  return (
    <>
      <div className="contentStyle">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 header-back-btn">{<PriBackBtn />}</div>
            <div className="col-12 stages-frame my-2 d-flex align-items-center flex-wrap">
              <div className="col-12 stage-frame-free">
                <div className="col-12">
                  <img src={StageFreePic} alt="stage free " />
                </div>
                <div className="col-12 p-2">
                  <h6>The Explorer Stage</h6>
                  <p>
                    Cost : <strong>0 TON (Free)</strong>
                  </p>
                  <p>
                    Advantages : <br />
                    <ul>
                      <li>Commission from purchasing level 1 users.</li>
                    </ul>
                  </p>
                  <p>
                    Limitations : <br />
                    <ul>
                      <li>
                        You cannot activate your Arbot in this Stage.
                        <i>(It is not possible to activate in this stage)</i>
                      </li>
                      <li>
                        You can only use the commissions you receive from buying
                        a team to improve your Stage.
                      </li>
                    </ul>
                  </p>
                </div>
                <div class="table-responsive text-center col-12 p-2">
                  <table class="table table-borderless  table-active-stage">
                    <thead>
                      <tr>
                        <th>Level</th>
                        <th>Commission</th>
                        <th>Ar-Bot</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>6%</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StageFree;
