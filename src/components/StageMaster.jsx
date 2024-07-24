import React, { useState } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import "./StageMaster.css";
import PriBackBtn from "./PriBackBtn";
import StageMasterPic from "../pbc/xgplans/StageF_Master_FFA500.png";
function StageMaster() {
  return (
    <>
      <div className="contentStyle">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 header-back-btn">{<PriBackBtn />}</div>

            <div className="col-12 stages-frame my-2 d-flex align-items-center flex-wrap">
              <div className="col-12 stage-frame-master">
                <div className="col-12">
                  <img src={StageMasterPic} alt="stage master " />
                </div>
                <div className="col-12 p-2">
                  <h6>The Master Stage</h6>
                  <p>
                    Cost : <strong>250 TON </strong>
                  </p>
                  <p>
                    Advantages : <br />
                    <ul>
                      <li>Commission from purchasing levels 1-7 users.</li>
                    </ul>
                  </p>
                  <p>
                    Limitations : <br />
                    <ul>
                      <li>-</li>
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
                        <td>25%</td>
                        <td>Lev1</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>15%</td>
                        <td>Lev1</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>10%</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>10%</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>10%</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>10%</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>15%</td>
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

export default StageMaster;
