import React, { useState } from "react";
// import { Tabs, Tab, Container } from "react-bootstrap";
import "./StageNovice.css";
import PriBackBtn from "./PriBackBtn";
import StageNovicePic from "../pbc/xgplans/StageA_Novice_d3d3d3.png";

function StageNovice() {
  return (
    <>
      <div className="contentStyle">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 header-back-btn">{<PriBackBtn />}</div>
            <div className="col-12 stages-frame my-2 d-flex align-items-center flex-wrap">
              <div className="col-12 stage-frame-novice">
                <div className="col-12">
                  <img src={StageNovicePic} alt="stage novice " />
                </div>
                <div className="col-12 p-2">
                  <h6>The Novice Stage</h6>
                  <p>
                    Cost : <strong>5 TON </strong>
                  </p>
                  <p>
                    Advantages : <br />
                    <ul>
                      <li>Commission from purchasing levels 1,2 users.</li>
                    </ul>
                  </p>
                  <p>
                    Limitations : <br />
                    <ul>
                      <li>
                        For the first impression, expanding the team
                        horizontally to include 2 relatives is required.
                      </li>
                      <li>
                        For the second withdrawal, a successful registration of
                        a purchase by a relative is required.
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
                        <td>18%</td>
                        <td>Lev1</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>15%</td>
                        <td>Lev1</td>
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
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StageNovice;
