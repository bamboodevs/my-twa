import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StickyMenu.css";

function StickyMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    document
      .getElementById("main-content")
      .classList.toggle("blurred", newIsOpen);
    document.querySelector("footer").classList.toggle("blurred", newIsOpen);
    document
      .querySelector(".menu-button")
      .classList.toggle("hidden", newIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.getElementById("main-content").classList.remove("blurred");
    document.querySelector("footer").classList.remove("blurred");
    document.querySelector(".menu-button").classList.remove("hidden");
  };

  return (
    <>
      <div className={`sticky-menu ${isOpen ? "open" : ""}`}>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className="menu-content">
          <Link to="/profile" onClick={closeMenu}>
            Profile
          </Link>
          <Link to="/transactions/list" onClick={closeMenu}>
            Transactions
          </Link>
          <Link to="/messages/list" onClick={closeMenu}>
            Messages
          </Link>
          <hr style={{ border: "1px solid #ffffff", marginTop: "7rem" }} />
          <Link to="/roadmap" onClick={closeMenu}>
            Roadmap
          </Link>
          <Link to="/faq" onClick={closeMenu}>
            FAQ
          </Link>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default StickyMenu;
