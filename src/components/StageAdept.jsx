import React, { useState } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import "./StageAdept.css";
import PriBackBtn from "./PriBackBtn";
import StageAdeptPic from "../pbc/xgplans/StageD_Adept_008000.png";

function StageAdept() {
  return (
    <>
      <div className="contentStyle">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 header-back-btn">{<PriBackBtn />}</div>
            <div className="col-12 stages-frame my-2 d-flex align-items-center flex-wrap">
              <div className="col-12 stage-frame-adept">
                <div className="col-12">
                  <img src={StageAdeptPic} alt="stage adept " />
                </div>
                <div className="col-12 p-2">
                  <h6>The Adept Stage</h6>
                  <p>
                    Cost : <strong>500 USDT Coin </strong>
                  </p>
                  <p>
                    The Adept stage, available with a payment of 500 USDT Coin,
                    elevates you to a realm of advanced expertise and revenue
                    generation. This stage is designed for users who wish to
                    delve deeply into the capabilities of the NexGen dApp
                    platform and enjoy additional benefits. By earning a daily
                    profit of 1.2% (You:70%-Yourteam:30%) from your direct
                    deposit in the NexGen Arbitrage Bot and receiving daily
                    commissions from the daily earnings of team members up to
                    seven generations, you can become an active and profitable
                    participant in the digital economy.
                  </p>
                  <p>
                    Advantages : <br />
                    <ul>
                      <li>Commission from purchasing generations 1-5 users.</li>
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
                        <td>24%</td>
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
                        <td>10%</td>
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

export default StageAdept;
