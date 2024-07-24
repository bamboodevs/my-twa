import React, { useState } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import "./Faq.css";
// import icoArrowleft from "../pbc/icon/angle-small-left-white.svg";
import PriBackBtn from "./PriBackBtn";
function Faq() {
  const [key, setKey] = useState("tab1");

  return (
    <>
      <div className="contentStyle">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 header-back-btn">{<PriBackBtn />}</div>
            <div className="col-12 faq-frame my-2">
              <div className="faq-frame-header">
                <h6>Frequently Asked Questions</h6>
                <p>Here are some frequently asked questions...</p>
              </div>

              <Container>
                <Tabs
                  id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="">
                  <Tab eventKey="tab1" title="Main Questions">
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            What is NexGen?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            {/* <strong>
                              This is the first item's accordion body.
                            </strong> */}
                            NexGen is a cutting-edge online investment platform
                            that offers all interested clients direct access to
                            AI-managed inter-exchange cryptocurrency arbitrage
                            trading.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo">
                            What is NexGen business model?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            NexGen manages private capital from corporate and
                            individual investors through its online platform.
                            AI-driven arbitrage trading bots handle
                            cryptocurrency exchange transactions. Profits are
                            distributed to clients based on their selected
                            investment plans.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree">
                            I am interested in joining. Are there any specific
                            requirements or restrictions?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            We accept investors and partners worldwide,
                            regardless of citizenship, background, or expertise.
                            The only requirements are being of legal age (18
                            years) according to your country's laws, and
                            agreeing to and strictly following our Terms and
                            Conditions.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour">
                            How do I register for an account?
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            Signing up is free and easy. Click "Sign up," fill
                            out the form, and accept our Terms and Conditions.
                            Ensure your login details are unique and save them.
                            After submitting, follow the instructions to confirm
                            and activate your account.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFive">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive">
                            Can my friends and relatives register using my PC?
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            Yes, multiple users can register from the same
                            device and IP address, but one person cannot have
                            multiple accounts. In case of disputes, the company
                            may require identity verification and can block
                            funds until the process is complete.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSix">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix">
                            Is it possible to change my account password?
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingSix"
                          data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            Yes, it is recommended to regularly change your
                            password to keep your account secure. You can update
                            your password in the "Settings" section of your
                            personal account.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSeven">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven">
                            Can I update my email address and payment details?
                          </button>
                        </h2>
                        <div
                          id="collapseSeven"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingSeven"
                          data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            No, you cannot. For security reasons, you must
                            contact support to change your email and payment
                            wallet addresses. The support officer will verify
                            your identity and assist you in updating your
                            account credentials and details.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingEight">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEight"
                            aria-expanded="false"
                            aria-controls="collapseEight">
                            What do I do if I forgot my username or password?
                          </button>
                        </h2>
                        <div
                          id="collapseEight"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingEight"
                          data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            Click "Forgot password?" at the bottom of the login
                            form and follow the email instructions for password
                            recovery. If you still have issues, contact our
                            technical support.
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="tab2" title="xG Plan">
                    <div>
                      <div class="accordion" id="XGPlan">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="XGPlan_headingOne">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#XGPlan_collapseOne"
                              aria-expanded="true"
                              aria-controls="XGPlan_collapseOne">
                              What investment opportunities do you offer?
                            </button>
                          </h2>
                          <div
                            id="XGPlan_collapseOne"
                            class="accordion-collapse collapse show"
                            aria-labelledby="XGPlan_headingOne"
                            data-bs-parent="#XGPlan">
                            <div class="accordion-body">
                              NexGen offers two investment options: <br /> 1.
                              Ar-Bot: Daily profit added to your wallet balance
                              based on your Arbot level. <br /> 2. XG Plan: Earn
                              commissions by building a team and receiving
                              payouts from seven levels based on your stage in
                              the XG plan.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="XGPlan_headingTwo">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#XGPlan_collapseTwo"
                              aria-expanded="true"
                              aria-controls="XGPlan_collapseTwo">
                              What is xG Plan?
                            </button>
                          </h2>
                          <div
                            id="XGPlan_collapseTwo"
                            class="accordion-collapse collapse "
                            aria-labelledby="XGPlan_headingTwo"
                            data-bs-parent="#XGPlan">
                            <div class="accordion-body">
                              The xG Plan is an incentive program to attract
                              more users and encourage active users in the
                              platform ecosystem to invite their friends and
                              acquaintances to the platform.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="tab3" title="Other">
                    <div>Content for Tab 3</div>
                  </Tab>
                </Tabs>
              </Container>
            </div>
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
