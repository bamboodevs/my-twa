import React from "react";
import { Link } from "react-router-dom";
import PriBackBtn from "./PriBackBtn";
import "./Roadmap.css";
function Roadmap() {
  return (
    <>
      <div className="contentStyle">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">{<PriBackBtn />}</div>
            <div className="col-12 roadmap-frame my-2">
              <h6>Road Map!</h6>
              <p>
                Our team of pioneers is always striving to advance according to
                the roadmap.
              </p>
              <p className="p-2">
                <small>
                  <i>
                    * : The platform is now in its alpha version. In this
                    version, significant and major changes may occur, but our
                    primary goal is to ensure that none of these changes cause
                    any harm to you. Your trust and happiness in being part of
                    this platform's ecosystem are our main assets.
                  </i>
                </small>
              </p>
              <div class="roadmap-container">
                <h5>Phase 1</h5>
                <ul class="roadmap-list">
                  <li class="completed">
                    Launched NexGen on Telegram Messenger and Getting started
                    with the developers version.
                    <span class="status">✔</span>
                  </li>
                  <li class="completed">
                    Run xG Plan .<span class="status">✔</span>
                  </li>
                  <li class="completed">
                    The possibility of buying Stages for users .
                    <span class="status">✔</span>
                  </li>
                  <li class="completed">
                    First commission payment to users .
                    <span class="status">✔</span>
                  </li>
                  <li class="completed">
                    The possibility of connecting the Ton network wallet .
                    <span class="status">✔</span>
                  </li>
                  <li className="completed">
                    <span>
                      Migrating to a new bot and launching the alpha version
                      with Basic Template.
                    </span>
                    <span class="status">✔</span>
                  </li>
                  <li className="completed">
                    <span>
                      Changing the platform's native currency from TON to the
                      stable currency USDT, which will soon be transferable to
                      the user's personal wallet on the NexGen platform from
                      various networks.
                      <br />
                      <i>
                        (Currently, transfers from the TON network are active.)
                      </i>
                    </span>
                    <span class="status">✔</span>
                  </li>
                  <li className="not-completed">
                    Being able to access the Genealogy Tab in the xG Plan
                    section and monitoring your xG team in this section.
                    <span class="status">✖</span>
                  </li>
                  <li class="not-completed">
                    Unveiling the First Version of the NEXT User Interface
                    <span class="status">✖</span>
                  </li>
                  <li class="not-completed">
                    <span>
                      Starting the lottery . <br />
                      <i>
                        (Conducting the first stage of the monthly lottery
                        draw.)
                      </i>
                    </span>
                    <span class="status">✖</span>
                  </li>
                  <li class="not-completed">
                    Establishing pools of relatives and creating a plan to earn
                    commissions based on the performance of your team members'
                    Arbot.<span class="status">✖</span>
                  </li>
                  <li class="not-completed">
                    Beta version launch !<span class="status">✖</span>
                  </li>
                  <li class="not-completed">
                    Uploading the first lesson in the Academy section and
                    initiating the operations of the Growth and Training Unit.
                    <span class="status">✖</span>
                  </li>
                  <li class="not-completed">
                    Run NexGen DAO and Publication of the first survey .
                    <span class="status">✖</span>
                  </li>

                  <li class="not-completed">
                    Execution and implementation of Daily Micro Actions (D.M.A.)
                    for users and the possibility of more earning money by doing
                    the daily tasks that are assigned to them.
                    <span class="status">✖</span>
                  </li>
                  <li class="not-completed">
                    Starting the transfer process from Web2 to Web3. Smart
                    contract test steps !<span class="status">✖</span>
                  </li>
                  <li class="not-completed">
                    The final stage of testing the NexGen platform to migrate to
                    Web3.<span class="status">✖</span>
                  </li>
                </ul>
                <h5>Phase 2</h5>
                <ul class="roadmap-list">
                  <li class="not-completed">
                    Transferring the platform to the IPFS and continuing the
                    journey on Web3.<span class="status">✖</span>
                  </li>
                  <li class="not-completed">
                    xG coin minting on the blockchain network.
                    <span class="status">✖</span>
                  </li>
                </ul>
                <h5>Phase 3</h5>
                <ul className="roadmap-list">
                  <li class="not-completed">
                    Connect to more networks<span class="status">✖</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
