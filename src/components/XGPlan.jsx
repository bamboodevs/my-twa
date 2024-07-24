import React, { useState } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Tabs, Tab, Container } from "react-bootstrap";
import PriStageFree from "./PriStageFree";
import PriStageNovice from "./PriStageNovice";
import PriStageInitiate from "./PriStageInitiate";
import PriStageApprentice from "./PriStageApprentice";
import PriStageAdept from "./PriStageAdept";
import PriStageExpert from "./PriStageExpert";
import PriStageMaster from "./PriStageMaster";
import PriStageGrandmaster from "./PriStageGrandmaster";
import PriInvitationLink from "./PriInvitationLink";
import "./XGPlan.css";

function XGPlan() {
  const [key, setKey] = useState("tab1");

  const handleCopy = (event) => {
    const textToCopy = event.target.innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Copied!");
      })
      .catch((err) => {
        console.error("Copy to clipboard failed : ", err);
      });
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <div className="contentStyle">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 xg-plan-info-frame d-flex align-items-center justify-content-center flex-wrap">
            <div className="col-12">
              <Container>
                <Tabs
                  id="controlled-tab-xg"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="">
                  <Tab eventKey="tab1" title="xG Stages">
                    <div className="col-12 ">
                      Welcome to the world of NexGen rewards and special
                      features! Each package includes unique benefits and daily
                      profits, facilitated by AI robots for arbitrage and
                      trading, ensuring zero risk for you. These robots only
                      execute profitable trades, allowing you to focus on your
                      financial future with complete confidence.
                    </div>
                    <div className="col-12 my-2 py-2">
                      <p>
                        <i>
                          All percentages mentioned for the incomes of each of
                          the following stages are sourced from the 'General
                          Reward Fund.' (The General Reward Fund is equivalent
                          to 50% of the amount paid for each of the stages).
                        </i>
                      </p>
                      <p>
                        <i>
                          To know about the xG plan, refer to the
                          <Link to="/Faq">FAQ</Link>
                          section.
                        </i>
                      </p>
                    </div>
                    <Slider {...sliderSettings}>
                      <div>{<PriStageNovice />}</div>
                      <div>{<PriStageInitiate />}</div>
                      <div>{<PriStageApprentice />}</div>
                      <div>{<PriStageAdept />}</div>
                      <div>{<PriStageExpert />}</div>
                      <div>{<PriStageMaster />}</div>
                      <div>{<PriStageGrandmaster />}</div>
                    </Slider>
                  </Tab>
                  <Tab eventKey="tab2" title="Your Stage">
                    <h5 className="col-12">Your Active Stage</h5>
                    {<PriStageFree />}
                    <h5 className="col-12"> Invite Link </h5>
                    <div className="col-12 p-2">
                      <p>
                        Your Invitation Code : <br /> <strong>546828012</strong>
                      </p>
                      <p>
                        Your Link : <br />
                        {<PriInvitationLink />}
                      </p>
                    </div>
                    <h5 className="col-12">Your Team </h5>
                    <div className="col-12 ">
                      <div class="table-responsive text-center col-12">
                        <table class="table table-borderless  table-active-stage">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Level</th>
                              <th>Stage</th>
                              <th>Cost</th>
                              <th>Your Commission</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>1</td>
                              <td>Novice</td>
                              <td>5 TON</td>
                              <td>0.3 TON</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>1</td>
                              <td>Novice</td>
                              <td>5 TON</td>
                              <td>0.3 TON</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="tab3" title="Genealogy">
                    <div>
                      Your xG Team Genealogy . <br /> Coming Soon !
                    </div>
                  </Tab>
                </Tabs>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default XGPlan;
