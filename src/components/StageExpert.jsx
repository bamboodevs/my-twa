import React, { useState } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import "./StageExpert.css";
import PriBackBtn from "./PriBackBtn";
import StageExpertPic from "../pbc/xgplans/StageE_Expert_FFD700.png";
function StageExpert() {
  return (
    <>
      <div className="contentStyle">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 header-back-btn">{<PriBackBtn />}</div>

            <div className="col-12 stages-frame my-2 d-flex align-items-center flex-wrap">
              <div className="col-12 stage-frame-expert">
                <div className="col-12">
                  <img src={StageExpertPic} alt="stage expert " />
                </div>
                <div className="col-12 p-2">
                  <h6>The Expert Stage</h6>
                  <p>
                    Cost : <strong>1,000 USDT Coin </strong>
                  </p>
                  <p>
                    Achieve a higher level of exclusive features and services on
                    the NexGen dApp platform with the Expert tier. By investing
                    1,000 USDT Coins, you gain access to a world of unparalleled
                    opportunities and benefits. This tier opens the door to
                    significant profits and more active participation in the
                    digital economy. <br />
                    <br />
                    Imagine increasing your wealth daily with a 1.5% daily
                    return on your deposit in the NexGen arbitrage robot.
                    Motivational slogans like "The Path to Financial Mastery"
                    and "Build Tomorrow Today with NexGen" will prepare you to
                    move towards financial success. <br />
                    <br />
                    The Expert tier also includes 20 lottery tickets, boosting
                    your chances of winning larger cash prizes. Don't miss this
                    exceptional opportunity to become a key and influential
                    member of the NexGen platform network. <br />
                    <br />
                    By joining this tier, you not only benefit from higher daily
                    returns, but you also pave the way for a brighter and more
                    productive future. The Expert tier is the best choice for
                    those seeking to maximize their income and enjoy exclusive
                    benefits. Move towards financial success and increased
                    productivity and take advantage of this golden opportunity.
                  </p>
                  <p>
                    Advantages : <br />
                    <ul>
                      <li>
                        Get a share of the daily revenue from team members up to
                        7 generations.
                      </li>
                      <li>
                        Receiving commissions from purchases made by users in
                        generations 1-6 in the xG Plan.
                      </li>
                    </ul>
                  </p>
                  <p>
                    Limitations : <br />
                    <ul>
                      <li>
                        After the first withdrawal, a 30-day waiting period will
                        be imposed for the next withdrawal.
                      </li>
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
                        <td>25%</td>
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
                        <td>10%</td>
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

export default StageExpert;
