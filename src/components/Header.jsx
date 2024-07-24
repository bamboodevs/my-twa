import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../pbc/logos/logo.svg";
import WalletConnect from "../pbc/icon/link.svg";

function Header() {
  return (
    <header className="headerStyle">
      {/* <h6>Fixed Header</h6> */}
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-3 logo-top">
            <img src={Logo} className="logo-top-svg" alt="" />
          </div>
          <div className="col-6 info-top">
            <div className="info-top-frame">
              <p>ShayanSaei</p>
              <p className="walletAddress d-flex align-items-center justify-content-between">
                <small className="">UQB...qcfY</small>
                <small className="walletConnectBTN btn btn-sm">
                  <img
                    src={WalletConnect}
                    className="WallectConnectIcon"
                    alt=""
                  />
                </small>
              </p>
            </div>
          </div>
          <div className="col-3 menu-top text-center">
            <Link to="/roadmap">
              <div className="badge badge-sm bg-secondary ">
                {"<\\ Alpha> "} <br />
                version
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
