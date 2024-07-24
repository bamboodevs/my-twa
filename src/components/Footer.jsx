import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import icoDash from "../pbc/icon/house-user-white.svg";
import icoXG from "../pbc/logos/xG_logo.svg";
import icoPool from "../pbc/icon/selling-white.svg";

function Footer() {
  const location = useLocation();
  return (
    <footer className="footer-style">
      <div className="menu-footer d-flex justify-content-center">
        <nav className="menu-footer-nav d-flex">
          <Link
            className={`d-flex flex-row flex-wrap aling-items-center justify-content-center  menu-footer-item ${
              location.pathname === "/" ? "active" : ""
            }`}
            to="/">
            <img src={icoDash} alt="" />
            <div>Dashboard</div>
          </Link>
          <Link
            className={`d-flex flex-row flex-wrap aling-items-center justify-content-center  menu-footer-item ${
              location.pathname === "/xg-plan" ? "active" : ""
            }`}
            to="/xg-plan">
            <img src={icoXG} alt="" />
            <div>xG Plan</div>
          </Link>
          <Link
            className={`d-flex flex-row flex-wrap aling-items-center justify-content-center  menu-footer-item ${
              location.pathname === "/pool" ? "active" : ""
            }`}
            to="/pool">
            <img src={icoPool} alt="" />
            <div>Pool</div>
          </Link>
        </nav>
      </div>
      <small className="footer-template-tag">Basic Template is running</small>
    </footer>
  );
}

export default Footer;
