import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Lottery from "./Lottery";
import icoArrowUp from "../pbc/icon/select.svg";
import stkArBot from "../pbc/icon/arbot512.svg";
import icoGrowUp from "../pbc/icon/growup-white.svg";
function Home() {
  return (
    <div className="contentStyle">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 dashboard-allert-box">
            <div
              class="alert alert-secondary alert-dismissible fade show"
              role="alert">
              <small>
                Everything you might need to know about the rules, policies, and
                procedures of the NexGen platform.
                <Link to="/Faq">FAQ</Link>
              </small>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"></button>
            </div>
          </div>
          <div className="col-12 dashboard-balance d-flex justify-content-center">
            <div className="dashboard-balance-frame d-flex justify-content-center align-items-center flex-wrap ">
              <h5 className="col-12 text-center">Balance:</h5>
              <p className="col-12 text-center mb-3">
                <strong>25.05</strong> <small>USDT</small>
              </p>
              <div className="col-12 text-center activate-plans">
                xG Plan Stage : FREE
                <br />
                ArBot : is Not Active for this stage
              </div>
            </div>
          </div>
          <div className="col-12 mb-3 d-flex justify-content-center lottery-block">
            <Lottery />
          </div>
          <div className="col-12 mb-3 dashboard-arbibot d-flex flex-row flex-wrap">
            <h6 className="col-12">Your ArBot Level</h6>
            <div className="col-12">
              <small>
                <i>You Cant't Active ArBot in this xG Stage.</i>
              </small>
            </div>
            <div class="table-responsive text-center col-12">
              <table class="table table-borderless   table-active-stage">
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Cost</th>
                    <th>PPD</th>
                    <th>Upgrade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>15 USDT</td>
                    <td>~ 0.12 USDT</td>
                    <td>
                      <Link to="/xg-plan">
                        <div className="btn btn-warning btn-sm">
                          <img
                            src={icoArrowUp}
                            className="upgrade-stage-icon"
                            alt="^"
                          />
                        </div>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-12 ">
              <div className="container">
                <div className="row">
                  <div className="col-12 arbot-stage d-flex flex-wrap justify-content-between align-items-center ">
                    <div className="col-4">
                      <img
                        src={stkArBot}
                        className="arbot-stage-sticker"
                        alt="ArBot Sticker"
                      />
                    </div>
                    <div className="col-8">
                      <h6>Your Active Arbitrage Bot</h6>
                      <div>
                        <table class="table table-borderless   table-active-arbot">
                          <tbody>
                            <tr>
                              <td>Level </td>
                              <td>1</td>
                            </tr>
                            <tr>
                              <td>Profit Per Day (PPD) </td>
                              <td>0.85%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
