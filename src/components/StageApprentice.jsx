import React, { useState } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import "./StageApprentice.css";
import PriBackBtn from "./PriBackBtn";
import StageApprenticePic from "../pbc/xgplans/StageC_Apprentice_008080.png";

function StageApprentice() {
  return (
    <>
      <div className="contentStyle">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 header-back-btn">{<PriBackBtn />}</div>
            <div className="col-12 stages-frame my-2 d-flex align-items-center flex-wrap">
              <div className="col-12 stage-frame-apprentice">
                <div className="col-12">
                  <img src={StageApprenticePic} alt="stage apprentice " />
                </div>
                <div className="col-12 p-2">
                  <h6>The Apprentice Stage</h6>
                  <p>
                    Cost : <strong>200 USDT Coin </strong>
                  </p>
                  <p>
                    The Apprentice stage, with a payment of 200 USDT Coin,
                    allows users to access higher levels of features and
                    opportunities on the NexGen dApp platform. This stage is
                    designed for those who wish to have a more comprehensive
                    experience and earn more income. By receiving a daily profit
                    of 0.95% (You:70%-Yourteam:30%) from deposits in the NexGen
                    arbitrage bot, users can actively participate in the digital
                    economy.
                  </p>
                  <p>
                    Advantages : <br />
                    <ul>
                      <li>Commission from purchasing generations 1-4 users.</li>
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
                        <th>
                          Generation <br />
                          <small>
                            <i>(Level)</i>
                          </small>
                        </th>
                        <th>
                          xG Plan <br />
                          <small>
                            <i>(Team purchase)</i>
                          </small>
                        </th>
                        <th>
                          Ar-Bot <br />
                          <small>
                            <i>(PPD)</i>
                          </small>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>22%</td>
                        <td>7%</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>15%</td>
                        <td>6%</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>10%</td>
                        <td>5%</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>10%</td>
                        <td>4%</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>-</td>
                        <td>3%</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>-</td>
                        <td>2%</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>-</td>
                        <td>1%</td>
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

export default StageApprentice;
